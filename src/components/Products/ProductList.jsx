import { StyledProductList } from "./ProductList.styled";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
import { selectFilteredProducts } from "../../store/product";

const ProductList = ({ products, onProductClick, showPin = false }) => {
  const filteredProducts = useSelector(selectFilteredProducts);
  const displayProducts = products || filteredProducts;

  return (
    <StyledProductList>
      <div className="product-grid">
        {displayProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={onProductClick}
            showPin={showPin}
          />
        ))}
      </div>
      {displayProducts.length === 0 && (
        <div className="empty-state">
          <p>No products found</p>
        </div>
      )}
    </StyledProductList>
  );
};

export default ProductList;
