"use client";
import { CartItem } from "@/types";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { PlusIcon } from "lucide-react";
import toast from "react-hot-toast";
import { addItemToCart } from "@/lib/actions/cart.actions";

const AddToCart = ({ item }: { item: CartItem }) => {
  const router = useRouter();

  const handleAddtoCart = async function () {
    const response = await addItemToCart(item);

    if (!response.success) return toast.error(response.message);

    toast.custom(
      (t) => (
        <div
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex items-center justify-between p-4`}
        >
          <span className="text-gray-800 text-sm">{response.message}</span>
          <button
            onClick={() => {
              router.push("/cart");
              toast.dismiss(t.id); // close toast after click
            }}
            className="ml-4 bg-primary text-white px-3 py-1 rounded hover:bg-gray-800"
          >
            Go to Cart
          </button>
        </div>
      ),
      {
        position: "bottom-right",
      }
    );
  };
  return (
    <Button
      className="w-full cursor-pointer hover:bg-gray-800 mt-4"
      type="button"
      onClick={handleAddtoCart}
    >
      <PlusIcon /> Add to Cart
    </Button>
  );
};

export default AddToCart;
