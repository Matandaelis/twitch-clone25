import { createSlice, createSelector } from "@reduxjs/toolkit";
import { produce } from "immer";

const CART_STORAGE_KEY = "shopping_cart";

const loadCartFromStorage = () => {
  try {
    const saved = localStorage.getItem(CART_STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.error("Failed to load cart from storage:", e);
  }
  return [];
};

const saveCartToStorage = (items) => {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  } catch (e) {
    console.error("Failed to save cart to storage:", e);
  }
};

export const cart = createSlice({
  name: "cart",
  initialState: {
    items: loadCartFromStorage(),
    isOpen: false,
  },
  reducers: {
    addToCart: (state, action) => {
      return produce(state, (draft) => {
        const { productId, title, price, image, quantity = 1 } = action.payload;
        const existingItem = draft.items.find((item) => item.productId === productId);

        if (existingItem) {
          existingItem.quantity += quantity;
        } else {
          draft.items.push({
            productId,
            title,
            price,
            image,
            quantity,
            addedAt: Date.now(),
          });
        }
        saveCartToStorage(draft.items);
      });
    },
    removeFromCart: (state, action) => {
      return produce(state, (draft) => {
        draft.items = draft.items.filter(
          (item) => item.productId !== action.payload
        );
        saveCartToStorage(draft.items);
      });
    },
    updateQuantity: (state, action) => {
      return produce(state, (draft) => {
        const { productId, quantity } = action.payload;
        const item = draft.items.find((item) => item.productId === productId);
        if (item) {
          if (quantity <= 0) {
            draft.items = draft.items.filter(
              (item) => item.productId !== productId
            );
          } else {
            item.quantity = quantity;
          }
        }
        saveCartToStorage(draft.items);
      });
    },
    clearCart: (state) => {
      return produce(state, (draft) => {
        draft.items = [];
        saveCartToStorage(draft.items);
      });
    },
    toggleCart: (state) => {
      return produce(state, (draft) => {
        draft.isOpen = !draft.isOpen;
      });
    },
    openCart: (state) => {
      return produce(state, (draft) => {
        draft.isOpen = true;
      });
    },
    closeCart: (state) => {
      return produce(state, (draft) => {
        draft.isOpen = false;
      });
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  toggleCart,
  openCart,
  closeCart,
} = cart.actions;

export const selectCartItems = (state) => state.cart.items;
export const selectCartIsOpen = (state) => state.cart.isOpen;

export const selectCartItemCount = createSelector([selectCartItems], (items) =>
  items.reduce((total, item) => total + item.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (items) =>
  items.reduce((total, item) => total + item.price * item.quantity, 0)
);

export const selectCartItemById = createSelector(
  [selectCartItems, (state, productId) => productId],
  (items, productId) => items.find((item) => item.productId === productId)
);

export default cart.reducer;
