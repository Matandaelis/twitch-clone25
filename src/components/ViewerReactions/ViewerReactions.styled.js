import styled, { keyframes } from "styled-components";

const floatUp = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0) translateX(0) scale(1);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(-150px) translateX(var(--drift)) scale(0.8);
  }
`;

const popIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const ReactionsContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  pointer-events: none;
  z-index: 50;
  height: 200px;
  overflow: hidden;
`;

export const FloatingReaction = styled.div`
  position: absolute;
  bottom: 0;
  left: ${(props) => props.$x}%;
  font-size: ${(props) => props.$size || 32}px;
  animation: ${floatUp} 3s ease-out forwards;
  animation-delay: ${(props) => props.$delay || 0}ms;
  --drift: ${(props) => (Math.random() - 0.5) * 40}px;
  pointer-events: none;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
`;

export const ReactionButton = styled.button`
  background: rgba(0, 0, 0, 0.6);
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 24px;
  transition: all 0.2s;
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.2);

  &:hover {
    background: rgba(0, 0, 0, 0.8);
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const ReactionPickerContainer = styled.div`
  position: absolute;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.9);
  border-radius: 24px;
  padding: 12px 16px;
  display: flex;
  gap: 8px;
  animation: ${fadeIn} 0.2s ease;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  z-index: 60;

  &::after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid rgba(0, 0, 0, 0.9);
  }
`;

export const ReactionOption = styled.button`
  background: transparent;
  border: none;
  font-size: 28px;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.2s;
  animation: ${popIn} 0.3s ease backwards;
  animation-delay: ${(props) => props.$index * 30}ms;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.2);
  }

  &:active {
    transform: scale(0.9);
  }
`;

export const ReactionTrigger = styled.div`
  position: absolute;
  bottom: 16px;
  right: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  z-index: 40;
`;

export const MainReactionButton = styled(ReactionButton)`
  width: 56px;
  height: 56px;
  font-size: 28px;
  background: ${(props) => props.theme.color};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  animation: ${bounce} 2s infinite;

  &:hover {
    background: ${(props) => props.theme.color};
  }
`;

export const ReactionsOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
`;

export const ReactionCount = styled.span`
  position: absolute;
  top: -4px;
  right: -4px;
  background: #ff4444;
  color: white;
  font-size: 10px;
  font-weight: bold;
  min-width: 18px;
  height: 18px;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
`;