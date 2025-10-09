import Image from "next/image";
import loader from "@/assets/loader.gif";
import { Loader } from "lucide-react";

const LoadingPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      {/* <Image width={150} height={150} src={loader} alt="Loading..." /> */}
      <Loader className="animate-spin w-[150px] h-[150px]" />
    </div>
  );
};

export default LoadingPage;
