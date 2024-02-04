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

      <div className="flex w-9/12 justify-between">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 py-10 px-12 gap-10">
          {users?.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </div>

        <div className=" text-lg py-10">
          <h2 className="text-green-500">Manage Users</h2>
        </div>
      </div>
    </div>
  );
};

export default Users;
