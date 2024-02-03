import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./component/Main/Main.jsx";
import Posts from "./component/Posts/Posts.jsx";
import Todos from "./component/Todos/Todos.jsx";
import Users from "./component/Users/Users.jsx";
import Home from "./component/Home/Home.jsx";
import SinglePost from "./component/Posts/SinglePost.jsx";
import SingleTodo from "./component/Todos/SingleTodo.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/posts",
        element: <Posts />,
      },
      {
        path: "/posts/:id",
        element: <SinglePost />,
      },
      {
        path: "/todos",
        element: <Todos />,
        loader: () => fetch("https://jsonplaceholder.typicode.com/todos"),
      },
      {
        path: "/todos/:id",
        element: <SingleTodo />,
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`),
      },
      {
        path: "/users",
        element: <Users />,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
