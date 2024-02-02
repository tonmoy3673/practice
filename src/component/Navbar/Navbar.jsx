import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="py-6 flex items-center px-10">
      <h3 className="text-green-600 text-2xl hover:text-orange-600 cursor-pointer">
        React Practice
      </h3>
      <ul className="mx-auto">
        <Link
          className="me-5 text-blue-600 hover:text-orange-600 cursor-pointer"
          to="/"
        >
          Home
        </Link>
        <Link
          className="me-5 text-blue-600 hover:text-orange-600 cursor-pointer"
          to="/posts"
        >
          Posts
        </Link>
        <Link
          className="me-5 text-blue-600 hover:text-orange-600 cursor-pointer"
          to="/todos"
        >
          Todos
        </Link>
        <Link
          className="me-5 text-blue-600 hover:text-orange-600 cursor-pointer"
          to="/users"
        >
          Users
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
