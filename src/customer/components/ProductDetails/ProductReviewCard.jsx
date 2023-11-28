import React from "react";
import { Avatar } from "@mui/material";
import { Rating, Box, Typography, Grid } from "@mui/material";

const ProductReviewCard = ({item}) => {
  
  return (
    <div className="">
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155FD" }}
              
              src=""
            >
              R
            </Avatar>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <div className="space-y-2">
            <div className="">
              <p className="font-semibold text-lg">Sunny</p>
              <p className="opacity-70">April 5, 2023</p>
            </div>
        </div>
            <Rating value={4.5} name="half-rating" precision={0.5}/>
            <p>nice product,i love this t-shirt</p>


        </Grid>
      </Grid>
      <div className="col-span-1 flex"></div>
    </div>
  );
};

export default ProductReviewCard;
