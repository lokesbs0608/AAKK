import { Backdrop, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useCart } from "../../Utlities/CartContext/index";
import { useUser } from "@/Utlities/UserContext";
import Image from "next/image";
const intial = {
  title: "",
  price: "",
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

  useEffect(() => {
    if (data) {
        setProductData((prev) => ({ ...prev, ...JSON.parse(data) }));
        console.log(ProductData,'>>>>>>>>>')
      
    } else {
      return;
    }
  }, []);
  useEffect(()=>{
    setPrvImage(ProductData?.images[0]);
  },[ProductData])

  const handelPrevImages = (path: string) => {
    setPrvImage(path);
  };
  const handelAddToCart = (item: any) => {
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
  return (
    <div style={{}}>
      <div
        className="mx-auto flex  gap-12  justify-center items-center"
        style={{ maxWidth: "1200px", margin: "0 auto", background: "white" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-8" style={{}}>
          <div
            className="flex gap-4 md:flex-row flex-col-reverse mt-4 "
            style={{ height: "25rem" }}
          >
            <div className="grid grid-cols-4 md:grid-cols-1 mt-12 md:mt-0 ">
              {data &&
                ProductData?.images?.map((item: string, index: number) => (
                  <img
                    key={index}
                    src={item}
                    onClick={() => handelPrevImages(item)}
                    style={{
                      objectFit: "contain",
                      height: "5rem",
                      width: "5rem",
                    }}
                  />
                ))}
            </div>

            <div className="" style={{ height: "20rem" }}>
              <img
                src={PrvImage}
                style={{
                  objectFit: "contain",
                  width: "40rem",
                  height: "30rem",
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
              <p className="font-semibold text-2xl">
                Price : {ProductData?.price}
              </p>
            </div>
            <div>
              <div className="flex">
                <p className="mr-4 font-semibold text-xl">color: </p>

                <select
                  name="color"
                  id="colour"
                  style={{ width: "5rem", borderRadius: "4px", padding: "3px" }}
                >
                  {ProductData?.color?.map((Colour: string) => (
                    <option value={Colour}>{Colour}</option>
                  ))}
                </select>
              </div>
              <div className="flex mt-4 ">
                <p className="mr-6 font-semibold text-xl">Size: </p>
                <select
                  name="color"
                  id="color"
                  style={{ width: "5rem", borderRadius: "4px", padding: "3px" }}
                >
                  {ProductData?.size?.map((sizes: string) => (
                    <option value={sizes}>{sizes}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <div className="py-4">
                Quantity:{" "}
                <input
                  type="number"
                  value=""
                  style={{
                    border: "1px solid black ",
                    width: "5rem",
                    borderRadius: "4px",
                  }}
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
