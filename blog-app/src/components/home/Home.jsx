import React from 'react';
import Banner from '../banner/Banner';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

// we need to install npm i react-router-dom so that we can change the webpage according to the url
const Home = () => {
  return (
    <>
    <Banner />
    <>
    <Box sx={{ flexGrow: 1 }}>
    <Divider textAlign="left" variant='fullWidth' sx={{mt:2, color:"black", mb:2}}>
      <span className='uppercase font-bold text-3xl tracking-wide text-dark-green-banner'>Posts</span>
      </Divider>
      <Grid container spacing={2}>
        
      </Grid>
    </Box>
    </>
    </>
  )
}

export default Home
