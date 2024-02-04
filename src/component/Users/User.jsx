const User = (user) => {
  const { id, name } = user.user;
  return (
    <div>
      <h3>ID : {id}</h3>
      <h3>Name : {name}</h3>
      <div className="py-2">
        <button className="bg-blue-500 p-2 rounded-md hover:bg-orange-500">
          Details
        </button>
      </div>
    </div>
  );
};

export default User;
