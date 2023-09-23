import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useUser } from "@/Utlities/UserContext";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';




export default function AddressForm() {
  const { checkoutDetails, setcheckoutDetails, validationErrors } = useUser();

  const handelChange = (event: any) => {
    const { name, value } = event.target;
    setcheckoutDetails((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            onChange={(e) => handelChange(e)}
          />
           {validationErrors?.firstName && (
            <div style={{ color: "red" }}>{validationErrors.firstName}</div>
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            onChange={(e) => handelChange(e)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"

            onChange={(e) => handelChange(e)}
          />
           {validationErrors?.address1 && (
            <div style={{ color: "red" }}>{validationErrors.address1}</div>
          )}
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"

            onChange={(e) => handelChange(e)}
          />
        </Grid>
        {validationErrors?.address2 && (
            <div style={{ color: "red" }}>{validationErrors.address2}</div>
          )}
        <Grid item xs={12}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"

            onChange={(e) => handelChange(e)}
            type="email"
          />
          {validationErrors?.email && (
            <div style={{ color: "red" }}>{validationErrors.email}</div>
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"

            onChange={(e) => handelChange(e)}
          />
           {validationErrors?.city && (
            <div style={{ color: "red" }}>{validationErrors.city}</div>
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"

            onChange={(e) => handelChange(e)}
          />
          {validationErrors?.state && (
            <div style={{ color: "red" }}>{validationErrors.state}</div>
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            inputMode="numeric"
            
            onChange={(e) => handelChange(e)}
            type="number"
          />
          {validationErrors?.zip && (
            <div style={{ color: "red" }}>{validationErrors.zip}</div>
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"

            onChange={(e) => handelChange(e)}
          />
           {validationErrors?.country && (
            <div style={{ color: "red" }}>{validationErrors.country}</div>
          )}
        </Grid>
      </Grid>
     
    </div>
  );
}
