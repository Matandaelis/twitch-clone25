import { StyledShop } from "./Shop.styled";
import { useSelector, useDispatch } from "react-redux";
import ProductList from "../../components/Products/ProductList";
import {
  selectCategories,
  selectFeaturedProducts,
  selectLowStockProducts,
  selectTotalInventoryValue,
  selectTotalSales,
  setCategoryFilter,
  setFeaturedFilter,
  setLowStockFilter,
  clearFilters,
} from "../../store/product";
import { useState } from "react";

const Shop = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const featuredProducts = useSelector(selectFeaturedProducts);
  const lowStockProducts = useSelector(selectLowStockProducts);
  const totalInventoryValue = useSelector(selectTotalInventoryValue);
  const totalSales = useSelector(selectTotalSales);

  const [activeFilter, setActiveFilter] = useState("all");

  const handleCategoryClick = (category) => {
    if (activeFilter === category) {
      setActiveFilter("all");
      dispatch(clearFilters());
    } else {
      setActiveFilter(category);
      dispatch(setCategoryFilter(category));
      dispatch(setFeaturedFilter(false));
      dispatch(setLowStockFilter(false));
    }
  };

  const handleFeaturedClick = () => {
    if (activeFilter === "featured") {
      setActiveFilter("all");
      dispatch(clearFilters());
    } else {
      setActiveFilter("featured");
      dispatch(setFeaturedFilter(true));
      dispatch(setCategoryFilter(null));
      dispatch(setLowStockFilter(false));
    }
  };

  const handleLowStockClick = () => {
    if (activeFilter === "lowstock") {
      setActiveFilter("all");
      dispatch(clearFilters());
    } else {
      setActiveFilter("lowstock");
      dispatch(setLowStockFilter(true));
      dispatch(setCategoryFilter(null));
      dispatch(setFeaturedFilter(false));
    }
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);
  };

  return (
    <StyledShop>
      <div className="shop-header">
        <h1>Live Shopping</h1>
        <p>Discover amazing products from our live streamers</p>
      </div>

      <div className="stats-bar">
        <div className="stat-item">
          <span className="stat-value">{formatCurrency(totalInventoryValue)}</span>
          <span className="stat-label">Inventory Value</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{totalSales}</span>
          <span className="stat-label">Total Sales</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{lowStockProducts.length}</span>
          <span className="stat-label">Low Stock Items</span>
        </div>
      </div>

      <div className="filters-section">
        <h3>Categories</h3>
        <div className="filter-buttons">
          <button
            className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
            onClick={() => {
              setActiveFilter("all");
              dispatch(clearFilters());
            }}
          >
            All Products
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeFilter === category ? "active" : ""}`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
          <button
            className={`filter-btn ${activeFilter === "featured" ? "active" : ""}`}
            onClick={handleFeaturedClick}
          >
            Featured
          </button>
          <button
            className={`filter-btn ${activeFilter === "lowstock" ? "active" : ""}`}
            onClick={handleLowStockClick}
          >
            Low Stock
          </button>
        </div>
      </div>

      {featuredProducts.length > 0 && activeFilter === "all" && (
        <div className="featured-section">
          <h2>Featured Products</h2>
          <ProductList products={featuredProducts} />
        </div>
      )}

      <div className="products-section">
        <h2>
          {activeFilter === "all"
            ? "All Products"
            : activeFilter === "featured"
            ? "Featured Products"
            : activeFilter === "lowstock"
            ? "Low Stock Products"
            : `${activeFilter} Products`}
        </h2>
        <ProductList />
      </div>
    </StyledShop>
  );
};

export default Shop;
