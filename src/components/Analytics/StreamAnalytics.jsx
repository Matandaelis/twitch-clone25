import {
  AnalyticsOverlay,
  AnalyticsContainer,
  AnalyticsHeader,
  AnalyticsContent,
  StatsGrid,
  StatCard,
  ChartContainer,
  AlertsContainer,
  AlertItem,
  SalesList,
} from "./StreamAnalytics.styled.js";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAnalyticsVisible,
  selectAnalyticsStats,
  selectStockAlerts,
  selectRecentSales,
  selectViewerHistory,
  selectUnresolvedAlerts,
  hideAnalytics,
  resolveStockAlert,
} from "../../store/analytics";
import { FaChartLine, FaTimes, FaExclamationTriangle, FaBox, FaDollarSign, FaUsers, FaShoppingCart, FaHeart } from "react-icons/fa";

const StreamAnalytics = () => {
  const dispatch = useDispatch();
  const isVisible = useSelector(selectAnalyticsVisible);
  const stats = useSelector(selectAnalyticsStats);
  const alerts = useSelector(selectUnresolvedAlerts);
  const recentSales = useSelector(selectRecentSales);
  const viewerHistory = useSelector(selectViewerHistory);

  if (!isVisible) return null;

  const handleClose = () => {
    dispatch(hideAnalytics());
  };

  const handleResolveAlert = (alertId) => {
    dispatch(resolveStockAlert(alertId));
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const maxViewers = Math.max(...viewerHistory.map((v) => v.count), 1);

  return (
    <AnalyticsOverlay onClick={handleClose}>
      <AnalyticsContainer onClick={(e) => e.stopPropagation()}>
        <AnalyticsHeader>
          <h2>
            <FaChartLine />
            Stream Analytics
          </h2>
          <button className="close-btn" onClick={handleClose}>
            <FaTimes />
          </button>
        </AnalyticsHeader>

        <AnalyticsContent>
          <StatsGrid>
            <StatCard className="highlight">
              <div className="stat-value">{stats.totalViewers.toLocaleString()}</div>
              <div className="stat-label">Current Viewers</div>
            </StatCard>
            <StatCard>
              <div className="stat-value">{stats.peakViewers.toLocaleString()}</div>
              <div className="stat-label">Peak Viewers</div>
            </StatCard>
            <StatCard>
              <div className="stat-value">{stats.averageViewers.toLocaleString()}</div>
              <div className="stat-label">Average Viewers</div>
            </StatCard>
            <StatCard className="success">
              <div className="stat-value">${stats.totalRevenue.toFixed(2)}</div>
              <div className="stat-label">Total Revenue</div>
            </StatCard>
            <StatCard>
              <div className="stat-value">{stats.totalSales}</div>
              <div className="stat-label">Items Sold</div>
            </StatCard>
            <StatCard>
              <div className="stat-value">{stats.totalOrders}</div>
              <div className="stat-label">Total Orders</div>
            </StatCard>
            <StatCard>
              <div className="stat-value">{stats.productImpressions.toLocaleString()}</div>
              <div className="stat-label">Product Views</div>
            </StatCard>
            <StatCard>
              <div className="stat-value">{stats.viewerEngagement}%</div>
              <div className="stat-label">Engagement</div>
            </StatCard>
            <StatCard>
              <div className="stat-value">{stats.reactionsCount.toLocaleString()}</div>
              <div className="stat-label">Reactions</div>
            </StatCard>
          </StatsGrid>

          <ChartContainer>
            <h3>Viewer Count (Last 60 data points)</h3>
            <div className="chart-placeholder">
              {viewerHistory.slice(-60).map((point, index) => (
                <div
                  key={index}
                  className="chart-bar"
                  style={{
                    height: `${Math.max(4, (point.count / maxViewers) * 100)}%`,
                  }}
                  title={`${point.count} viewers at ${formatTime(point.timestamp)}`}
                />
              ))}
            </div>
          </ChartContainer>

          {alerts.length > 0 && (
            <AlertsContainer>
              <h3>Stock Alerts</h3>
              {alerts.map((alert) => (
                <AlertItem
                  key={alert.id}
                  $warning={alert.stock <= 10 && alert.stock > 5}
                  $danger={alert.stock <= 5}
                >
                  <div className="alert-icon">
                    <FaExclamationTriangle />
                  </div>
                  <div className="alert-content">
                    <div className="alert-title">
                      {alert.productTitle} - Only {alert.stock} left!
                    </div>
                    <div className="alert-meta">
                      {formatTime(alert.timestamp)}
                    </div>
                  </div>
                  <button
                    className="resolve-btn"
                    onClick={() => handleResolveAlert(alert.id)}
                  >
                    Resolve
                  </button>
                </AlertItem>
              ))}
            </AlertsContainer>
          )}

          {recentSales.length > 0 && (
            <SalesList>
              <h3>Recent Sales</h3>
              {recentSales.slice(0, 5).map((sale) => (
                <div key={sale.id} className="sale-item">
                  <div className="sale-icon">
                    <FaShoppingCart color="#4caf50" />
                  </div>
                  <div className="sale-info">
                    <div className="sale-title">{sale.productTitle}</div>
                    <div className="sale-details">
                      {sale.quantity}x @ ${sale.price.toFixed(2)} - {formatTime(sale.timestamp)}
                    </div>
                  </div>
                  <div className="sale-amount">+${sale.total.toFixed(2)}</div>
                </div>
              ))}
            </SalesList>
          )}
        </AnalyticsContent>
      </AnalyticsContainer>
    </AnalyticsOverlay>
  );
};

export default StreamAnalytics;