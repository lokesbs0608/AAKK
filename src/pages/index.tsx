import Image from "next/image";
import { Inter } from "next/font/google";
import ProductCard from "@/components/productCard";
import { Box, Grid } from "@mui/material";
import data from "../components/TestData/Data.json";
import {CartProvider} from 'react-use-cart'
import Slection from "../components/Selection/index";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <ProductCard data={data} />
    

    
      );
}
