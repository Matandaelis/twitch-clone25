import { useState } from "react";
import { StyledPinnedProductOverlay } from "./PinnedProductOverlay.styled";
import ProductModal from "./ProductModal";
import { useSelector, useDispatch } from "react-redux";
import { selectPinnedProduct } from "../../store/product";
import { unpinProduct } from "../../store/streaming";
import { addToCart } from "../../store/cart";
import { incrementProductImpressions, incrementCartConversions } from "../../store/analytics";
import { BsX, BsPinAngleFill, BsEye } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";

const PinnedProductOverlay = ({ position = "bottom-right" }) => {
  const dispatch = useDispatch();
  const product = useSelector(selectPinnedProduct);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!product) return null;

  const handleUnpin = (e) => {
    e.stopPropagation();
    dispatch(unpinProduct());
  };

  const handleProductClick = () => {
    dispatch(incrementProductImpressions(1));
    setIsModalOpen(true);
  };

  const handleQuickAdd = (e) => {
    e.stopPropagation();
    if (product.stock > 0) {
      dispatch(
        addToCart({
          productId: product.id,
          title: product.title,
          price: product.discount
            ? product.price * (1 - product.discount / 100)
            : product.price,
          image: product.images[0],
          quantity: 1,
        })
      );
      dispatch(incrementCartConversions());
    }
  };

  const discountedPrice = product.discount
    ? (product.price * (1 - product.discount / 100)).toFixed(2)
    : product.price.toFixed(2);

  return (
    <>
      <StyledPinnedProductOverlay position={position} onClick={handleProductClick}>
        <div className="pinned-badge">
          <BsPinAngleFill />
          <span>Pinned Product</span>
        </div>
        <button className="close-btn" onClick={handleUnpin}>
          <BsX />
        </button>
        <div className="product-content">
          <div className="product-image">
            <img
              src={product.images[0] || "./images/products/placeholder.jpg"}
              alt={product.title}
            />
          </div>
          <div className="product-details">
            <h4 className="product-title">{product.title}</h4>
            <div className="price-row">
              {product.discount > 0 && (
                <span className="original-price">
                  ${product.price.toFixed(2)}
                </span>
              )}
              <span className="current-price">${discountedPrice}</span>
            </div>
            <div className="stock-info">
              {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
            </div>
            <div className="action-buttons">
              <button
                className="buy-now-btn"
                disabled={product.stock === 0}
                onClick={handleQuickAdd}
              >
                <FaShoppingCart />
                Quick Add
              </button>
              <button className="view-details-btn" onClick={(e) => { e.stopPropagation(); setIsModalOpen(true); }}>
                <BsEye />
                Details
              </button>
            </div>
          </div>
        </div>
      </StyledPinnedProductOverlay>

      <ProductModal
        product={product}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default PinnedProductOverlay;
