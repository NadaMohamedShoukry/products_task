import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router";

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="container mx-auto sticky top-3 rounded-full p-4 bg-white/30  border border-white/20  backdrop-blur-xl shadow">
      <div className="flex justify-between items-center  ">
        <button
          onClick={() => navigate("/")}
          className="text-[#1E2D4C] font-bold hover:shadow py-1 px-2 rounded-2xl"
        >
          FakeProducts
        </button>
        <div className="flex gap-3 items-center">
          <button onClick={() => navigate("/search")}>
            <MagnifyingGlassIcon className="size-5 text-[#1E2D4C]" />
          </button>
          <button
            onClick={() => {}}
            className="bg-[#ACBDAA]/30 hover:bg-[#ACBDAA] hover:shadow py-1 px-2 rounded-2xl text-[#1E2D4C] font-semibold"
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
