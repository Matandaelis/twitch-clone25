import { createSlice, createSelector } from "@reduxjs/toolkit";
import { produce } from "immer";

const REACTION_TYPES = ["❤️", "🔥", "😂", "👏", "🎉", "😍", "🤔", "👀"];
const MAX_VISIBLE_REACTIONS = 20;
const REACTION_DURATION = 3000;

export const reactions = createSlice({
  name: "reactions",
  initialState: {
    reactionTypes: REACTION_TYPES,
    activeReactions: [],
    viewerReactions: [],
    lastReactionTime: 0,
    cooldownActive: false,
    reactionPickerVisible: false,
  },
  reducers: {
    addReaction: (state, action) => {
      return produce(state, (draft) => {
        const { emoji, participantId, participantName } = action.payload;
        const now = Date.now();
        
        const reaction = {
          id: `reaction-${now}-${Math.random().toString(36).substr(2, 9)}`,
          emoji,
          participantId,
          participantName,
          timestamp: now,
          x: Math.random() * 80 + 10,
          duration: REACTION_DURATION,
        };

        draft.activeReactions.push(reaction);
        draft.lastReactionTime = now;

        if (draft.activeReactions.length > MAX_VISIBLE_REACTIONS) {
          draft.activeReactions = draft.activeReactions.slice(-MAX_VISIBLE_REACTIONS);
        }
      });
    },
    removeReaction: (state, action) => {
      return produce(state, (draft) => {
        draft.activeReactions = draft.activeReactions.filter(
          (r) => r.id !== action.payload
        );
      });
    },
    clearExpiredReactions: (state) => {
      return produce(state, (draft) => {
        const now = Date.now();
        draft.activeReactions = draft.activeReactions.filter(
          (r) => now - r.timestamp < r.duration
        );
      });
    },
    addViewerReaction: (state, action) => {
      return produce(state, (draft) => {
        const emoji = action.payload;
        const now = Date.now();
        
        if (draft.cooldownActive) {
          return;
        }

        const reaction = {
          id: `viewer-${now}-${Math.random().toString(36).substr(2, 9)}`,
          emoji,
          timestamp: now,
          x: Math.random() * 80 + 10,
          duration: REACTION_DURATION,
        };

        draft.viewerReactions.push(reaction);
        draft.cooldownActive = true;

        setTimeout(() => {
          draft.cooldownActive = false;
        }, 500);

        if (draft.viewerReactions.length > MAX_VISIBLE_REACTIONS) {
          draft.viewerReactions = draft.viewerReactions.slice(-MAX_VISIBLE_REACTIONS);
        }
      });
    },
    removeViewerReaction: (state, action) => {
      return produce(state, (draft) => {
        draft.viewerReactions = draft.viewerReactions.filter(
          (r) => r.id !== action.payload
        );
      });
    },
    clearViewerReactions: (state) => {
      return produce(state, (draft) => {
        draft.viewerReactions = [];
      });
    },
    toggleReactionPicker: (state) => {
      return produce(state, (draft) => {
        draft.reactionPickerVisible = !draft.reactionPickerVisible;
      });
    },
    showReactionPicker: (state) => {
      return produce(state, (draft) => {
        draft.reactionPickerVisible = true;
      });
    },
    hideReactionPicker: (state) => {
      return produce(state, (draft) => {
        draft.reactionPickerVisible = false;
      });
    },
  },
});

export const {
  addReaction,
  removeReaction,
  clearExpiredReactions,
  addViewerReaction,
  removeViewerReaction,
  clearViewerReactions,
  toggleReactionPicker,
  showReactionPicker,
  hideReactionPicker,
} = reactions.actions;

export const selectReactionTypes = (state) => state.reactions.reactionTypes;
export const selectActiveReactions = (state) => state.reactions.activeReactions;
export const selectViewerReactions = (state) => state.reactions.viewerReactions;
export const selectReactionPickerVisible = (state) => state.reactions.reactionPickerVisible;
export const selectIsCooldownActive = (state) => state.reactions.cooldownActive;

export const selectRecentReactions = createSelector(
  [selectActiveReactions, (state, limit = 10) => limit],
  (reactions, limit) => reactions.slice(-limit)
);

export default reactions.reducer;
