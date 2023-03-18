import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DLT, Add, REMOVE } from '../../redux/action/action';

export default function CartDetails() {
  const dispatch = useDispatch()
  const history = useNavigate()
  const [data, setData] = useState([])
  console.log(data);

  const { id } = useParams();
  console.log(id);

  const getData = useSelector((state) => state.cartreducer.carts)
  // console.log(getData);


  const campare = () => {
    let camparedata = getData.filter((e) => {
      return e.id == id
    })
    setData(camparedata);
  }

  
  const send = (e) => {
    dispatch(Add(e))
  }

  const remove = (e) => {
    dispatch(REMOVE(e))
  }


  const dlt = (id) => {
    dispatch(DLT(id))
    history('/')
  }
  
  useEffect(() => {
    campare()
  }, [id,send])

  return (
    <>
      {data.map((elem) => {
        return (
          <>
            <Typography variant='h4' fontWeight={'bold'} marginTop={'20px'} textAlign={'center'}>Items Details Page</Typography>
            <Card sx={{ maxWidth: 600, border: '1px solid #581845', margin: '2rem auto', padding: '3px', position: 'relative' }}>
              <CardMedia
                component="img"
                alt="green iguana"
                image={elem.imgdata}
                style={{ height: '14rem', width: "20rem", margin: 'auto', borderRadius: '5px' }}
              />
              <CardContent>
                <Box sx={{ border: '1px solid #581845', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', paddingTop: '20px', paddingBottom: '20px' }}>
                  <Box sx={{ width: '40%' }}>

                    <Typography><strong>Restaurant :</strong>  {elem.rname}</Typography>
                    <Typography marginTop={2}><strong>Price :</strong> ₹ {elem.price}</Typography>
                    <Typography marginTop={2}><strong>Dishes :</strong> {elem.address}</Typography>
                    <Typography marginTop={2}><strong>Total :</strong>  ₹ {elem.price * elem.qnty}</Typography>
                    <Box sx={{ bgcolor: '#afacac', marginTop: 5, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '200px' }}>
                      <Button ><AddIcon onClick={() => send(elem)}/></Button>
                      <Typography margin={'auto'} sx={{ fontWeight: 'bold', }} >{elem.qnty}</Typography>
                      <Button onClick={elem.qnty <= 1 ? () => dlt(elem.id) : () => remove(elem)}><RemoveIcon /></Button>
                    </Box>
                  </Box>
                  <Box sx={{ width: '40%' }}>
                    <Typography marginTop={2} ><strong>Rating : </strong><span style={{ backgroundColor: 'green', padding: '3px', borderRadius: '3px', color: 'white' }}> {elem.rating} ★</span></Typography>
                    <Typography marginTop={2}><strong>Order Review :</strong>{elem.somedata}</Typography>
                    <Typography marginTop={2} ><strong>Remove :</strong> <DeleteIcon sx={{ color: 'red', cursor: 'pointer', marginBottom: '-4px' }} onClick={() => dlt(elem.id)} /></Typography>

                  </Box>
                </Box>
              </CardContent>

            </Card>

          </>

        )
      })}


    </>

  )
}



