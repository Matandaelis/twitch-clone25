import { StyledProductCard } from "./ProductCard.styled";
import { useDispatch, useSelector } from "react-redux";
import { pinProduct, selectPinnedProductId } from "../../store/streaming";
import { BsPinAngleFill, BsPinAngle } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";

const ProductCard = ({ product, onClick, showPin = false }) => {
  const dispatch = useDispatch();
  const pinnedProductId = useSelector(selectPinnedProductId);
  const isPinned = pinnedProductId === product.id;

  const handlePin = (e) => {
    e.stopPropagation();
    if (isPinned) {
      dispatch(pinProduct(null));
    } else {
      dispatch(pinProduct(product.id));
    }
  };

  const discountedPrice = product.discount
    ? (product.price * (1 - product.discount / 100)).toFixed(2)
    : product.price.toFixed(2);

  return (
    <StyledProductCard onClick={() => onClick && onClick(product)}>
      <div className="product-image">
        <img
          src={product.images[0] || "./images/products/placeholder.jpg"}
          alt={product.title}
        />
        {product.discount > 0 && (
          <div className="discount-badge">-{product.discount}%</div>
        )}
        {product.stock <= 10 && product.stock > 0 && (
          <div className="low-stock-badge">Low Stock</div>
        )}
        {product.stock === 0 && (
          <div className="out-of-stock-badge">Out of Stock</div>
        )}
        {showPin && (
          <button
            className={`pin-button ${isPinned ? "pinned" : ""}`}
            onClick={handlePin}
          >
            {isPinned ? <BsPinAngleFill /> : <BsPinAngle />}
          </button>
        )}
      </div>
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-price-row">
          <div className="price-container">
            {product.discount > 0 && (
              <span className="original-price">${product.price.toFixed(2)}</span>
            )}
            <span className="current-price">${discountedPrice}</span>
          </div>
          <span className="stock-info">{product.stock} left</span>
        </div>
        <div className="product-actions">
          <button
            className="add-to-cart-btn"
            disabled={product.stock === 0}
          >
            <FaShoppingCart />
            Add to Cart
          </button>
        </div>
      </div>
    </StyledProductCard>
  );
};

export default ProductCard;
