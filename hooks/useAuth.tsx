import { useLayoutEffect, useState } from "react";
import { AuthContextType } from "../providers/AuthProvider";
import { User } from "../types/auth";
import axios from "axios";

export default function useAuth(): AuthContextType {
  const [token, setToken] = useState("");
  const [user, setUser] = useState<Pick<User, "username" | "role"> | null>(
    null
  );
  const [loading, setLoading] = useState(true);

  function logIn(user: User) {
    if (!user) return logOut();
    setUser(user);
    setToken(user.token);
    axios.defaults.headers.common.Authorization = `Bearer ${user.token}`;
    localStorage.setItem(
      "user",
      JSON.stringify({
        username: user.username,
        token: user.token,
        role: user.role,
      })
    );
    setLoading(false);
  }

  function logOut() {
    localStorage.removeItem("user");
    setUser(null);
    setToken("");
    delete axios.defaults.headers.common.Authorization;
    setLoading(false);
  }

  useLayoutEffect(() => {
    const userFromStorage = localStorage.getItem("user");
    const user = userFromStorage ? JSON.parse(userFromStorage) : null;
    logIn(user);
  }, []);

  return {
    user,
    token,
    loading,
    logIn,
    logOut,
  };
}
