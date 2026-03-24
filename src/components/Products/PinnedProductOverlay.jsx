import { StyledPinnedProductOverlay } from "./PinnedProductOverlay.styled";
import { useSelector, useDispatch } from "react-redux";
import { selectPinnedProduct } from "../../store/product";
import { unpinProduct } from "../../store/streaming";
import { BsX, BsPinAngleFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";

const PinnedProductOverlay = ({ position = "bottom-right" }) => {
  const dispatch = useDispatch();
  const product = useSelector(selectPinnedProduct);

  if (!product) return null;

  const handleUnpin = () => {
    dispatch(unpinProduct());
  };

  const discountedPrice = product.discount
    ? (product.price * (1 - product.discount / 100)).toFixed(2)
    : product.price.toFixed(2);

  return (
    <StyledPinnedProductOverlay position={position}>
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
          <button
            className="buy-now-btn"
            disabled={product.stock === 0}
          >
            <FaShoppingCart />
            Buy Now
          </button>
        </div>
      </div>
    </StyledPinnedProductOverlay>
  );
};

export default PinnedProductOverlay;
