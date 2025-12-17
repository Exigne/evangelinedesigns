import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-8 px-6 max-w-6xl mx-auto">
      <Link href="/" className="text-2xl font-bold tracking-tighter">
        EVANGELINE<span className="text-blue-600">DESIGNS</span>
      </Link>
      <div className="space-x-8 text-sm font-medium">
        <Link href="/shop" className="hover:text-blue-600">Shop</Link>
        <Link href="/about" className="hover:text-blue-600">About</Link>
        <button className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition">
          Cart (0)
        </button>
      </div>
    </nav>
  );
}
