import * as React from 'react';
import Rating from '@mui/material/Rating';

// function to ratings
export default function BasicRating({ value }) {

  return (
    
      <Rating
        name="simple-controlled"
        value={value?value:0}
        
/>
  )}