import ProductCard from "../../components/ProductCard";
import Spinner from "../../components/Spinner";
import useProducts from "./useProducts";
import { useProductsByCategoryContext } from "../../context/productsByCategoryContext";
import useProductsByCategory from "./useProductsByCategory";

function Products() {
  const { selected } = useProductsByCategoryContext();
  const {
    loading: loadingProducts,
    error: errorProducts,
    products,
  } = useProducts();

  const {
    loading: loadingProductsByCategory,
    error: errorProductsByCategory,
    productsByCategory,
  } = useProductsByCategory(selected);

  const selectedProducts = selected === "All" ? products : productsByCategory;
  const error = selected === "All" ? errorProducts : errorProductsByCategory;
  const loading =
    selected === "All" ? loadingProducts : loadingProductsByCategory;

  if (error) return <Error error={error} />;
  if (loading) return <Spinner />;

  return (
    <div className="max-w-7xl mx-auto">
      <ProductCard products={selectedProducts} />
    </div>
  );
}

export default Products;
