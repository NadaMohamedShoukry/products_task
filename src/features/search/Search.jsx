import { useState } from "react";
import Searchbar from "../../components/Searchbar";
import useProducts from "../products/useProducts";

import ProductCard from "../../components/ProductCard";
import NotFound from "../../assets/no-data.svg";
import { useDebounce } from "use-debounce";
import { SearchProductsAndCategory } from "./SearchProductsAndCategory";
function Search() {
  const [query, setQuery] = useState("");
  const { products } = useProducts();
  const [debouncedQuery] = useDebounce(query, 300);
  console.log(debouncedQuery);

  //searchedValue returns an array
  const searchedValue = SearchProductsAndCategory(products, debouncedQuery);

  return (
    <>
      <Searchbar query={query} setQuery={setQuery} />
      {query && searchedValue.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-10">
          <img className="w-20 h-20" src={NotFound} alt="not-found" />
          <p className="text-[#1E2D4C] text-xl font-semibold">
            No results found
          </p>
        </div>
      ) : (
        <ProductCard products={searchedValue} />
      )}
    </>
  );
}

export default Search;
