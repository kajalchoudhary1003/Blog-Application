import { Box, TextField, Button } from '@mui/material';
import React, { useState } from 'react' ;
import p1 from '../../images/p1.png';
import { signupUser } from '../../../../server/controller/user-controller';

const Login = () => {

  const signupValues ={
    name:'',
    username:'',
    password:''
  }

  const [account, toggleAccount]=useState('login');
  const [signup, setSignup] =useState(signupValues);

  const toggleSignup = () =>{
    account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
  }

  const InputChange = (e) => {
   setSignup(...signup, {[e.target.name]:e.target.value});
  }

  const signupUser = () => {
    
  }
  return (
    <>
    {/* condition for login and signup page */}
    {account === 'login' ? 
    // login page
    <Box class="flex flex-col mt-10 items-center shadow-2xl p-8 h-fit rounded-xl">
    <img src={p1} alt="logo" class="w-60" />
    <TextField
      sx={{ mt: 3, width: 250 }}
      required
      id="outlined-required"
      label="Username" />
    <TextField
      sx={{ mt: 3, width: 250 }}
      required
      id="outlined-required"
      type='password'
      label="Password" />
    <Button
      sx={{ mt: 3, width: 100, bgcolor: '#4FC0D0', ":hover": { bgcolor: '#FF55BB' } }}
      disabled={false}
      size="medium"
      variant="contained"
    >Login
    </Button>
    <p className='mt-2'>OR</p>
    <Button disabled={false} variant="outlined"
     onClick={()=>{toggleSignup()}}
      sx={{ mt: 2, width: 200, ":hover": { boxShadow: 2 } }}>
      Create an account</Button>
  </Box>
    : 
    // signup page
    <Box class="flex flex-col mt-10 items-center shadow-2xl p-8 h-fit rounded-xl">
      <img src={p1} alt="logo" class="w-60" />
      <TextField
        sx={{ mt: 3, width: 250 }}
        required
        id="outlined-required"
        label="Name"
        name='name'
        onChange={(e) => InputChange(e)} />
      <TextField
        sx={{ mt: 3, width: 250 }}
        required
        id="outlined-required"
        label="Username"
        name='username'
        onChange={(e) => InputChange(e)} />
      <TextField
        sx={{ mt: 3, width: 250 }}
        required
        id="outlined-required"
        type='password'
        label="Password"
        name='password'
        onChange={(e) => InputChange(e)} />
      <Button
        sx={{ mt: 3, width: 100, bgcolor: '#4FC0D0', ":hover": { bgcolor: '#FF55BB' } }}
        disabled={false}
        size="medium"
        variant="contained"
        onClick={()=> signupUser()}
      >Sign Up
      </Button>
      <p className='mt-2'>OR</p>
      <Button disabled={false} variant="outlined"
      onClick={() => {toggleSignup()}}
        sx={{ mt: 2, width: 250, ":hover": { boxShadow: 2 } }}>
        Already have an account</Button>
    </Box>
    }
    
    

    
    </>

  )
}

export default Login
