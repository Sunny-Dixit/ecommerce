import { Button, Grid, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../../State/Auth/Action'




const LoginForm = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    
    



    const handleSubmit=(event)=>{
        event.preventDefault()

        const data=new FormData(event.currentTarget);

        const userData ={

            email:data.get("email"),
            password:data.get("password")
        }
        dispatch(login(userData))
        console.log("userData",userData)

    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>

                    <Grid item xs={12} >
                        <TextField
                         required
                         id='eamil'
                         name='email'
                         label="Email"
                         fullWidth
                         autoComplete='email'
                         />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                         required
                         id='password'
                         name='password'
                         label="Password"
                         type='password'
                         fullWidth
                         autoComplete='password'
                         />
                    </Grid>
                    <Grid item xs={12} >
                        <Button className='bg-[#9155FD] w-full'
                        type='submit'
                        variant='contained'
                        size='large'
                        sx={{padding:"0.8rem 0"}}
                        >
                            Login
                        </Button>
                    </Grid>





                </Grid>

        </form>
        <div className='flex justify-center flex-col items-center'> 
            <div className='py-3 flex item-center'>
                <p>if you don't have account?</p>
                <Button onClick={()=>navigate("/register")} className='ml-5' size='small'>Register</Button>
            </div>
        </div>
    </div>

  )
}

export default LoginForm