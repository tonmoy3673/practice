const Post = (post) => {
  const { id, title, body } = post.post;
  return (
    <div>
      <h2>User ID : {id}</h2>
      <h3>Title : {title} </h3>
      <h4>Body : {body} </h4>
    </div>
  );
};

export default Post;
