const User = (user) => {
  const { id, name } = user.user;
  return (
    <div>
      <h3>ID : {id}</h3>
      <h3>Name : {name}</h3>
    </div>
  );
};

export default User;
