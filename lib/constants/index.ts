import { ShippingAddress } from "@/types";

export const APP_NAME = "E-commerce Store";
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
  fullName: "",
  streetAddress: "",
  city: "",
  postalCode: "",
  country: "",
};

export const PAYMENT_METHODS = process.env.PAYMENT_METHODS
  ? process.env.PAYMENT_METHODS.split(", ")
  : ["PayPal", "Stripe", "CashOnDelivery"];

export const DEFAULT_PAYMENT_METHOD =
  process.env.DEFAULT_PAYMENT_METHOD || "PayPal";
