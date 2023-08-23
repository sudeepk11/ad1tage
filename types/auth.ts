export type User = {
    _id: string;
    username: string;
    email: string;
    phoneNumber: string;
    role: "user" | "owner" | "admin",
    token: string;
    is_owner: boolean;
}