import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function Searchbar({ query, setQuery }) {
  return (
    <div className="flex items-center  gap-3 bg-white/70  py-3 px-5 rounded-full ">
      <MagnifyingGlassIcon className="size-5 text-[#1E2D4C]" />
      <input
        autoFocus
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Products........."
        className="outline-none text-[#1E2D4C]"
      />
    </div>
  );
}

export default Searchbar;
