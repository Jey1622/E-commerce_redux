import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmptyCart from "../assets/images/emptycart2.png";
import { FaTrash, FaTrashAlt } from "react-icons/fa";
import Model from "../components/Model";
import ChangeAddress from "../components/ChangeAddress";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [address, setAddress] = useState("main street,123");
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [email,setEmail]=useState("")
  const dispatch = useDispatch();
  const navigate=useNavigate()

  const handleSubmit=async (e)=>{
    try {
      const responce=await axios.post('http://localhost:5000/api/v1/order',{
        product:cart.products,
        qty:cart.totalQuantity,
        email:email
      })
      navigate('/checkout')
    } catch (error) {
      console.log(error.response.data.message)
    }
  }
  const handleChange=async (e)=>{
   setEmail(e.target.value)
   console.log(e.target.value)
  }

  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      {cart.products.length > 0 ? (
        <div>
          <h3 className="text-2xl font-semibold mb-4">Shopping Cart</h3>
          <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
            <div className="md:w-2/3">
              <div className="flex justify-between border-b items-center mb-4  text-xs font-bold">
                <p>Products</p>
                <div className="flex space-x-8">
                  <p>price</p>
                  <p>Quantity</p>
                  <p>SubTotal</p>
                  <p>remove</p>
                </div>
              </div>
              <div>
                {cart.products.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center justify-between p-3 border-b"
                  >
                    <div className="md:flex items-center space-x-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 object-contain rounded"
                      />
                      <div className="flex-1 ml-4">
                        <h3 className="text-lg font-semibold">
                          {product.name}
                        </h3>
                      </div>
                    </div>
                    <div className="flex space-x-12 items-center">
                      <p>₹{product.price}</p>
                      <div className="flex items-center justify-center border">
                        <button
                          className="text-x1 font-bold px-1.5 border-r"
                          onClick={() => dispatch(decreaseQuantity(product.id))}
                        >
                          -
                        </button>
                        <p className="text-xl px-2">{product.quantity}</p>
                        <button
                          className="text-xl px-1 border-1"
                          onClick={() => dispatch(increaseQuantity(product.id))}
                        >
                          +
                        </button>
                      </div>
                      <p>₹{(product.quantity * product.price).toFixed(2)}</p>
                      <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => dispatch(removeFromCart(product.id))}
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:w-1/3 bg-white p-6 rounded-ld shadow-md border">
              <h3 className="text-sm font-semibold mb-5 ">CART TOTAL</h3>
              <div className="flex justify-between mb-5 border-b pb-1">
                <span className="text-sm">total items:</span>
                <span>{cart.totalQuantity}</span>
              </div>
              <div className="mb-4 border-b pb-2">
                <p>Shipping:</p>
                <p className="ml-2">
                  Shipping to{""}
                  <span className="text-xs font-bold">{address}</span>
                </p>
                <button
                  className="text-blue-500 hover:underline mt-1 ml-2"
                  onClick={() => setIsModelOpen(true)}
                >
                  change Address
                </button>
                <p className="ml-2">
                  Email Address :
                  <input placeholder="Enter a email adress" value={email} onChange={handleChange}/>
                  <span className="text-xs font-bold">{}</span>
                </p>
              </div>
              <div className="flex justify-between mb-4">
                <span>total Price:</span>
                <span>{cart.totalPrice.toFixed(2)}</span>
              </div>
              <button className="w-full bg-red-600 text-white py-2 hover:bg-red-800"
              onClick={()=>handleSubmit()}>
                Proceed to checkout
              </button>
            </div>
          </div>
          <Model isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
            <ChangeAddress
              setAddress={setAddress}
              isModelOpen={setIsModelOpen}
            />
          </Model>
        </div>
      ) : (
        <div className="flex justify-center">
          <img src={EmptyCart} alt="" className="h-96" />
        </div>
      )}
    </div>
  );
};

export default Cart;
