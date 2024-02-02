import { useLoaderData } from "react-router-dom";
import Todo from "./Todo";

const Todos = () => {
  const todos = useLoaderData();

  return (
    <div className="text-center">
      <h3>Total Todos List : {todos.length}</h3>
      <div className="grid md:grid-cols-4 grid-cols-1 px-12 py-12 gap-8">
        {todos?.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default Todos;
