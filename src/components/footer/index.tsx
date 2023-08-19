import React from "react";

const Footer = () => {
  const Message = "Message from website";
  const handleWhatsApp = (data: any) => {
    window.location.href = `https://api.whatsapp.com/send?phone=919003273189&text=${Message}`;
  };
  return (
    <div>
      <footer
        style={{ backgroundColor: "#003366" }}
        className="bg-white shadow dark:bg-gray-800"
      >
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span
            style={{ color: "#fff" }}
            className="text-sm  sm:text-center dark:text-gray-400"
          >
            © 2023{" "}
            <a href="/" className="hover:underline">
              AAKK
            </a>
            . All Rights Reserved.
          </span>
          <ul
            style={{ color: "#fff" }}
            className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0"
          >
            <li>
              <a href="/aboutus" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a
                href="/privacyandpolicy"
                className="mr-4 hover:underline md:mr-6"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                style={{ cursor: "pointer" }}
                onClick={() => handleWhatsApp("data")}
                className="hover:underline"
              >
                Whatsapp
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
