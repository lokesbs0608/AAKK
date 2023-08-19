import Image from "next/image";
import { Inter } from "next/font/google";
import ProductCard from "@/components/productCard";
import { Box, Grid } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-center">
        <div style={{ minWidth: '300px' }} className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10].map((item) => {
            return <ProductCard key={item} />;
          })}
        </div>
      </div>
    </div>
  );
}
