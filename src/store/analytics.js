import { createSlice, createSelector } from "@reduxjs/toolkit";
import { produce } from "immer";

const INITIAL_STATS = {
  totalViewers: 0,
  peakViewers: 0,
  averageViewers: 0,
  totalRevenue: 0,
  totalSales: 0,
  totalOrders: 0,
  viewerEngagement: 0,
  productImpressions: 0,
  cartConversions: 0,
  reactionsCount: 0,
};

export const analytics = createSlice({
  name: "analytics",
  initialState: {
    isVisible: false,
    streamId: null,
    startTime: null,
    stats: { ...INITIAL_STATS },
    stockAlerts: [],
    recentSales: [],
    viewerHistory: [],
    lowStockThreshold: 10,
  },
  reducers: {
    toggleAnalytics: (state) => {
      return produce(state, (draft) => {
        draft.isVisible = !draft.isVisible;
      });
    },
    showAnalytics: (state) => {
      return produce(state, (draft) => {
        draft.isVisible = true;
      });
    },
    hideAnalytics: (state) => {
      return produce(state, (draft) => {
        draft.isVisible = false;
      });
    },
    startAnalytics: (state, action) => {
      return produce(state, (draft) => {
        draft.streamId = action.payload;
        draft.startTime = Date.now();
        draft.stats = { ...INITIAL_STATS };
        draft.viewerHistory = [];
      });
    },
    updateViewerCount: (state, action) => {
      return produce(state, (draft) => {
        const { count } = action.payload;
        draft.stats.totalViewers = count;
        
        if (count > draft.stats.peakViewers) {
          draft.stats.peakViewers = count;
        }

        draft.viewerHistory.push({
          timestamp: Date.now(),
          count,
        });

        if (draft.viewerHistory.length > 100) {
          draft.viewerHistory = draft.viewerHistory.slice(-100);
        }

        const recentHistory = draft.viewerHistory.slice(-10);
        if (recentHistory.length > 0) {
          const sum = recentHistory.reduce((acc, v) => acc + v.count, 0);
          draft.stats.averageViewers = Math.round(sum / recentHistory.length);
        }
      });
    },
    recordSale: (state, action) => {
      return produce(state, (draft) => {
        const { productId, productTitle, quantity, price, buyerId } = action.payload;
        const total = price * quantity;

        draft.stats.totalSales += quantity;
        draft.stats.totalOrders += 1;
        draft.stats.totalRevenue += total;

        if (draft.stats.cartConversions > 0) {
          draft.stats.cartConversions = (draft.stats.totalSales / draft.stats.cartConversions) * 100;
        }

        draft.recentSales.unshift({
          id: `sale-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          productId,
          productTitle,
          quantity,
          price,
          total,
          buyerId,
          timestamp: Date.now(),
        });

        if (draft.recentSales.length > 50) {
          draft.recentSales = draft.recentSales.slice(0, 50);
        }
      });
    },
    incrementProductImpressions: (state, action) => {
      return produce(state, (draft) => {
        draft.stats.productImpressions += action.payload || 1;
      });
    },
    incrementCartConversions: (state) => {
      return produce(state, (draft) => {
        draft.stats.cartConversions += 1;
      });
    },
    incrementReactions: (state, action) => {
      return produce(state, (draft) => {
        draft.stats.reactionsCount += action.payload || 1;
      });
    },
    addStockAlert: (state, action) => {
      return produce(state, (draft) => {
        const { productId, productTitle, stock } = action.payload;
        const existing = draft.stockAlerts.find(
          (a) => a.productId === productId && !a.resolved
        );

        if (!existing) {
          draft.stockAlerts.unshift({
            id: `alert-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            productId,
            productTitle,
            stock,
            timestamp: Date.now(),
            resolved: false,
          });
        }
      });
    },
    resolveStockAlert: (state, action) => {
      return produce(state, (draft) => {
        const alert = draft.stockAlerts.find((a) => a.id === action.payload);
        if (alert) {
          alert.resolved = true;
          alert.resolvedAt = Date.now();
        }
      });
    },
    updateStockAlert: (state, action) => {
      return produce(state, (draft) => {
        const { productId, stock } = action.payload;
        const alert = draft.stockAlerts.find(
          (a) => a.productId === productId && !a.resolved
        );
        if (alert) {
          alert.stock = stock;
        }
      });
    },
    setLowStockThreshold: (state, action) => {
      return produce(state, (draft) => {
        draft.lowStockThreshold = action.payload;
      });
    },
    calculateEngagement: (state) => {
      return produce(state, (draft) => {
        const { totalViewers, reactionsCount, totalOrders } = draft.stats;
        if (totalViewers > 0) {
          const reactionScore = (reactionsCount / totalViewers) * 100;
          const orderScore = (totalOrders / totalViewers) * 1000;
          draft.stats.viewerEngagement = Math.min(
            100,
            Math.round(reactionScore + orderScore + 20)
          );
        }
      });
    },
    resetAnalytics: (state) => {
      return produce(state, (draft) => {
        draft.streamId = null;
        draft.startTime = null;
        draft.stats = { ...INITIAL_STATS };
        draft.stockAlerts = [];
        draft.recentSales = [];
        draft.viewerHistory = [];
      });
    },
  },
});

export const {
  toggleAnalytics,
  showAnalytics,
  hideAnalytics,
  startAnalytics,
  updateViewerCount,
  recordSale,
  incrementProductImpressions,
  incrementCartConversions,
  incrementReactions,
  addStockAlert,
  resolveStockAlert,
  updateStockAlert,
  setLowStockThreshold,
  calculateEngagement,
  resetAnalytics,
} = analytics.actions;

export const selectAnalyticsVisible = (state) => state.analytics.isVisible;
export const selectAnalyticsStats = (state) => state.analytics.stats;
export const selectStockAlerts = (state) => state.analytics.stockAlerts;
export const selectRecentSales = (state) => state.analytics.recentSales;
export const selectViewerHistory = (state) => state.analytics.viewerHistory;
export const selectLowStockThreshold = (state) => state.analytics.lowStockThreshold;
export const selectAnalyticsStartTime = (state) => state.analytics.startTime;

export const selectUnresolvedAlerts = createSelector(
  [selectStockAlerts],
  (alerts) => alerts.filter((a) => !a.resolved)
);

export const selectActiveAlertsCount = createSelector(
  [selectUnresolvedAlerts],
  (alerts) => alerts.length
);

export default analytics.reducer;