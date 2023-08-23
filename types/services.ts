import { User } from "./auth";

export type Service = {
    _id: string;
    name: string;
    city: string;
    address: string;
    lattitude: string;
    longitude: string;
    phoneNumber: string;
    reviews: Review[];
    photos: string[];
    rating: number;
    featured: boolean;
    isApproved: boolean;
    desc: string;
    owner: User;
}

export type Review = {
    _id: string;
}