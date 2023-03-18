import { Box } from '@mui/system';
import React, { useState, } from 'react'
import Cardsdata from '../../GlobleData/CardData';
import ProductItem from './ProductItem';
export default function Product() {
  const [data] = useState(Cardsdata)
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", flexWrap: "wrap" }}>
        {
          data.map((Item, i) => {
            return <ProductItem name={Item.rname} price={Item.price} image={Item.imgdata} productStatus={Item.productStatus} id={Item.id} Item={Item} key={Item.id} />
          })
        }
      </Box>
    </>

  );
}