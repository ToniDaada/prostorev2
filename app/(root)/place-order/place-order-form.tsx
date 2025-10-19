"use client";
import { createOrder } from "@/lib/actions/order.actions";
import { useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Check, Loader } from "lucide-react";

const PlaceOrderForm = () => {
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const res = await createOrder();

    if (res.redirectTo) {
      router.push(res.redirectTo);
    }
  };
  const PlaceOrderButton = () => {
    const { pending } = useFormStatus();
    return (
      <Button disabled={pending} className="w-full" type="submit">
        {pending ? (
          <Loader className="w-4 h-4 animate-spin" />
        ) : (
          <Check className="w-4 h-4" />
        )}{" "}
        Place Order
      </Button>
    );
  };

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <PlaceOrderButton />
    </form>
  );
};

export default PlaceOrderForm;
