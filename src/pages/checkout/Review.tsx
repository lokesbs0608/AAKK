import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { useCart } from '../../Utlities/CartContext';
import { useEffect, useState } from 'react';


export default function Review() {
 

  const {cartItems,TotalPrice}:any =useCart();
  const [total,settotal] = useState();

  useEffect(() => {
  settotal(TotalPrice);
  }, [TotalPrice])
console.log(TotalPrice)
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {cartItems.map((product:any) => (
          <ListItem key={product.id} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.title}  />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            ${total}
          </Typography>
        </ListItem>
      </List>

    </div>
  );
}