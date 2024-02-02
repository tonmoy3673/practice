import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const SinglePost = () => {
  const [post, setPost] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  return (
    <div className="text-center py-10 px-12">
      <h3>ID : {post?.id}</h3>
      <h3>Title : {post?.title}</h3>
      <h3>Summary : {post?.body}</h3>
    </div>
  );
};

export default SinglePost;
