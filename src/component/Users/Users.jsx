import { useLoaderData } from "react-router-dom";
import User from "./User";

const Users = () => {
  const users = useLoaderData();

  console.log(users);
  return (
    <div className="text-center">
      <h3 className="text-xl text-green-500 font-semibold">
        Total Users : {users.length}
      </h3>

      <div>
        {users?.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>

      <div className="text-center text-lg">
        <h2>Manage Users</h2>
      </div>
    </div>
  );
};

export default Users;
