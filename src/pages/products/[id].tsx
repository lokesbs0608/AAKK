import { Backdrop, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useCart } from "../../Utlities/CartContext/index";
import { useUser } from "@/Utlities/UserContext";
import Image from "next/image";

const intial = {
  title: "",
  price: [],
  images: [],
  size: [],
  color: [],
  category: "",
  subcategory: "",
  rating: "",
  id: 0,
};

const ProductDetails = () => {
  const router = useRouter();
  const { data }: any = router.query;
  const [PrvImage, setPrvImage] = useState("");
  const { addItemToCart, cartItems }: any = useCart();
  const { user }: any = useUser();
  const [ProductData, setProductData] = useState(intial);
  const [quantity ,setQuantity]=useState(1)
  const [prize, setprize] = useState(0);
 const [selectedcolor ,setselectedcolor] =useState();
 const [selectedSize ,setselectedSize]=useState();
const [indexofSize,setIndexofSize]:any=useState(0)
const [finalPrice,setFinalPrice]:any=useState()  
const [priceUpdate,setPriceUpdate]=useState(false);


useEffect(() => {
    if (data) {
      localStorage.setItem("productData",data)
      // setProductData((prev) => ({ ...prev, ...JSON.parse(data) }));
    } else {
      return;
    }
  }, [data]);

  useEffect(() => {
    // Check if window object is defined (client-side)
    if (typeof window !== "undefined") {
      // Use localStorage
      const storedData = localStorage.getItem("productData");
      if (storedData) {
        setProductData(JSON.parse(storedData));
     
      }
    } else {
      // Handle server-side rendering or non-browser environment
      // You can leave setProductData as null or initialize it differently
    }
  }, []);
 

  useEffect(() => {
    if (ProductData && ProductData.images && ProductData.images.length > 0) {
      setPrvImage(ProductData?.images[0]);
    }
    if (ProductData && ProductData.price && ProductData.price.length > 0) {
      setprize(ProductData.price[0]);
    }
    if (ProductData && ProductData.color && ProductData.color.length > 0) {
      setselectedcolor(ProductData.color[0] || "na");
    }
  }, [ProductData]);

  const handelPrevImages = (path: string) => {
    setPrvImage(path);
  };
  

  const handelAddToCart = (item: any) => {
   
    item.price=prize;
    item.quantity=quantity;
    item.selectedSize=selectedSize;
    item.selectedcolor=selectedcolor;
    if(finalPrice){
      item.Finalprice=finalPrice;
    }else{

      item.Finalprice=prize;
    }
  
    const AleadyExist = cartItems.some(
      (CartItem: any) => CartItem.id === item.id
    );

    if (!AleadyExist) {
      addItemToCart(item);
    } else {
      alert("Item Already in Your Cart");
    }
  };

  const handelBuyNow = (data: any) => {
    if (!user) {
      handelAddToCart(data);
      router.push("/checkout");
    } else {
      router.push("/signin");
    }
  };

  const handleSizeChange = (index: any) => {

    setprize(ProductData.price[index]);
    setIndexofSize(index);
    // setPriceUpdate(!priceUpdate)
    if(quantity){
      setFinalPrice(ProductData.price[index]*quantity)
      cartItems.Finalprice=finalPrice;
    }
  };
  const handelQuantityCahnge=(value:any)=>{
    setQuantity(value)
    
  
      setFinalPrice(ProductData.price[indexofSize]*value)
      cartItems.Finalprice=finalPrice;
    
    
  }
 const handelSizeChange=(value:any)=>{
  setselectedSize(value)
 }
 const handelColorChange=(value:any)=>{
  setselectedcolor(value)
 }
 


  return (
    <div className="pl-6" style={{}}>
      <div
        className="mx-auto flex  gap-12  justify-center items-center"
        style={{ maxWidth: "1200px", margin: "0 auto", background: "white" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-8" style={{}}>
          <div
            className="flex gap-4 md:flex-row flex-col-reverse mt-4 "
            style={{ height: "25rem" }}
          >
            <div className="grid grid-cols-4 gap-4 md:grid-cols-1 mt-12 md:mt-0  h-12">
              {data &&
                ProductData?.images?.map((item: string, index: number) => (
                  <img
                    key={index}
                    src={item}
                    onClick={() => handelPrevImages(item)}
                    style={{
                      objectFit: "cover",
                      height: "4rem",
                      width: "6rem",
                    }}
                  />
                ))}
            </div>

            <div className="" style={{ height: "30rem" }}>
              <img
                src={PrvImage}
                style={{
                  objectFit: "contain",
                  width: "50rem",
                  height: "20rem",
                }}
                alt=""
              />
            </div>
          </div>
          <div className="mt-4 md:mt-0">
            <div>
              <h1 className="font-semibold text-2xl pt-0">
                {ProductData?.title}
              </h1>
            </div>

            <div className="my-4">
              <p className="font-semibold text-2xl">Price : &#8377;{finalPrice>0?finalPrice:prize}</p>
            </div>
            <div>
             

                {Array.isArray(ProductData?.size) && ProductData.size.length > 0 &&(
                <div className="flex">   <p className="mr-4 font-semibold text-xl">Size: </p><select
                    name="size"
                    id="size"
                    style={{ width: "10rem", borderRadius: "4px", padding: "3px" }}
                    onChange={(event) => { handleSizeChange(event.target.selectedIndex); handelSizeChange(event.target.value);} }
                  >
                    {ProductData?.size?.map((Sizes: string, index: number) => (
                      <option key={index} value={Sizes}>
                        {Sizes}
                      </option>
                    ))}
                  </select>
                  </div>

                )}
                
              
            {Array.isArray(ProductData.color) && ProductData.color.length>0 &&(
              <div className="flex mt-4 ">
              <p className="mr-4 font-semibold text-xl"> color:</p>
              <select
                name="color"
                id="color"
                style={{ width: "10rem", borderRadius: "4px", padding: "3px" }}
                onChange={(event)=>handelColorChange(event.target.value)}
              >
                {ProductData?.color?.map((colour: string) => (
                  <option value={colour}>{colour}</option>
                ))}
              </select>
            </div>
            )}
              
            </div>
            <div>
              <div className="py-4">
                Quantity:{" "}
                <input
                  type="number"
                  // disabled={quantity < 1||quantity<0 }
                  style={{
                    border: "1px solid black ",
                    width: "10rem",
                    borderRadius: "4px",
                  }}
                  min="0" 
                  value={quantity}
                  onChange={(e)=>handelQuantityCahnge(e.target.value)}
                />
              </div>
            </div>

            <div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tempore, perspiciatis doloremque fugiat illum nobis facilis est
                odio ad eum dignissimos excepturi, rem asperiores ea neque
                libero voluptas. Repellat, explicabo voluptatum.
              </p>
            </div>
            <div className="">
              <button
                type="button"
                className="w-full py-2 my-4"
                onClick={() => handelAddToCart(ProductData)}
                style={{
                  backgroundColor: "#003366",
                  color: "#fff",
                  borderRadius: "4px",
                }}
              >
                Add To Cart
              </button>
              <button
                type="button"
                className="w-full py-2"
                onClick={() => handelBuyNow(ProductData)}
                style={{
                  backgroundColor: "#003366",
                  color: "#fff",
                  borderRadius: "4px",
                }}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
