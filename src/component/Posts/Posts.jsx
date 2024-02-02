import { useEffect, useState } from "react";
import Post from "./Post";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  console.log(posts);
  return (
    <div className="text-center">
      <h3 className="text-xl text-green-500 text-center font-semibold">
        All Posts : {posts.length}
      </h3>
      <div className="grid  gap-6 md:grid-cols-4 sm:grid-cols-2 py-12 mt-6 px-12">
        {posts?.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
