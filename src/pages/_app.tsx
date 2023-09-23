import LayoutComponent from "../components/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CartProvider } from "../Utlities/CartContext/index";
import { UserProvider } from "@/Utlities/UserContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <CartProvider>
        <LayoutComponent>
          <Component {...pageProps} />
          <ToastContainer/>
        </LayoutComponent>
      </CartProvider>
    </UserProvider>
  );
}
