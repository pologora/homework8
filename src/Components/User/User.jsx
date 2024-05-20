import { useUserContext } from "../../contexts/UserContext";

const User = () => {
  const { user } = useUserContext();
  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};
export default User;
