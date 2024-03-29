import { useLoaderData } from "react-router-dom";

const SingleUser = () => {
  const user = useLoaderData();
  console.log(user);
  const { id, name, address, phone, company } = user;

  return (
    <div className="text-center">
      <h3>ID : {id}</h3>
      <h3>Name : {name}</h3>
      <h3>Address : {address?.street + " " + address?.city}</h3>
      <h3>Phone : {phone}</h3>
      <h3>Company : {company?.name}</h3>
    </div>
  );
};

export default SingleUser;
