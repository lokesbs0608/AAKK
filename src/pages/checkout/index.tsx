import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import AddressForm from "./addressform";
import PaymentForm from "./PaymentForm";
import Review from "./Review";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useUser } from "@/Utlities/UserContext";
import { useCart } from "../../Utlities/CartContext/index";
import {object, z} from 'zod'



function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const steps = ["Shipping address", "Review your order"];

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <Review />;
    default:
      throw new Error("Unknown step");
  }
}

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const { checkoutDetails, setValidationErrors,validationErrors} = useUser();
  const [userData, setuserData]: any = useState();
  const router = useRouter();
  const { cartItems ,TotalPrice }: any = useCart();
  const [mailAlert,setMailAlert]=useState<number>();

 

  useEffect(() => {
    setuserData(checkoutDetails);
  }, [checkoutDetails]);


  // -----------------------------to send email to customer --------------------------------------------------------------------
  function renderCartItemsToHTML(cartItems: any) {
    if (!cartItems || cartItems.length === 0) {
      return ""; // Return an empty string or handle the case when cartItems is empty
    }
    return cartItems
      .map(
        (product: any) =>
          `<div className="flex  items-start ">
       <div>
         <h2 className="font-bold"><b>Product Name:</b>${product.title}</h2>
         <p><span className="font-semibold"><b>Color:</b>></span>(${product.selectedcolor}) </p>
         <p><span className="font-semibold"><b>Size:</b></span>(${product.selectedSize? product.selectedSize: product.size && product.size.length > 0? product.size[0]: ""})</p>
         <p><span className="font-semibold">Quantity: </span>${product.quantity}</p>
       </div><div className="flex font-bold"><p>Price: &#8377;${product.Finalprice ? product.Finalprice : ""}</p></div>
     </div>`
      ).join("");
  }
  const messageHTML = renderCartItemsToHTML(cartItems);
  
  const messageText = messageHTML.toString().replace(/<\/?[^>]+(>|$)/g, "");
  const sendEmail = (e: any) => {
    e.preventDefault();
    setMailAlert((prev:any)=>prev+1)
    const toEmail = userData ? userData.email : "fallback@example.com";
    const FirstName=userData?.firstName;
    const LastName=userData?.lastName;
    const TotalToMail=TotalPrice;
    const templateParams: any = {
      to_email: toEmail,
      from_name: `${FirstName} ${LastName}`,
      message: messageText,
      totalAmount:TotalToMail
    };

    emailjs
      .send(
        "service_x1emw59",
        "template_y0id0ti",
        templateParams,
        "XvO6o578uYooKM_Gp"
      )
      .then((result) => {
        console.log(result.text);
        alert('Mail send to Given  Account ')
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  const handelMailalert=()=>{
    alert('Already Mail Sent')
  }

  // -----------------------------to send email to customer end here --------------------------------------------------------------------
  const CheckoutSchema = z.object({
    firstName: z.string().min(2, { message: 'Must be at least 2 or more characters long' }),
    lastName: z.string().optional(),
    address1: z.string().min(5, { message: 'Must be at least 10 or more characters long' }),
    address2: z.string().optional(),
    email: z.string().email({ message: 'Enter Valid Email address' }),
    city:z.string().min(2, { message: 'Must be at least 2 or more characters long' }),
    state:z.string().min(2, { message: 'Must be at least 2 or more characters long' }),
    zip: z.string().min(6, { message: 'Must be at least 6 or more characters long' }),
    country:z.string().min(2, { message: 'Must be at least 2 or more characters long' }),


    // Add validation rules for other fields here...
  });
  const handleNext = () => {
    let zodErrors={}
    const validationResult = CheckoutSchema.safeParse(checkoutDetails);
    if (validationResult.success) {
      // Continue to the next page, no errors
      setValidationErrors(null);
      setActiveStep(activeStep + 1);
    } else {
      
         validationResult.error.issues.forEach((issue:any) => {
          zodErrors={...zodErrors, [issue.path[0]] : issue.message};
      });
      
      setValidationErrors(zodErrors);
      console.log(zodErrors.hasOwnProperty('undefined'))
      if(zodErrors.hasOwnProperty('undefined')){
          alert("pls Fill the form below")
      }
    }
  };
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handelBack = () => {
    router.push("/cart");
  };
  return (
    <div>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <div>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
            </div>
          ) : (
            <div>
              {getStepContent(activeStep)}
              <Box
                sx={{
                  display: "flex  ",
                  justifyContent: "space-between",
                  alignContent: "center",
                }}
              >
                {activeStep !== 0 ? (
                  <Button
                    className="mt-10"
                    onClick={handleBack}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    Back
                  </Button>
                ) : (
                  <Button
                    className="mt-10"
                    onClick={handelBack}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    Back
                  </Button>
                )}
                {activeStep === steps.length - 1 ? (
                  <button
                    className="text-center px-4 py-2 mt-12 "
                    onClick={mailAlert >=1?handelMailalert:(e) => sendEmail(e) }
                    style={{ backgroundColor: "#003366", color: "#fff" }}
                  >
                    Place order
                  </button>
                ) : (
                  <button
                    className="text-center px-4 py-2 mt-10 "
                    onClick={handleNext}
                    style={{ backgroundColor: "#003366", color: "#fff" }}
                  >
                    Next
                  </button>
                )}
              </Box>
            </div>
          )}
        </Paper>
      </Container>
    </div>
  );
}
