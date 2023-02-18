import { useEffect } from "react";

import { IUser } from "../types";
import Search from "../components/search";
import { getUserDetails } from "../request";
import { useAuth0 } from "@auth0/auth0-react";
import { useAtom } from "jotai";
import { userAtom } from "../App";

const User = () => {
  const { user: userAuth0, isLoading, error } = useAuth0();
  const [userDetails, setUserDetails] = useAtom(userAtom);

  useEffect(() => {
    if (userAuth0 && !Object.keys(userDetails).length) {
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
