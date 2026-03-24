import { createSlice, createSelector } from "@reduxjs/toolkit";
import { produce } from "immer";

export const product = createSlice({
  name: "product",
  initialState: {
    products: [
      {
        id: "prod-1",
        title: "Wireless Gaming Headset",
        description: "High-quality wireless gaming headset with noise cancellation",
        price: 129.99,
        stock: 45,
        images: ["./images/products/headset.jpg"],
        category: "Electronics",
        featured: true,
        discount: 10,
        sold: 123,
      },
      {
        id: "prod-2",
        title: "Mechanical Keyboard RGB",
        description: "RGB backlit mechanical keyboard with Cherry MX switches",
        price: 89.99,
        stock: 23,
        images: ["./images/products/keyboard.jpg"],
        category: "Electronics",
        featured: true,
        discount: 0,
        sold: 89,
      },
      {
        id: "prod-3",
        title: "Gaming Mouse Pro",
        description: "Professional gaming mouse with 16000 DPI sensor",
        price: 59.99,
        stock: 8,
        images: ["./images/products/mouse.jpg"],
        category: "Electronics",
        featured: false,
        discount: 15,
        sold: 256,
      },
      {
        id: "prod-4",
        title: "Webcam 4K Ultra HD",
        description: "4K Ultra HD webcam for streaming and video calls",
        price: 149.99,
        stock: 67,
        images: ["./images/products/webcam.jpg"],
        category: "Electronics",
        featured: true,
        discount: 0,
        sold: 45,
      },
      {
        id: "prod-5",
        title: "Streaming Lighting Kit",
        description: "Professional ring light with tripod stand for streaming",
        price: 79.99,
        stock: 5,
        images: ["./images/products/lighting.jpg"],
        category: "Accessories",
        featured: false,
        discount: 20,
        sold: 78,
      },
      {
        id: "prod-6",
        title: "Gaming Chair Ergonomic",
        description: "Ergonomic gaming chair with lumbar support",
        price: 249.99,
        stock: 12,
        images: ["./images/products/chair.jpg"],
        category: "Furniture",
        featured: true,
        discount: 0,
        sold: 34,
      },
    ],
    filters: {
      category: null,
      priceRange: { min: 0, max: Infinity },
      featured: false,
      lowStock: false,
    },
  },
  reducers: {
    addProduct: (state, action) => {
      return produce(state, (draft) => {
        draft.products.push({
          ...action.payload,
          id: `prod-${Date.now()}`,
          sold: 0,
        });
      });
    },
    updateProduct: (state, action) => {
      return produce(state, (draft) => {
        const index = draft.products.findIndex(
          (p) => p.id === action.payload.id
        );
        if (index !== -1) {
          draft.products[index] = { ...draft.products[index], ...action.payload };
        }
      });
    },
    deleteProduct: (state, action) => {
      return produce(state, (draft) => {
        draft.products = draft.products.filter(
          (p) => p.id !== action.payload
        );
      });
    },
    updateStock: (state, action) => {
      return produce(state, (draft) => {
        const { productId, quantity } = action.payload;
        const product = draft.products.find((p) => p.id === productId);
        if (product) {
          product.stock = Math.max(0, product.stock + quantity);
        }
      });
    },
    recordSale: (state, action) => {
      return produce(state, (draft) => {
        const { productId, quantity } = action.payload;
        const product = draft.products.find((p) => p.id === productId);
        if (product && product.stock >= quantity) {
          product.stock -= quantity;
          product.sold += quantity;
        }
      });
    },
    setCategoryFilter: (state, action) => {
      return produce(state, (draft) => {
        draft.filters.category = action.payload;
      });
    },
    setPriceRangeFilter: (state, action) => {
      return produce(state, (draft) => {
        draft.filters.priceRange = action.payload;
      });
    },
    setFeaturedFilter: (state, action) => {
      return produce(state, (draft) => {
        draft.filters.featured = action.payload;
      });
    },
    setLowStockFilter: (state, action) => {
      return produce(state, (draft) => {
        draft.filters.lowStock = action.payload;
      });
    },
    clearFilters: (state) => {
      return produce(state, (draft) => {
        draft.filters = {
          category: null,
          priceRange: { min: 0, max: Infinity },
          featured: false,
          lowStock: false,
        };
      });
    },
  },
});

export const {
  addProduct,
  updateProduct,
  deleteProduct,
  updateStock,
  recordSale,
  setCategoryFilter,
  setPriceRangeFilter,
  setFeaturedFilter,
  setLowStockFilter,
  clearFilters,
} = product.actions;

export const selectAllProducts = (state) => state.product.products;

export const selectProductById = createSelector(
  [selectAllProducts, (state, productId) => productId],
  (products, productId) => products.find((p) => p.id === productId)
);

export const selectFilteredProducts = createSelector(
  [selectAllProducts, (state) => state.product.filters],
  (products, filters) => {
    return products.filter((product) => {
      if (filters.category && product.category !== filters.category) {
        return false;
      }
      if (
        product.price < filters.priceRange.min ||
        product.price > filters.priceRange.max
      ) {
        return false;
      }
      if (filters.featured && !product.featured) {
        return false;
      }
      if (filters.lowStock && product.stock > 10) {
        return false;
      }
      return true;
    });
  }
);

export const selectFeaturedProducts = createSelector(
  [selectAllProducts],
  (products) => products.filter((p) => p.featured)
);

export const selectLowStockProducts = createSelector(
  [selectAllProducts],
  (products) => products.filter((p) => p.stock <= 10)
);

export const selectCategories = createSelector(
  [selectAllProducts],
  (products) => [...new Set(products.map((p) => p.category))]
);

export const selectTotalInventoryValue = createSelector(
  [selectAllProducts],
  (products) =>
    products.reduce((total, p) => total + p.price * p.stock, 0)
);

export const selectTotalSales = createSelector(
  [selectAllProducts],
  (products) => products.reduce((total, p) => total + p.sold, 0)
);

export const selectPinnedProductId = (state) => state.streaming.pinnedProductId;

export const pinProduct = (productId) => (dispatch) => {
  dispatch({ type: "streaming/pinProduct", payload: productId });
};

export const unpinProduct = () => (dispatch) => {
  dispatch({ type: "streaming/unpinProduct" });
};

export default product.reducer;
