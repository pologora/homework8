import { useUserContext } from "../../contexts/UserContext";

const User = () => {
  const { user } = useUserContext();
  return <div>{user.name}</div>;
};
export default User;
