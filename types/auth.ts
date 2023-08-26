export type User = {
    _id: string;
    username: string;
    email: string;
    phoneNumber: string;
    role: "user" | "owner" | "admin",
    token: string;
    is_owner: boolean;
}

export type Query = {
    _id: string;
    name: string;
    phone_number: string;
    email: string;
    body: string;
    subject: string;
}