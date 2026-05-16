import { ProductsByCategoryProvider } from "../context/productsByCategoryContext";
import Categories from "../features/categories/Categories";

import Products from "../features/products/Products";

function HomePage() {
  return (
    <ProductsByCategoryProvider>
      <Categories />
      <Products />
    </ProductsByCategoryProvider>
  );
}

export default HomePage;
