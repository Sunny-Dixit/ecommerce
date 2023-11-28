import React, { useEffect } from 'react'
import AddressCard from '../AddressCard/AddressCard'
import CartItem from '../Cart/CartItem'
import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderById } from '../../../State/Order/Action'
import { useLocation } from 'react-router-dom'
import { store } from '../../../State/store'
import { createPayment } from '../../../State/Payment/Action'

const OrderSummary = () => {
  const dispatch=useDispatch();
  const location=useLocation();
  const searchParams=new URLSearchParams(location.search);
  const orderId=searchParams.get("order_id");
  const {order} =useSelector(store=>store);


  const jwt = localStorage.getItem("jwt");

  console.log("orderId ", orderId)



 useEffect(()=>{
    dispatch(getOrderById(orderId))
  },dispatch,[orderId])
  console.log('Order:', order);


  
    const handleCreatePayment=()=>{
      const data={orderId:orderId,jwt}
      dispatch(createPayment(data))
    }
    
  
 /* return (
    <div>
      <div className='p-5 shadow-lg rounded-md border'>
        <AddressCard  address={order.order?.shippingAddress
} />

      </div>

      <div>
        <div className='lg:grid grid-cols-3 relative'>
            <div className='lg:col-span-2 lg:px-5 bg-white'>
            {order.order?.orderItems.map((item)=><CartItem item={item}/>)}
            </div>
            <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
            <div className='border p-5 bg-white shadow-lg rounded-md'>
                <p className="font-bold opacity-60 pb-4">PRICE DETAILS</p>
                  <hr/>
                  <div className='space-y-3 font-semibold'>
                    <div className='flex justify-between pt-3 text-black'>
                    <span>Price</span>
                     <span>₹{order.order?.totalPrice}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Discount</span>
                        <span className="text-green-700">-₹407</span>
                     </div>
                    <div className="flex justify-between">
                        <span>Delivery Charges</span>
                        <span className="text-green-700">Free</span>
                    </div>
                    <hr />
                    <div className="flex justify-between font-bold text-lg">
                         <span>Total Amount</span>
                         <span className="text-green-700">₹5070</span>
                     </div>

                  </div>
                  
          <Button
           // onClick={() => navigate("/checkout?step=2")}
            variant="contained"
            type="submit"
            sx={{ padding: ".8rem 2rem", marginTop: "2rem", width: "100%" }}
            onClick={handleCheckOut}
          >
            Check Out
          </Button>
            </div>

        </div>
        </div>
        
        
    </div>
    </div>
  )
}

export default OrderSummary*/
return (

  <div className="space-y-5">
      <div className="p-5 shadow-lg rounded-md border ">
          <AddressCard address={order.order?.shippingAddress}/>
      </div>
    <div className="lg:grid grid-cols-3 relative justify-between">
      <div className="lg:col-span-2 ">
        <div className=" space-y-3">
          {order.order?.orderItems.map((item) => (
              

              <CartItem item={item} showButton={false}/>

  
          ))}
        </div>
      </div>


      <div className="sticky top-0 h-[100vh] mt-5 lg:mt-0 ml-5">
        <div className="border p-5 bg-white shadow-lg rounded-md">
          <p className="font-bold opacity-60 pb-4">PRICE DETAILS</p>
          <hr />

          <div className="space-y-3 font-semibold">
            <div className="flex justify-between pt-3 text-black ">
              <span>Price ({order.order?.totalItem} item)</span>
              <span>₹{order.order?.totalPrice}</span>
            </div>
            <div className="flex justify-between">
              <span>Discount</span>
              <span className="text-green-700">-₹{order.order?.discounte}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Charges</span>
              <span className="text-green-700">Free</span>
            </div>
            <hr />
            <div className="flex justify-between font-bold text-lg">
              <span>Total Amount</span>
              <span className="text-green-700">₹{order.order?.totalDiscountedPrice}</span>
            </div>
          </div>

          <Button
            onClick={handleCreatePayment}
            variant="contained"
            type="submit"
            sx={{ padding: ".8rem 2rem", marginTop: "2rem", width: "100%" }}
          >
            Payment
          </Button>
        </div>
      </div>
    </div>
  </div>
);
};

export default OrderSummary;


