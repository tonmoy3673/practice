import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/todos">Todos</Link>
        <Link to="/users">Users</Link>
      </ul>
    </div>
  );
};

export default Navbar;
