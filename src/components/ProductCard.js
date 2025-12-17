import Image from 'next/image';

export default function ProductCard({ product }) {
  return (
    <div className="group border border-gray-100 rounded-2xl p-4 hover:shadow-xl transition-shadow">
      <div className="relative h-64 w-full overflow-hidden rounded-xl bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="mt-4 flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-500 text-sm">${product.price}</p>
        </div>
        <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg font-medium hover:bg-blue-700">
          Buy Now
        </button>
      </div>
    </div>
  );
}
