
import ProductCard from "@/components/productCard";
import data from "../components/TestData/Data.json";


export default function Home() {
  return (
    <div className="flex  justify-center items-center">
    <ProductCard data={data} />

    </div>
    

    
      );
}
