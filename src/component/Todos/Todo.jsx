import { Link } from "react-router-dom";

const Todo = (todo) => {
  const { id, title } = todo.todo;
  return (
    <div>
      <h3>ID : {id}</h3>
      <h3>Title : {title}</h3>
      <div className="py-2">
        <Link to={`/todos/${id}`}>
          <button className="bg-blue-500 p-2 rounded-md hover:bg-orange-600">
            Status
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Todo;
