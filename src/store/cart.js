import { createSlice, createSelector } from "@reduxjs/toolkit";
import { produce } from "immer";

const CART_STORAGE_KEY = "shopping_cart";

const loadCartFromStorage = () => {
  try {
    const saved = localStorage.getItem(CART_STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) {
        return parsed;
      }
    }
  } catch (e) {
    console.error("Failed to load cart from storage:", e);
  }
  return [];
};

const saveCartToStorage = (items) => {
  try {
    const itemsArray = Array.isArray(items) ? items : [];
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(itemsArray));
  } catch (e) {
    console.error("Failed to save cart to storage:", e);
  }
};

export const cart = createSlice({
  name: "cart",
  initialState: {
    items: loadCartFromStorage(),
    isOpen: false,
    hydrated: true,
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
        const itemsCopy = draft.items.map(item => ({ ...item }));
        saveCartToStorage(itemsCopy);
      });
    },
    removeFromCart: (state, action) => {
      return produce(state, (draft) => {
        draft.items = draft.items.filter(
          (item) => item.productId !== action.payload
        );
        const itemsCopy = draft.items.map(item => ({ ...item }));
        saveCartToStorage(itemsCopy);
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
        const itemsCopy = draft.items.map(item => ({ ...item }));
        saveCartToStorage(itemsCopy);
      });
    },
    clearCart: (state) => {
      return produce(state, (draft) => {
        draft.items = [];
        saveCartToStorage([]);
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
    rehydrateCart: (state, action) => {
      return produce(state, (draft) => {
        if (action.payload && Array.isArray(action.payload)) {
          draft.items = action.payload;
        }
        draft.hydrated = true;
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
  rehydrateCart,
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
