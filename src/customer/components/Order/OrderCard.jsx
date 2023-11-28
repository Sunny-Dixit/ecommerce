import { Grid } from '@mui/material'
import React from 'react'

import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from 'react-router-dom';

export const OrderCard = () => {
    const navigate=useNavigate();
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className='p-5 shadow-lg hover:shadow-2xl border'>
        <Grid spacing={2} container sx={{ justifyContent: "space-between" }}>
            <Grid item xs={6}>
                <div className='flex cursor-pointer'>
                    <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://rukminim1.flixcart.com/image/612/612/xif0q/dress/v/a/v/xxl-drdrmsk-07-rudraaksha-original-imaftfczy2we9gq3-bb.jpeg?q=70" alt="" />
                    <div className='m1-5 space-y-2'>
                        <p className=''>Men Slim Mid Rise Black Jeans</p>
                        <p className='opacity-50 text-xs font-semibold space-x-5'>Size:M</p>
                        <p className='opacity-50 text-xs font-semibold space-x-5'>Color:Black</p>

                    </div>
                </div>

            </Grid>
            <Grid item xs={2}>
            <p>₹1999</p>

            </Grid>
            <Grid item xs={4}>
            {true && <div>
                <p className="space-y-2 font-semibold">
            <AdjustIcon
                sx={{ width: "15px", height: "15px" }}
                className="text-green-600 p-0 mr-2 text-sm"
              />
                <span>
                    Deliver On March 03
                </span>

            </p>
            <p className='texts-xs'>
                Your Item Has Been Delivered
            </p>

            </div>}
            {false && <p>
                <span>
                    Expected On March 03
                </span>
            </p>}

            </Grid>

        </Grid>
    </div>
  )
}
