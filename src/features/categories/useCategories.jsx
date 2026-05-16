import { useEffect, useState } from "react";
import { api } from "../../services/api";

function useCategories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getCategories() {
      try {
        const res = await api.get("/products/categories");
        setCategories(res.data);
      } catch (error) {
        setError(error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    }
    getCategories();
  }, []);

  return { loading, error, categories };
}

export default useCategories;
