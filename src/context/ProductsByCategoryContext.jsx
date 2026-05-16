import { createContext, useContext, useState } from "react";

const ProductsByCategoryContext = createContext();

export function ProductsByCategoryProvider({ children }) {
  const [selected, setSelected] = useState("All");
  return (
    <ProductsByCategoryContext.Provider value={{ selected, setSelected }}>
      {children}
    </ProductsByCategoryContext.Provider>
  );
}

export function useProductsByCategoryContext() {
  const context = useContext(ProductsByCategoryContext);
  if (!context)
    throw new Error(
      "useProductsByCategoryContext was used outside the useProductsByCategoryProvider",
    );
  return context;
}
