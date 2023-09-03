import { Backdrop, IconButton } from '@mui/material';
import React, { useState } from 'react'


const ProductDetails = () => {
const [items,setitems]=useState([])

const handelSetItems=(item:any)=>{
    setitems(item)
}

  return (
    <div style={{background:"white"}}>
         <div className='mx-auto flex flex-wrap gap-12  justify-center items-center' style={{maxWidth:"1200px" , margin:"0 auto",background:"white"}}>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12' style={{}}>
        <div className='flex gap-4' style={{height:"25rem"}}>
        <div className='grid grid-cols-1 gap-2 w-24 '>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9eJggZ3UyFSfUSujBpnlJ7luikAo6ICIjTw&usqp=CAU"  style={{height:"5rem" , width:"5rem"}} />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbx4HQtn0LB1Esa9E2ZR4TlOhrDjr1ztzQ5Q&usqp=CAU" style={{height:"5rem" , width:"5rem"}} />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbx4HQtn0LB1Esa9E2ZR4TlOhrDjr1ztzQ5Q&usqp=CAU"  style={{height:"5rem" , width:"5rem"}} />

        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToym4oheeSK6Btp8SK_7B1XchjTOdzWObuOJk1uJwLU0Bn9SfwNU74hJCUYrDXGvmYCxM&usqp=CAU" style={{height:"5rem" , width:"5rem"}}  />
        </div>
        <div className='' style={{height:"20rem"}}>

         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbx4HQtn0LB1Esa9E2ZR4TlOhrDjr1ztzQ5Q&usqp=CAU" style={{objectFit:"cover", width:"30rem", height:"30rem"}}  alt="" />
        </div>
      </div>
      <div className='mt-4 md:mt-0' >
        <div >
            <h1 className='font-semibold text-2xl pt-0'>Product Name</h1>
        </div>
        
         <div className='my-4'>
            <p className='font-semibold text-2xl'>Price : $9999</p>
         </div>
         <div>
            <div className='flex'>
                <p className='mr-4 font-semibold text-xl' >color: </p>
                
                <select name="color" id="color" style={{backgroundColor:"#ccc",width:"4rem" ,borderRadius:"4px",padding:"3px"}}>
                <option value="REd">red</option>
                <option value="REd">blue</option>
                <option value="REd">white</option>
                </select>
                
            </div>
            <div className='flex mt-4 '>
                <p className='mr-6 font-semibold text-xl' >Size: </p>
                
                <select name="color" id="color" style={{backgroundColor:"#ccc",width:"4rem" ,borderRadius:"4px",padding:"3px"}}>
                <option value="Small">S</option>
                <option value="Medium">M</option>
                <option value="Large">Large</option>
                </select>
                
            </div>
         </div>
         <div>
            <div className='py-4'>
                Quantity: <input type='number' style={{border:"1px solid black ", width:"5rem",borderRadius:"4px" ,backgroundColor:"#ccc"}}/>
            </div>
         </div>
         <div className="flex items-center mt-4 mb-5" >
                  <svg
                    className="w-4 h-2 text-yellow-300 mr-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300 mr-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300 mr-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300 mr-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-gray-200 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                    4.0
                  </span>
         </div>
         <div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, perspiciatis doloremque fugiat illum nobis facilis est odio ad eum dignissimos excepturi, rem asperiores ea neque libero voluptas. Repellat, explicabo voluptatum.</p>
         </div>
         <div className=''>
            <button type='button'className='w-full py-2 my-4'  style={{backgroundColor:"#003366", color:"#fff",borderRadius:"4px"}} >Add To Cart</button>
            <button type='button'className='w-full py-2'  style={{backgroundColor:"#003366", color:"#fff",borderRadius:"4px"}} >Buy Now</button>

         </div>
      </div>
        </div>
     
    
    </div>
    </div>
   
  )
}

export default ProductDetails
