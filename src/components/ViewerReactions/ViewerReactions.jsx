import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectReactionTypes,
  selectViewerReactions,
  selectReactionPickerVisible,
  selectIsCooldownActive,
  addViewerReaction,
  hideReactionPicker,
  removeViewerReaction,
} from "../../store/reactions";
import {
  ReactionsContainer,
  FloatingReaction,
  ReactionPickerContainer,
  ReactionOption,
  ReactionTrigger,
  MainReactionButton,
  ReactionsOverlay,
} from "./ViewerReactions.styled";
import { FaHeart } from "react-icons/fa";

const ViewerReactions = () => {
  const dispatch = useDispatch();
  const reactionTypes = useSelector(selectReactionTypes);
  const viewerReactions = useSelector(selectViewerReactions);
  const isPickerVisible = useSelector(selectReactionPickerVisible);
  const isCooldownActive = useSelector(selectIsCooldownActive);

  const handleReactionClick = useCallback(
    (emoji) => {
      if (!isCooldownActive) {
        dispatch(addViewerReaction(emoji));
        dispatch(hideReactionPicker());
      }
    },
    [dispatch, isCooldownActive]
  );

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "1" || e.key === "2" || e.key === "3") {
        const index = parseInt(e.key) - 1;
        if (reactionTypes[index]) {
          handleReactionClick(reactionTypes[index]);
        }
      }
      if (e.key === "Escape") {
        dispatch(hideReactionPicker());
      }
    },
    [reactionTypes, handleReactionClick, dispatch]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      viewerReactions.forEach((reaction) => {
        if (now - reaction.timestamp > 3000) {
          dispatch(removeViewerReaction(reaction.id));
        }
      });
    }, 500);

    return () => clearInterval(interval);
  }, [viewerReactions, dispatch]);

  return (
    <>
      <ReactionsOverlay>
        <ReactionsContainer>
          {viewerReactions.map((reaction, index) => (
            <FloatingReaction
              key={reaction.id}
              $x={reaction.x}
              $delay={index * 50}
              $size={28 + Math.random() * 8}
            >
              {reaction.emoji}
            </FloatingReaction>
          ))}
        </ReactionsContainer>
      </ReactionsOverlay>

      <ReactionTrigger>
        {isPickerVisible && (
          <ReactionPickerContainer>
            {reactionTypes.map((emoji, index) => (
              <ReactionOption
                key={emoji}
                $index={index}
                onClick={() => handleReactionClick(emoji)}
              >
                {emoji}
              </ReactionOption>
            ))}
          </ReactionPickerContainer>
        )}
        <MainReactionButton
          onClick={() =>
            isPickerVisible
              ? dispatch(hideReactionPicker())
              : dispatch({ type: "reactions/toggleReactionPicker" })
          }
        >
          <FaHeart />
        </MainReactionButton>
      </ReactionTrigger>
    </>
  );
};

export default ViewerReactions;