import { createSlice, createSelector } from "@reduxjs/toolkit";
import { produce } from "immer";

export const streaming = createSlice({
  name: "streaming",
  initialState: {
    activeRoom: null,
    isConnecting: false,
    isConnected: false,
    connectionError: null,
    participants: [],
    localParticipant: null,
    pinnedProductId: null,
    isStreaming: false,
    roomToken: null,
    roomName: null,
    serverUrl: null,
    streamSettings: {
      videoEnabled: true,
      audioEnabled: true,
      screenShareEnabled: false,
    },
    chatMessages: [],
    activeStreams: [
      {
        id: "stream-1",
        roomName: "tech-deals-live",
        title: "Tech Deals Live - Gaming Gear Sale!",
        streamerName: "TechStreamer",
        streamerAvatar: "https://i.pravatar.cc/150?u=tech",
        thumbnail: "./images/streams/tech-stream.jpg",
        viewerCount: 1245,
        category: "Electronics",
        isLive: true,
        startedAt: Date.now() - 3600000,
        pinnedProductId: "prod-1",
      },
      {
        id: "stream-2",
        roomName: "fashion-haul-2024",
        title: "Summer Fashion Haul - 50% Off!",
        streamerName: "Fashionista",
        streamerAvatar: "https://i.pravatar.cc/150?u=fashion",
        thumbnail: "./images/streams/fashion-stream.jpg",
        viewerCount: 892,
        category: "Fashion",
        isLive: true,
        startedAt: Date.now() - 7200000,
        pinnedProductId: null,
      },
      {
        id: "stream-3",
        roomName: "home-decor-daily",
        title: "Home Decor Essentials - Live",
        streamerName: "HomeStylist",
        streamerAvatar: "https://i.pravatar.cc/150?u=home",
        thumbnail: "./images/streams/home-stream.jpg",
        viewerCount: 456,
        category: "Home",
        isLive: true,
        startedAt: Date.now() - 1800000,
        pinnedProductId: "prod-5",
      },
    ],
  },
  reducers: {
    setRoomConnectionStatus: (state, action) => {
      return produce(state, (draft) => {
        const { isConnecting, isConnected, error } = action.payload;
        draft.isConnecting = isConnecting ?? draft.isConnecting;
        draft.isConnected = isConnected ?? draft.isConnected;
        draft.connectionError = error ?? null;
      });
    },
    setActiveRoom: (state, action) => {
      return produce(state, (draft) => {
        draft.activeRoom = action.payload;
      });
    },
    setRoomObject: (state, action) => {
      return produce(state, (draft) => {
        draft.roomObject = action.payload;
      });
    },
    setRoomCredentials: (state, action) => {
      return produce(state, (draft) => {
        const { token, roomName, serverUrl } = action.payload;
        draft.roomToken = token;
        draft.roomName = roomName;
        draft.serverUrl = serverUrl;
      });
    },
    updateParticipants: (state, action) => {
      return produce(state, (draft) => {
        draft.participants = action.payload;
      });
    },
    addParticipant: (state, action) => {
      return produce(state, (draft) => {
        const exists = draft.participants.find(
          (p) => p.sid === action.payload.sid
        );
        if (!exists) {
          draft.participants.push(action.payload);
        }
      });
    },
    removeParticipant: (state, action) => {
      return produce(state, (draft) => {
        draft.participants = draft.participants.filter(
          (p) => p.sid !== action.payload
        );
      });
    },
    setLocalParticipant: (state, action) => {
      return produce(state, (draft) => {
        draft.localParticipant = action.payload;
      });
    },
    pinProduct: (state, action) => {
      return produce(state, (draft) => {
        draft.pinnedProductId = action.payload;
      });
    },
    unpinProduct: (state) => {
      return produce(state, (draft) => {
        draft.pinnedProductId = null;
      });
    },
    setStreamingStatus: (state, action) => {
      return produce(state, (draft) => {
        draft.isStreaming = action.payload;
      });
    },
    updateStreamSettings: (state, action) => {
      return produce(state, (draft) => {
        draft.streamSettings = { ...draft.streamSettings, ...action.payload };
      });
    },
    addChatMessage: (state, action) => {
      return produce(state, (draft) => {
        draft.chatMessages.push({
          ...action.payload,
          timestamp: Date.now(),
          id: `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        });
        if (draft.chatMessages.length > 100) {
          draft.chatMessages.shift();
        }
      });
    },
    clearChat: (state) => {
      return produce(state, (draft) => {
        draft.chatMessages = [];
      });
    },
    addActiveStream: (state, action) => {
      return produce(state, (draft) => {
        draft.activeStreams.push(action.payload);
      });
    },
    updateActiveStream: (state, action) => {
      return produce(state, (draft) => {
        const index = draft.activeStreams.findIndex(
          (s) => s.id === action.payload.id
        );
        if (index !== -1) {
          draft.activeStreams[index] = {
            ...draft.activeStreams[index],
            ...action.payload,
          };
        }
      });
    },
    removeActiveStream: (state, action) => {
      return produce(state, (draft) => {
        draft.activeStreams = draft.activeStreams.filter(
          (s) => s.id !== action.payload
        );
      });
    },
    updateViewerCount: (state, action) => {
      return produce(state, (draft) => {
        const { streamId, count } = action.payload;
        const stream = draft.activeStreams.find((s) => s.id === streamId);
        if (stream) {
          stream.viewerCount = count;
        }
      });
    },
    resetStreamingState: (state) => {
      return produce(state, (draft) => {
        draft.activeRoom = null;
        draft.roomObject = null;
        draft.isConnecting = false;
        draft.isConnected = false;
        draft.connectionError = null;
        draft.participants = [];
        draft.localParticipant = null;
        draft.isStreaming = false;
        draft.roomToken = null;
        draft.roomName = null;
        draft.pinnedProductId = null;
        draft.streamSettings = {
          videoEnabled: true,
          audioEnabled: true,
          screenShareEnabled: false,
        };
      });
    },
  },
});

export const {
  setRoomConnectionStatus,
  setActiveRoom,
  setRoomObject,
  setRoomCredentials,
  updateParticipants,
  addParticipant,
  removeParticipant,
  setLocalParticipant,
  pinProduct,
  unpinProduct,
  setStreamingStatus,
  updateStreamSettings,
  addChatMessage,
  clearChat,
  addActiveStream,
  updateActiveStream,
  removeActiveStream,
  updateViewerCount,
  resetStreamingState,
} = streaming.actions;

export const selectStreamingState = (state) => state.streaming;

export const selectRoomObject = createSelector(
  [selectStreamingState],
  (streaming) => streaming.roomObject
);

export const selectActiveRoom = createSelector(
  [selectStreamingState],
  (streaming) => streaming.activeRoom
);

export const selectIsConnected = createSelector(
  [selectStreamingState],
  (streaming) => streaming.isConnected
);

export const selectIsConnecting = createSelector(
  [selectStreamingState],
  (streaming) => streaming.isConnecting
);

export const selectConnectionError = createSelector(
  [selectStreamingState],
  (streaming) => streaming.connectionError
);

export const selectParticipants = createSelector(
  [selectStreamingState],
  (streaming) => streaming.participants
);

export const selectParticipantCount = createSelector(
  [selectParticipants],
  (participants) => participants.length
);

export const selectLocalParticipant = createSelector(
  [selectStreamingState],
  (streaming) => streaming.localParticipant
);

export const selectPinnedProductId = createSelector(
  [selectStreamingState],
  (streaming) => streaming.pinnedProductId
);

export const selectIsStreaming = createSelector(
  [selectStreamingState],
  (streaming) => streaming.isStreaming
);

export const selectAllProducts = (state) => state.product.products;

export const selectPinnedProduct = createSelector(
  [selectAllProducts, selectPinnedProductId],
  (products, pinnedId) => products.find((p) => p.id === pinnedId)
);

export const selectRoomCredentials = createSelector(
  [selectStreamingState],
  (streaming) => ({
    token: streaming.roomToken,
    roomName: streaming.roomName,
    serverUrl: streaming.serverUrl,
  })
);

export const selectStreamSettings = createSelector(
  [selectStreamingState],
  (streaming) => streaming.streamSettings
);

export const selectChatMessages = createSelector(
  [selectStreamingState],
  (streaming) => streaming.chatMessages
);

export const selectActiveStreams = createSelector(
  [selectStreamingState],
  (streaming) => streaming.activeStreams
);

export const selectLiveStreams = createSelector(
  [selectActiveStreams],
  (streams) => streams.filter((s) => s.isLive)
);

export const selectStreamById = createSelector(
  [selectActiveStreams, (state, streamId) => streamId],
  (streams, streamId) => streams.find((s) => s.id === streamId)
);

export const selectStreamsByCategory = createSelector(
  [selectActiveStreams, (state, category) => category],
  (streams, category) => streams.filter((s) => s.category === category)
);

export default streaming.reducer;
