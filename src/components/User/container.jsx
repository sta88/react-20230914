import { User } from "./components";
import { useGetUsersQuery } from "../../redux/services/api";

export const UserContainer = ({ userId }) => {
  const {data: user} = useGetUsersQuery(null, {
    selectFromResult: (result) => {
      return {...result, data: result?.data?.find(({id}) => id === userId)}
    }
  });

  if (!user) {
    return null;
  }

  return <User user={user} />
};
