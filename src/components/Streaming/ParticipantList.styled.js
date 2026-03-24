import styled from "styled-components";

export const StyledParticipantList = styled.div`
  background-color: ${(props) => props.theme.headerDesktop};
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.border};
  overflow: hidden;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    border-bottom: 1px solid ${(props) => props.theme.border};

    h3 {
      font-size: 16px;
      font-weight: 600;
      color: ${(props) => props.theme.textColor};
      margin: 0;
    }

    .count {
      background-color: ${(props) => props.theme.color};
      color: white;
      padding: 4px 10px;
      border-radius: 12px;
      font-size: 13px;
      font-weight: 600;
    }
  }

  .participant-list {
    max-height: 300px;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme.soft};
      border-radius: 3px;
    }

    .participant-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 16px;
      border-bottom: 1px solid ${(props) => props.theme.border};
      transition: background-color 0.2s;

      &:last-child {
        border-bottom: none;
      }

      &:hover {
        background-color: ${(props) => props.theme.hover};
      }

      .avatar {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background-color: ${(props) => props.theme.color};
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 16px;
      }

      .name {
        flex: 1;
        font-size: 14px;
        color: ${(props) => props.theme.textColor};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .status {
        .icon {
          font-size: 16px;

          &.active {
            color: #00b894;
          }

          &.muted {
            color: ${(props) => props.theme.soft};
          }
        }
      }
    }

    .empty-state {
      padding: 24px;
      text-align: center;
      color: ${(props) => props.theme.soft};

      p {
        font-size: 14px;
        margin: 0;
      }
    }
  }

  @media (max-width: 768px) {
    .header {
      padding: 12px;

      h3 {
        font-size: 14px;
      }
    }

    .participant-list {
      max-height: 200px;

      .participant-item {
        padding: 10px 12px;

        .avatar {
          width: 28px;
          height: 28px;
          font-size: 14px;
        }

        .name {
          font-size: 13px;
        }
      }
    }
  }
`;
