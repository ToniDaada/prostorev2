"use client";

import { ShippingAddress } from "@/types";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useTransition } from "react";
import { shippingAddressSchema } from "@/lib/validator";

const ShippingAddressForm = ({ address }: { address: ShippingAddress }) => {
  const router = useRouter();
  return <>Form</>;
};

export default ShippingAddressForm;
