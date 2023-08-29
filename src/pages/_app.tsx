import LayoutComponent from "../components/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CartProvider } from "../Utlities/CartContext/index";
import { UserProvider } from "@/Utlities/UserContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <CartProvider>
        <LayoutComponent>
          <Component {...pageProps} />
        </LayoutComponent>
      </CartProvider>
    </UserProvider>
  );
}
