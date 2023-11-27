import { User } from "./auth";
import { Category } from "./categories";

export type Service = {
  _id: string;
  name: string;
  city: string;
  address: string;
  pincode: string;
  plotnumber: string;
  lattitude: string;
  longitude: string;
  phoneNumber: string;
  reviews: Review[];
  photos: string[];
  rating: number;
  featured: boolean;
  isApproved: boolean;
  desc: [string];
  Owner: User;
  category: Category;
  views: number | any[];
  websiteLink: string;
};

export type Review = {
  _id: string;
  place: string;
  rating: number;
  comment: string;
  user: User;
};
