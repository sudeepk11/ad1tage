"use client";

import { createContext } from "react";
import { User } from "../types/auth";
import useAuth from "../hooks/useAuth";

export type AuthContextType = {
  user: Pick<User, "username" | "role"> | null;
  token: string;
  loading: boolean;
  logIn: (user: User) => void;
  logOut: () => void;
};

export const AuthContext = createContext<AuthContextType>(null!);

export default function AuthProvider({ children }) {
  const auth = useAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}
