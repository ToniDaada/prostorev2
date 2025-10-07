import { ShippingAddress } from "@/types";

export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "Prostore";
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_DESCRIPTION ||
  "A modern e-commerce platform built with Next.js and Tailwind CSS";
export const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";

export const LATEST_PRODUCTS_LIMIT =
  Number(process.env.LATEST_PRODUCTS_LIMIT) || 4;
export const signInDefaultValues = {
  email: "",
  password: "",
};
export const signUpDefaultValues = {
  name: "",
  password: "",
  email: "",
  confirmPassword: "",
};

export const shippingAddressDefaultValues: ShippingAddress = {
  fullName: "Daada Toni",
  streetAddress: "3 Niyi Adedeji Street, Ogudu GRA",
  city: "Lagos",
  postalCode: "100001",
  country: "Nigeria",
};
