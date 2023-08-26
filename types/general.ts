export type APIResponse<T> = {
    status: "success" | "failure",
    message: string;
    data?: T
}

export type Coords = { latitude: number; longitude: number };

export type Result = {
    type: "services" | "categories";
    id: string;
    name: string;
    rating: number;
    count: number;
  };