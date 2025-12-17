import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header className="w-full px-1 bg-sky-200">
        <nav className="w-full max-w-7xl h-14 flex items-center px-5 justify-between mx-auto">
          <Link to="/" className="font-bold text-2xl">
            Tasty Shop
          </Link>
          <Link className="relative" to={"cart"}>
            <FiShoppingCart size={24} color="#121212" />
            <span className="absolute -right-3 -top-3 px-2.5 bg-sky-500 rounded-full w-6 h-6 flex items-center justify-center text-white text-xs">
              2
            </span>
          </Link>
        </nav>
      </header>
    </div>
  );
}
