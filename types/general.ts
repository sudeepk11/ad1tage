export type APIResponse<T> = {
    status: "success" | "failure",
    message: string;
    data?: T
}

export type Coords = { latitude: number; longitude: number };