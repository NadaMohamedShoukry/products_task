import NoData from "../assets/no-data.svg";
function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <img className="w-20 h-20" src={NoData} alt="not-found" />
      <p className="text-[#1E2D4C] text-xl font-semibold">No results found</p>
    </div>
  );
}

export default NotFound;
