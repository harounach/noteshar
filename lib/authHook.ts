import { useEffect } from "react";
import { useAppSelector } from "./store/hooks";
import { selectUser } from "./store/features/user/userSlice";
import { NextRouter } from "next/router";

const AUTH_USER_KEY = "auth_user_key";

export const useLoggedInUser = (router: NextRouter) => {
  // user status
  const userToken = useAppSelector(selectUser);
  const isLoggedIn = userToken ? true : false;

  useEffect(() => {
    if (!isLoggedIn) {
      // redirect user to login page
      router.replace("/login");
    }
  }, [isLoggedIn]);
};

export const useRedirectToHome = (router: NextRouter) => {
  // user status
  const userToken = useAppSelector(selectUser);
  const isLoggedIn = userToken ? true : false;

  useEffect(() => {
    if (isLoggedIn) {
      // redirect user to login page
      router.replace("/");
    }
  }, [isLoggedIn]);
};

export const useIsLoggedIn = () => {
  // user status
  const userToken = useAppSelector(selectUser);
  const isLoggedIn = userToken ? true : false;
  return isLoggedIn;
};
