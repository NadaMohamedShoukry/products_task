import { useEffect, useState } from "react";
import { api } from "../../services/api";

function useProductsByCategory(category) {
  const [productsByCategory, setProductsByCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getProductsByCategory() {
      try {
        const res = await api.get(`/products/category/${category}`);

        setProductsByCategory(res.data || []);
      } catch (error) {
        setError(error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    }
    getProductsByCategory();
  }, [category]);

  return { loading, error, productsByCategory };
}

export default useProductsByCategory;
