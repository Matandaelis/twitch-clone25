import { useState, useEffect } from "react";
import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  ModalContent,
  ProductImage,
  ProductInfo,
  QuantitySelector,
  ModalActions,
  AddToCartButton,
  BuyNowButton,
  OutOfStockButton,
} from "./ProductModal.styled.js";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cart";
import { FaTimes, FaShoppingCart, FaBolt, FaBox, FaCheck } from "react-icons/fa";

const ProductModal = ({ product, isOpen, onClose }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  const discountedPrice = product.discount
    ? product.price * (1 - product.discount / 100)
    : product.price;

  const isInStock = product.stock > 0;
  const isLowStock = product.stock > 0 && product.stock <= 10;

  const handleQuantityChange = (delta) => {
    setQuantity((prev) => Math.max(1, Math.min(product.stock, prev + delta)));
  };

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId: product.id,
        title: product.title,
        price: discountedPrice,
        image: product.images[0],
        quantity,
      })
    );
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    alert("Proceeding to checkout!");
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <h2>Product Details</h2>
          <button className="close-btn" onClick={onClose}>
            <FaTimes />
          </button>
        </ModalHeader>

        <ModalContent>
          <ProductImage>
            <img
              src={product.images[0] || "./images/products/placeholder.jpg"}
              alt={product.title}
            />
          </ProductImage>

          <ProductInfo $lowStock={isLowStock} $inStock={isInStock}>
            <div className="product-category">{product.category}</div>
            <h3>{product.title}</h3>
            <p className="description">{product.description}</p>

            <div className="price-section">
              {product.discount > 0 && (
                <span className="original-price">${product.price.toFixed(2)}</span>
              )}
              <span className="current-price">${discountedPrice.toFixed(2)}</span>
              {product.discount > 0 && (
                <span className="discount-badge">{product.discount}% OFF</span>
              )}
            </div>

            <div className="stock-info">
              <span className="stock-dot" />
              <span className="stock-count">
                {isInStock
                  ? isLowStock
                    ? `Only ${product.stock} left!`
                    : `${product.stock} in stock`
                  : "Out of stock"}
              </span>
            </div>

            <div className="product-stats">
              <div className="stat">
                <div className="stat-value">{product.sold}</div>
                <div className="stat-label">Sold</div>
              </div>
              <div className="stat">
                <div className="stat-value">{product.stock}</div>
                <div className="stat-label">In Stock</div>
              </div>
              {product.discount > 0 && (
                <div className="stat">
                  <div className="stat-value">{product.discount}%</div>
                  <div className="stat-label">Discount</div>
                </div>
              )}
            </div>

            {isInStock && (
              <QuantitySelector>
                <span className="quantity-label">Quantity:</span>
                <div className="quantity-controls">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <span className="quantity-value">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    disabled={quantity >= product.stock}
                  >
                    +
                  </button>
                </div>
              </QuantitySelector>
            )}
          </ProductInfo>
        </ModalContent>

        <ModalActions>
          {isInStock ? (
            <>
              <AddToCartButton onClick={handleAddToCart} disabled={!isInStock}>
                {justAdded ? (
                  <>
                    <FaCheck /> Added!
                  </>
                ) : (
                  <>
                    <FaShoppingCart /> Add to Cart
                  </>
                )}
              </AddToCartButton>
              <BuyNowButton onClick={handleBuyNow}>
                <FaBolt /> Buy Now
              </BuyNowButton>
            </>
          ) : (
            <OutOfStockButton disabled>
              <FaBox /> Out of Stock
            </OutOfStockButton>
          )}
        </ModalActions>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default ProductModal;