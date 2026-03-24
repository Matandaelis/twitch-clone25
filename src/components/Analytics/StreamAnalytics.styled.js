import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const AnalyticsOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.2s ease;
`;

export const AnalyticsContainer = styled.div`
  width: 90%;
  max-width: 900px;
  max-height: 90vh;
  background: ${(props) => props.theme.bgPrimary};
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  animation: ${slideIn} 0.3s ease;
`;

export const AnalyticsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid ${(props) => props.theme.border};

  h2 {
    font-size: 20px;
    font-weight: 600;
    color: ${(props) => props.theme.color};
    margin: 0;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .close-btn {
    background: none;
    border: none;
    font-size: 28px;
    color: ${(props) => props.theme.soft};
    cursor: pointer;
    padding: 4px;
    transition: color 0.2s;

    &:hover {
      color: ${(props) => props.theme.color};
    }
  }
`;

export const AnalyticsContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 24px;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 16px;
  margin-bottom: 24px;
`;

export const StatCard = styled.div`
  background: ${(props) => props.theme.bgSecondary};
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  border: 1px solid ${(props) => props.theme.border};

  .stat-value {
    font-size: 28px;
    font-weight: 700;
    color: ${(props) => props.theme.color};
    margin-bottom: 4px;
  }

  .stat-label {
    font-size: 13px;
    color: ${(props) => props.theme.soft};
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  &.highlight {
    border-color: ${(props) => props.theme.color};
    background: linear-gradient(
      135deg,
      ${(props) => props.theme.bgSecondary} 0%,
      ${(props) => props.theme.color}10 100%
    );

    .stat-value {
      color: ${(props) => props.theme.color};
    }
  }

  &.success .stat-value {
    color: #4caf50;
  }

  &.warning .stat-value {
    color: #ff9800;
  }

  &.danger .stat-value {
    color: #f44336;
  }
`;

export const ChartContainer = styled.div`
  background: ${(props) => props.theme.bgSecondary};
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 24px;
  border: 1px solid ${(props) => props.theme.border};

  h3 {
    font-size: 16px;
    font-weight: 600;
    color: ${(props) => props.theme.color};
    margin: 0 0 16px 0;
  }

  .chart-placeholder {
    height: 120px;
    display: flex;
    align-items: flex-end;
    gap: 4px;
    padding: 10px 0;
  }

  .chart-bar {
    flex: 1;
    background: ${(props) => props.theme.color};
    border-radius: 4px 4px 0 0;
    min-height: 4px;
    opacity: 0.7;
    transition: opacity 0.2s;

    &:hover {
      opacity: 1;
    }
  }
`;

export const AlertsContainer = styled.div`
  h3 {
    font-size: 16px;
    font-weight: 600;
    color: ${(props) => props.theme.color};
    margin: 0 0 16px 0;
  }
`;

export const AlertItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: ${(props) => (props.$warning ? "#fff3e0" : props.$danger ? "#ffebee" : props.theme.bgSecondary)};
  border-radius: 8px;
  margin-bottom: 8px;
  border-left: 4px solid ${(props) => (props.$warning ? "#ff9800" : props.$danger ? "#f44336" : props.theme.color)};

  .alert-icon {
    font-size: 20px;
    color: ${(props) => (props.$warning ? "#ff9800" : props.$danger ? "#f44336" : props.theme.color)};
  }

  .alert-content {
    flex: 1;

    .alert-title {
      font-size: 14px;
      font-weight: 500;
      color: ${(props) => props.theme.color};
    }

    .alert-meta {
      font-size: 12px;
      color: ${(props) => props.theme.soft};
    }
  }

  .resolve-btn {
    padding: 6px 12px;
    background: transparent;
    border: 1px solid ${(props) => props.theme.border};
    border-radius: 4px;
    color: ${(props) => props.theme.soft};
    cursor: pointer;
    font-size: 12px;
    transition: all 0.2s;

    &:hover {
      background: ${(props) => props.theme.color};
      color: white;
      border-color: ${(props) => props.theme.color};
    }
  }
`;

export const SalesList = styled.div`
  h3 {
    font-size: 16px;
    font-weight: 600;
    color: ${(props) => props.theme.color};
    margin: 0 0 16px 0;
  }

  .sale-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px;
    border-bottom: 1px solid ${(props) => props.theme.border};

    &:last-child {
      border-bottom: none;
    }

    .sale-info {
      flex: 1;

      .sale-title {
        font-size: 14px;
        color: ${(props) => props.theme.color};
      }

      .sale-details {
        font-size: 12px;
        color: ${(props) => props.theme.soft};
      }
    }

    .sale-amount {
      font-size: 16px;
      font-weight: 600;
      color: #4caf50;
    }
  }
`;