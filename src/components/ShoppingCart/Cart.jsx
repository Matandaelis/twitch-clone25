import {
  CartOverlay,
  CartContainer,
  CartHeader,
  CartItems,
  CartItem,
  CartItemWrapper,
  CartFooter,
  CartBadge,
  CartButton,
} from "./Cart.styled";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCartItems,
  selectCartIsOpen,
  selectCartItemCount,
  selectCartTotal,
  removeFromCart,
  updateQuantity,
  closeCart,
  clearCart,
} from "../../store/cart";
import { FaShoppingCart, FaTrash, FaMinus, FaPlus, FaShoppingBag } from "react-icons/fa";

const Cart = ({ showButton = true }) => {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const isOpen = useSelector(selectCartIsOpen);
  const itemCount = useSelector(selectCartItemCount);
  const total = useSelector(selectCartTotal);

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleQuantityChange = (productId, delta) => {
    const item = items.find((i) => i.productId === productId);
    if (item) {
      dispatch(updateQuantity({ productId, quantity: item.quantity + delta }));
    }
  };

  const handleCheckout = () => {
    alert("Checkout functionality coming soon!");
    dispatch(clearCart());
  };

  if (!isOpen) {
    if (!showButton) return null;
    return (
      <CartButton onClick={() => dispatch({ type: "cart/openCart" })} title="Shopping Cart">
        <FaShoppingCart />
        {itemCount > 0 && <CartBadge>{itemCount}</CartBadge>}
      </CartButton>
    );
  }

  return (
    <>
      <CartOverlay onClick={() => dispatch(closeCart())} />
      <CartContainer>
        <CartHeader>
          <h2>
            <FaShoppingBag />
            Shopping Cart
          </h2>
          <button className="close-btn" onClick={() => dispatch(closeCart())}>
            &times;
          </button>
        </CartHeader>

        <CartItems>
          {items.length === 0 ? (
            <div className="empty-cart">
              <FaShoppingCart />
              <p>Your cart is empty</p>
              <p>Add some products to get started!</p>
            </div>
          ) : (
            items.map((item) => (
              <CartItemWrapper key={item.productId}>
                <CartItem>
                  <div className="item-image">
                    <img
                      src={item.image || "./images/products/placeholder.jpg"}
                      alt={item.title}
                    />
                  </div>
                  <div className="item-details">
                    <h4>{item.title}</h4>
                    <div className="price">${(item.price * item.quantity).toFixed(2)}</div>
                    <div className="quantity-controls">
                      <button
                        onClick={() => handleQuantityChange(item.productId, -1)}
                        disabled={item.quantity <= 1}
                      >
                        <FaMinus />
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => handleQuantityChange(item.productId, 1)}>
                        <FaPlus />
                      </button>
                    </div>
                  </div>
                </CartItem>
                <button className="remove-btn" onClick={() => handleRemove(item.productId)}>
                  <FaTrash />
                </button>
              </CartItemWrapper>
            ))
          )}
        </CartItems>

        {items.length > 0 && (
          <CartFooter>
            <div className="cart-total">
              <span className="total-label">Total</span>
              <span className="total-amount">${total.toFixed(2)}</span>
            </div>
            <button className="checkout-btn" onClick={handleCheckout}>
              <FaShoppingBag />
              Checkout
            </button>
            <button className="clear-cart-btn" onClick={() => dispatch(clearCart())}>
              Clear Cart
            </button>
          </CartFooter>
        )}
      </CartContainer>
    </>
  );
};

export default Cart;