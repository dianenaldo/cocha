import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { getUserDetails } from "../request";
import { IUser } from "../types";
import Search from "../components/search";

const User = () => {
  const { user: userAuth0, isLoading, error } = useAuth0();
  const [userDetails, setUserDetails] = useState<IUser>();

  useEffect(() => {
    if (userAuth0) {
        (async () => {
            const userDetails: IUser = await getUserDetails(
            userAuth0.nickname as string
            );
            setUserDetails(userDetails);
        })();
    }
  }, [userAuth0]);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Failed to login : {error.message}</div>;

  return userDetails && <Search user={userDetails} />;
};

export default User;
