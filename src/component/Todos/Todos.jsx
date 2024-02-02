import { useLoaderData } from "react-router-dom";

const Todos = () => {
  const todos = useLoaderData();

  return (
    <div className="text-center">
      <h3>Total Todos List : {todos.length}</h3>
    </div>
  );
};

export default Todos;
