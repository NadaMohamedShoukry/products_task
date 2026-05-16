import { StarIcon } from "@heroicons/react/16/solid";

function ProductCard({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-5 ">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-[#CEC0BB] p-5 rounded-3xl  flex flex-col h-full "
        >
          <div className="bg-[#ACBDAA] rounded-full px-5 py-1 mb-1">
            <p className="font-bold text-lg text-[#1E2D4C]">
              {product.category}
            </p>
          </div>
          <div className="flex flex-col items-center ">
            <img
              className="w-35 h-55"
              src={product.image}
              alt={product.title}
            />
            <p className="mt-2 font-semibold text-lg text-[#1E2D4C]">
              {product.title}
            </p>
          </div>
          <div className="flex justify-between items-center mt-auto ">
            <p className="text-lg text-[#413f3f] text-semibold">
              {product.price}$
            </p>
            <span className="flex items-center gap-1">
              <p className="text-lg text-[#413f3f] font-semibold">
                {product.rating.rate}
              </p>
              <StarIcon className="text-amber-400 size-5" />
            </span>
          </div>
          <button
            onClick={() => {}}
            className="w-3/4 mt-1 text-[#e6dfdf] font-semibold bg-[#1E2D4C] hover:shadow py-3 rounded-2xl"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
