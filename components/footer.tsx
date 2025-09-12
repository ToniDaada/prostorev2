import { APP_NAME } from "@/lib/constants";

const Footer = () => {
  const getCurrentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200">
      <div className="p-5 flex-center">
        {getCurrentYear} {APP_NAME}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
