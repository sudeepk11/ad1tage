import { useLayoutEffect, useState } from "react";
import { AuthContextType } from "../providers/AuthProvider";
import { User } from "../types/auth";
import axios from "axios";

export default function useAuth(): AuthContextType {
  const [token, setToken] = useState("");
  const [user, setUser] = useState<Pick<User, "username" | "role"> | null>(
    null
  );

  function logIn(user: User) {
    setUser(user);
    setToken(user.token);
    axios.defaults.headers.common.Authorization = `Bearer ${user.token}`;
    localStorage.setItem(
      "user",
      JSON.stringify({ username: user.username, token: user.token })
    );
  }

  function logOut() {
    localStorage.removeItem("user");
    setUser(null);
    setToken("");
    delete axios.defaults.headers.common.Authorization;
  }

  useLayoutEffect(() => {
    const userFromStorage = localStorage.getItem("user");
    const user = userFromStorage ? JSON.parse(userFromStorage) : null;
    setUser(user);
  }, []);

  return {
    user,
    token,
    logIn,
    logOut,
  };
}
