import { useState } from "react";
import Searchbar from "../../components/Searchbar";
import useProducts from "../products/useProducts";

import ProductCard from "../../components/ProductCard";

import { useDebounce } from "use-debounce";
import { SearchProductsAndCategory } from "./SearchProductsAndCategory";
import NotFound from "../../components/NotFound";
function Search() {
  const [query, setQuery] = useState("");
  const { products } = useProducts();
  const [debouncedQuery] = useDebounce(query, 300);

  //searchedValue returns an array
  const searchedValue = SearchProductsAndCategory(products, debouncedQuery);

  return (
    <>
      <Searchbar query={query} setQuery={setQuery} />
      {query && searchedValue.length === 0 ? (
        <NotFound />
      ) : (
        <ProductCard products={searchedValue} />
      )}
    </>
  );
}

export default Search;
