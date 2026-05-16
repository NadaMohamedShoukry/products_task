import TabMenuButton from "./TabMenuButton";

function TabMenu({ categories, selected, setSelected }) {
  return (
    <div className=" flex justify-center items-center flex-wrap gap-10 mt-10 ">
      {/* Now the selected becomes true or fals */}
      <TabMenuButton
        onClick={() => setSelected("All")}
        selected={selected === "All"}
      >
        All
      </TabMenuButton>
      {categories.map((category) => (
        <TabMenuButton
          key={category}
          onClick={() => setSelected(category)}
          selected={selected === category}
        >
          {category}
        </TabMenuButton>
      ))}
    </div>
  );
}

export default TabMenu;
