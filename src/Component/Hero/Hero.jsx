import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Button from '@mui/material/Button';

export default function Hero() {
  return (
<Box sx={{bgcolor:"#d3d8df	",paddingTop:'7rem',textAlign:'center',paddingBottom:'7rem',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
<Typography variant='h4' color={'#581845'} paddingBottom='2rem' fontWeight='bold'>Amazing Delicious Food.. So Order Now!!</Typography>
<Typography variant='h5' fontWeight='600'>Enjoy Online Food with Online Cart</Typography>
<Button variant='contained'  sx={{ marginTop:'2rem'}}>Shop Now</Button>
</Box>
  )
}
