import React, { useState, useEffect } from 'react'
import { Box } from '@mui/system'
import { Divider, Grid, Typography } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import DeleteIcon from '@mui/icons-material/Delete';
import CardMedia from '@mui/material/CardMedia';
import { Link, NavLink } from "react-router-dom";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded';
import '../Navbar/Navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { DLT } from '../../redux/action/action';

export default function Navbarr() {
    const [price, setPrice] = useState(0)

    const getData = useSelector((state) => state.cartreducer.carts)
    // console.log(getData);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const dispatch = useDispatch()
    const dlt = (id) => {
        dispatch(DLT(id))
    }


    const total = () => {
        let price = 0
        {
            getData.map((e) =>
                price = e.price * e.qnty + price
            )
        }
        setPrice(price)
    }
    useEffect(() => {
        total()
    }, [total])
    return (
        <>
            <Box sx={{ flexGrow: 1, bgcolor: '#581845' }}>
                <Grid container >
                    <Grid item xs={6} md={8} className="NavbarFirstGrid">
                        <Link to={'/'} style={{ textDecoration: 'none' }}><Typography variant='h5' color={'white'}>OnLine Cart</Typography></Link>
                    </Grid>
                    <Grid container item xs={6} md={4} className="NavbarSecondGrid">


                        <Avatar id="fade-button"
                            // aria-controls={open ? 'fade-menu' : undefined}
                            // aria-haspopup="true"
                            // aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick} sx={{ bgcolor: '#0051ad', fontSize: '14px', ml: 2 }}>{getData.length}</Avatar>

                    </Grid>
                </Grid>
            </Box>

            <Menu
                // id="fade-menu"
                // MenuListProps={{
                //     'aria-labelledby': 'fade-button',
                // }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
                style={{ display: 'flex', flexDirection: 'row-reverse', justifyContent: 'space-around' }}
            >
                {getData.length ? <div>
                    <MenuItem  >
                        <Box style={{ width: "400px" }}>
                            <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Typography style={{ flexGrow: 2, fontWeight: 'bold' }}>Image</Typography>
                                <Typography style={{ flexGrow: 3, fontWeight: 'bold' }}>Resturant Name</Typography>
                                <Divider component="div" role="presentation"></Divider>
                            </Box>
                            <hr style={{ border: '2px solid black' }}></hr>
                            {getData.map((e) => {

                                return (

                                    <>
                                        <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: '1rem' }} >
                                            <Box  >
                                                <NavLink to={`/cart/${e.id}`} onClick={handleClose} >
                                                    <CardMedia
                                                        component="img"
                                                        alt="green iguana"
                                                        image={e.imgdata}
                                                        style={{ height: '5rem', width: "8rem", borderRadius: '3px' }}
                                                    />
                                                </NavLink>
                                            </Box>
                                            <Box style={{ width: "10rem", }}>
                                                <Typography >{e.rname}</Typography>
                                                <Typography >Price : ₹{e.price}</Typography>
                                                <Typography >Quantity : {e.qnty}</Typography>
                                            </Box>
                                            <Box  >
                                                <Typography marginTop={2} > <DeleteIcon sx={{ color: 'red', cursor: 'pointer', marginBottom: '-4px', textAlign: 'center' }} onClick={() => dlt(e.id)} /></Typography>
                                            </Box>

                                        </Box>
                                        <hr style={{ marginTop: '2rem auto', border: '1px solid #dfdfdf' }}></hr>
                                    </>
                                )
                            })}
                            <Typography >Total : ₹{price}</Typography>

                        </Box>
                    </MenuItem>

                </div> :
                    <MenuItem  >
                        <Box style={{ width: "250px" }}>
                            <Typography style={{ display: 'flex', justifyContent: 'end' }}><DisabledByDefaultRoundedIcon style={{ fontSize: "35px" }} onClick={handleClose} /></Typography>
                            <Box style={{ display: 'flex', justifyContent: 'space-between', marginTop: "10px" }}>
                                <Typography variant='h6'> Your carts is empty</Typography>
                                <Typography><ShoppingCartIcon style={{ fontSize: "40px" }} /></Typography>
                            </Box>
                        </Box>

                    </MenuItem>
                }

            </Menu>

        </>
    )
}
