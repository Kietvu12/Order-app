import React, { useContext, useEffect, useState } from 'react'
import "./PlaceOrder.css"
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const PlaceOrder = () => {
  const {getTotalCartAmount, token, food_list, cartItem, url} = useContext(StoreContext)
  const [data, setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })
  const onChangeHandler = (event) => {
    const name = event.target.name
    const value = event.target.value
    setData(data => ({...data, [name]:value}))
  }
  const placeOrder = async(event) =>{
    event.preventDefault()
    let orderItems = []
    food_list.map((item)=>{
      if(cartItem[item._id]>0){
        let itemInfo = item
        itemInfo["quantity"] = cartItem[item._id]
        orderItems.push(itemInfo)
      }
    })
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount()+2,
    }
    let response = await axios.post(url+"api/order/place", orderData, {headers:{token}})
    if(response.data.success){
      const {session_url} = response.data
      console.log(session_url)
      window.location.replace(session_url)
    } else {
      alert("Error")
    }
  }
  const navigate = useNavigate()
  useEffect(()=>{
    if(!token){
      navigate('/cart')
    }
    else if(getTotalCartAmount()===0){
      navigate('/cart')
    }
  })
  return (
    <form onSubmit={placeOrder} className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name' name="firstName" onChange={onChangeHandler} value={data.firstName} id="" />
          <input type="text" placeholder='Last Name' name="lastName" onChange={onChangeHandler} value={data.lastName} id="" />
        </div>
        <input type="email" name="email" onChange={onChangeHandler} value={data.email} placeholder='Your email address' />
        <input type="text" name="street" onChange={onChangeHandler} value={data.street} placeholder='Street' id="" />
        <div className="multi-fields">
          <input type="text" name="city" onChange={onChangeHandler} value={data.city} placeholder='City' />
          <input type="text" placeholder='State' name="state" onChange={onChangeHandler} value={data.state} />
        </div>
        <div className="multi-fields">
          <input type="text" name="zipcode" onChange={onChangeHandler} value={data.zipcode} placeholder='Zip Code' />
          <input type="text" name="country" onChange={onChangeHandler} value={data.country} placeholder='Country' id="" />
        </div>
        <input type="text" name="phone" onChange={onChangeHandler} value={data.phone} placeholder='Phone Number' />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-detail">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-detail">
              <p>Delivery fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-detail">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button type="submit">Proceed to payment</button>
        </div>
      </div>
    </form>
  )
}
export default PlaceOrder