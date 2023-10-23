import { useSelector } from "react-redux";
import { selectUserById } from "../../redux/entities/users/selectors";
import { User } from "./components";

export const UserContainer = ({ userId }) => {
  const user = useSelector(state => selectUserById(state, userId));

  if (!user) {
    return null;
  }

  return <User user={user} />
};
