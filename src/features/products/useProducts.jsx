import { useEffect, useState } from "react";
import { api } from "../../services/api";

function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getProducts() {
      try {
        const res = await api.get("/products");
        setProducts(res.data);
      } catch (error) {
        setError(error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    }
    getProducts();
  }, []);

  return { loading, error, products };
}

export default useProducts;
