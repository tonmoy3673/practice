import { useLoaderData } from "react-router-dom";

const SingleTodo = () => {
  const todo = useLoaderData();
  console.log(todo);

  return (
    <div className="text-center">
      <h3>ID : {todo?.id}</h3>
      <h3>Title: {todo?.title}</h3>
      <h3>Status : {`${todo.completed}`}</h3>
    </div>
  );
};

export default SingleTodo;
