import { Link } from "react-router-dom";

const Post = (post) => {
  const { id, title, body } = post.post;
  return (
    <div>
      <h2>User ID : {id}</h2>
      <h3>Title : {title.length > 12 ? title.slice(0, 15) : title} </h3>
      <h4>
        Summary :{" "}
        {body.length > 20 ? (
          <>
            {body.slice(0, 20)} ...
            <Link to={`/posts/${id}`} className="text-blue-500 underline">
              More
            </Link>
          </>
        ) : (
          body
        )}{" "}
      </h4>
    </div>
  );
};

export default Post;
