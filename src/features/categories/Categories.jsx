import Spinner from "../../components/Spinner";
import { useProductsByCategoryContext } from "../../context/ProductsByCategoryContext";
import TabMenu from "../../components/TabMenu";
import useCategories from "./useCategories";

function Categories() {
  const { loading, error, categories } = useCategories();
  const { selected, setSelected } = useProductsByCategoryContext();
  if (error) return <Error error={error} />;
  if (loading) return <Spinner />;

  return (
    <div className="max-w-7xl mx-auto">
      <TabMenu
        categories={categories}
        selected={selected}
        setSelected={setSelected}
      />
    </div>
  );
}

export default Categories;
