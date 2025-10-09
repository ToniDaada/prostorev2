import { z } from "zod";
import {
  cartItemSchema,
  insertProductsSchema,
  insertCartSchema,
  shippingAddressSchema,
} from "@/lib/validator";

export type Product = z.infer<typeof insertProductsSchema> & {
  id: string;
  rating: string;
  createdAt: Date;
};
export type Cart = z.infer<typeof insertCartSchema>;
export type CartItem = z.infer<typeof cartItemSchema>;
export type ShippingAddress = z.infer<typeof shippingAddressSchema>;
