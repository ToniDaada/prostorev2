"use client";
import { Cart, CartItem } from "@/types";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { PlusIcon, MinusIcon, Loader } from "lucide-react";
import toast from "react-hot-toast";
import { addItemToCart, removeItemFromCart } from "@/lib/actions/cart.actions";
import { useTransition } from "react";

const AddToCart = ({ item, cart }: { cart?: Cart; item: CartItem }) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleAddtoCart = async function () {
    startTransition(() => {
      (async () => {
        const response = await addItemToCart(item);

        if (!response.success) return toast.error(await response.message);

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
      })();
    });
  };

  const handleRemoveFromCart = async function () {
    startTransition(() => {
      (async () => {
        const response = await removeItemFromCart(item.productId);
        if (!response.success) return toast.error(await response.message);

        toast.dismissAll();
        toast.custom(
          (t) => (
            <div
              className={`${
                t.visible ? "animate-enter" : "animate-leave"
              } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex items-center justify-between p-4`}
            >
              <span className="text-gray-800 text-sm">{response.message}</span>
            </div>
          ),
          {
            position: "top-center",
          }
        );
        return;
      })();
    });
  };

  //Check if item is in cart

  const existItem =
    cart && cart.items.find((x) => x.productId === item.productId);

  if (existItem)
    return (
      <div className="space-x-2 mt-4">
        <Button
          className=""
          type="button"
          variant="outline"
          onClick={handleRemoveFromCart}
        >
          {isPending ? (
            <Loader className="w-4 h-4 animate-spin" />
          ) : (
            <MinusIcon className="w-4 h-4" />
          )}
        </Button>
        <span className="px-2">{existItem.qty}</span>
        <Button type="button" variant="outline" onClick={handleAddtoCart}>
          {isPending ? (
            <Loader className="w-4 h-4 animate-spin" />
          ) : (
            <PlusIcon className="w-4 h-4" />
          )}
        </Button>
      </div>
    );

  return (
    <Button
      className="w-full cursor-pointer hover:bg-gray-800 mt-4"
      type="button"
      onClick={handleAddtoCart}
    >
      {isPending ? (
        <Loader className="w-4 h-4 animate-spin" />
      ) : (
        <PlusIcon className="w-4 h-4" />
      )}
      Add to Cart
    </Button>
  );
};

export default AddToCart;
