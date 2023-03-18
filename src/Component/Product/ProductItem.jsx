import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { Add } from '../../redux/action/action';
export default function ProductItem({ name, price, image, productStatus, id,Item }) {
  const dispatch=useDispatch()
  const send=(e)=>{
dispatch(Add(e))
  }
  
  return (
    <Card sx={{ maxWidth: 300, border: '1px solid #581845', margin: '2rem', position: 'relative' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        image={image}
        style={{ height: '14rem', width: "22rem" }}
      />
      {productStatus === 'new' ? <Typography gutterBottom variant="h6" color={'white'} borderRadius={'0.2rem'} position={'absolute'} top={'0'} right={'0'} bgcolor={'green'} marginTop={'0.3rem'} paddingLeft={'0.9rem'} paddingRight={'0.9rem'} component="div">new</Typography> : ''}
      {productStatus === 'hot' ? <Typography gutterBottom variant="h6" color={'white'} borderRadius={'0.2rem'} position={'absolute'} top={'0'} right={'0'} bgcolor={'red'} marginTop={'0.3rem'} paddingLeft={'0.9rem'} paddingRight={'0.9rem'} component="div">hot</Typography> : ''}

      <CardContent>
        <Typography gutterBottom variant="h5" textAlign={'center'} fontWeight={'bold'} component="div">
          {name.toUpperCase()}
        </Typography>
        <Typography variant="h6" textAlign={'center'} color="text.secondary">
          ${price}.00
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="medium" variant='contained' fullWidth  onClick={()=>send(Item)}>ADD TO CART</Button>
      </CardActions>
    </Card>)
}
