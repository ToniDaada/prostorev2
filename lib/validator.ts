import { z } from "zod";
import { formatNumberwithDecimal } from "./utils";

// For the regex
//^-means start with
//d means digit d+ means it can have more than one digit
//? oprional tuen in braket is the oprional part the dot is inbetween tow slashes followed by a

const currency = z
  .string()
  .refine(
    (value) => /^\d+(\.\d{2})?$/.test(formatNumberwithDecimal(Number(value))),
    "Price must have exactly two decimal places"
  );
//Schema for inserting products
export const insertProductsSchema = z.object({
  name: z.string().min(3, "Name must be at list 3 characters"),
  slug: z.string().min(3, "Slug must be at list 3 characters"),
  category: z.string().min(3, "Category must be at list 3 characters"),
  brand: z.string().min(3, "Brand must be at list 3 characters"),
  description: z.string().min(3, "Description must be at list 3 characters"),
  stock: z.coerce.number(),
  images: z.array(z.string()).min(1, "Product must have at least one image"),
  isFeatured: z.boolean(),

  banner: z.string().nullable(),
  price: currency,
});

// Schema for stigning users in
export const signInFormSchema = z.object({
  email: z.email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 charracters"),
});

// Schema for signing up a user
export const signUpFormSchema = z
  .object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    email: z.email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 charracters"),
    confirmPassword: z
      .string()
      .min(6, "Confirm password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords dont match",
    path: ["confirmPassword"],
  });
