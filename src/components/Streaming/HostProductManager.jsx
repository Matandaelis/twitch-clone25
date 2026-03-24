import { useState, useMemo } from "react";
import { StyledHostProductManager } from "./HostProductManager.styled";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllProducts,
  updateStock,
} from "../../store/product";
import { 
  selectPinnedProductId as selectStreamingPinnedProductId, 
  pinProduct as streamingPinProduct, 
  unpinProduct as streamingUnpinProduct 
} from "../../store/streaming";
import { BsSearch, BsPinAngleFill, BsPinAngle, BsExclamationTriangle } from "react-icons/bs";

const HostProductManager = ({ room, isStreamer = false }) => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const pinnedProductId = useSelector(selectStreamingPinnedProductId);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStock, setFilterStock] = useState("all");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      
      let matchesStock = true;
      if (filterStock === "low") {
        matchesStock = product.stock <= 10;
      } else if (filterStock === "out") {
        matchesStock = product.stock === 0;
      }
      
      return matchesSearch && matchesStock;
    });
  }, [products, searchQuery, filterStock]);

  const handleTogglePin = async (productId) => {
    if (!isStreamer) return;
    
    if (pinnedProductId === productId) {
      dispatch(streamingUnpinProduct());
      if (room?.localParticipant) {
        try {
          await room.localParticipant.setAttributes({});
        } catch (e) {
          console.error("Failed to clear pinned product attribute:", e);
        }
      }
    } else {
      dispatch(streamingPinProduct(productId));
      if (room?.localParticipant) {
        try {
          await room.localParticipant.setAttributes({ pinnedProductId: productId });
        } catch (e) {
          console.error("Failed to set pinned product attribute:", e);
        }
      }
    }
  };

  const handleStockUpdate = (productId, adjustment) => {
    dispatch(updateStock({ productId, quantity: adjustment }));
  };

  const getStockStatus = (stock) => {
    if (stock === 0) return "out";
    if (stock <= 5) return "critical";
    if (stock <= 10) return "low";
    return "normal";
  };

  const getStockLabel = (stock) => {
    if (stock === 0) return "Out of Stock";
    if (stock <= 5) return "Critical";
    if (stock <= 10) return "Low Stock";
    return "In Stock";
  };

  return (
    <StyledHostProductManager>
      <div className="manager-header">
        <h3>Product Manager</h3>
        <p className="subtitle">Manage and pin products for your stream</p>
      </div>

      <div className="manager-filters">
        <div className="search-box">
          <BsSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <select
          value={filterStock}
          onChange={(e) => setFilterStock(e.target.value)}
          className="stock-filter"
        >
          <option value="all">All Stock</option>
          <option value="low">Low Stock</option>
          <option value="out">Out of Stock</option>
        </select>
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => {
          const stockStatus = getStockStatus(product.stock);
          const isPinned = pinnedProductId === product.id;
          
          return (
            <div
              key={product.id}
              className={`product-card ${isPinned ? "pinned" : ""} ${stockStatus}`}
            >
              <div className="product-image">
                <img
                  src={product.images[0] || "./images/products/placeholder.jpg"}
                  alt={product.title}
                />
                {isPinned && (
                  <div className="pin-badge">
                    <BsPinAngleFill />
                    <span>Pinned</span>
                  </div>
                )}
                {stockStatus !== "normal" && (
                  <div className={`stock-badge ${stockStatus}`}>
                    <BsExclamationTriangle />
                    <span>{getStockLabel(product.stock)}</span>
                  </div>
                )}
              </div>
              
              <div className="product-info">
                <h4 className="product-title">{product.title}</h4>
                <div className="product-price">
                  ${product.discount
                    ? (product.price * (1 - product.discount / 100)).toFixed(2)
                    : product.price.toFixed(2)}
                  {product.discount > 0 && (
                    <span className="original-price">${product.price.toFixed(2)}</span>
                  )}
                </div>
                <div className="stock-info">
                  <span className={`stock-count ${stockStatus}`}>
                    {product.stock} in stock
                  </span>
                </div>
              </div>

              <div className="product-actions">
                <button
                  className={`pin-btn ${isPinned ? "pinned" : ""}`}
                  onClick={() => handleTogglePin(product.id)}
                  disabled={!isStreamer}
                  title={isStreamer ? (isPinned ? "Unpin product" : "Pin to stream") : "Only host can pin products"}
                >
                  {isPinned ? <BsPinAngleFill /> : <BsPinAngle />}
                  {isPinned ? "Pinned" : "Pin"}
                </button>
                
                {isStreamer && (
                  <div className="stock-controls">
                    <button
                      className="stock-btn decrease"
                      onClick={() => handleStockUpdate(product.id, -1)}
                      disabled={product.stock === 0}
                    >
                      -
                    </button>
                    <span className="stock-label">Stock</span>
                    <button
                      className="stock-btn increase"
                      onClick={() => handleStockUpdate(product.id, 1)}
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {filteredProducts.length === 0 && (
        <div className="no-products">
          <p>No products found matching your filters.</p>
        </div>
      )}

      <div className="manager-summary">
        <div className="summary-item">
          <span className="label">Total Products:</span>
          <span className="value">{products.length}</span>
        </div>
        <div className="summary-item">
          <span className="label">Low Stock:</span>
          <span className="value warning">{products.filter(p => p.stock <= 10).length}</span>
        </div>
        <div className="summary-item">
          <span className="label">Out of Stock:</span>
          <span className="value danger">{products.filter(p => p.stock === 0).length}</span>
        </div>
        <div className="summary-item">
          <span className="label">Currently Pinned:</span>
          <span className="value">{pinnedProductId ? "Yes" : "No"}</span>
        </div>
      </div>
    </StyledHostProductManager>
  );
};

export default HostProductManager;