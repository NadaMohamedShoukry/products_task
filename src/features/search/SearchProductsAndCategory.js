export function SearchProductsAndCategory(products, query) {
  const searchedValue = query.trim().toLowerCase();
  return products.filter((product) => {
    return (
      product.title.toLowerCase().includes(searchedValue) ||
      product.category.toLowerCase().includes(searchedValue)
    );
  });
}
