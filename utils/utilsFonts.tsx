import { Josefin_Sans } from "next/font/google";
import { Inter } from "next/font/google";
import { Lato } from "next/font/google";

export const josefin = Josefin_Sans({
  subsets: ["latin"],
});

export const lato = Lato({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export const inter = Inter({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});
