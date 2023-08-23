import { getApi, postApi } from "./api/index";

// ****** USER APIS *******

export const getUsers = () => getApi("/users");

export const login = (data) => postApi("/auth/login", data);
