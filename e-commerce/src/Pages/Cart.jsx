import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import { updateOrders } from "../Store";

const Cart = () => {

  const data = useSelector((state) => {
    return state.user;
  }) 

  const [orders, setOrders] = useState({
    customerId: data.Customer.id,
    orderId: ""
  })

  const cartItems = data.ProductsData.filter((product) =>
    data.Customer.Cart.includes(product.key)
  )

  const dispatch = useDispatch();

  return (
    <div className="container mx-auto p-5 my-10">
      <div className="mb-3">
        <span className="text-3xl font-bold">Shopping Cart</span>
      </div>
      {data.Customer.Type === "customer" ? (
        cartItems.length > 0 ? (
          cartItems.map((product) => (
            <div key={product.key}>
              <hr className="text-[#00000020] my-5" />
              <div className="grid-cols-12 grid items-center">
                <div className="xl:col-span-3 lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12">
                  <img src={product.URL} alt="not found..." className="w-4/5 mx-auto rounded-3xl" />
                </div>
                <div className="xl:col-span-9 m-3 lg:col-span-9 md:col-span-8 sm:col-span-6 col-span-12">
                  <span className="text-2xl font-bold">{product.ProductName}</span><br />
                  <span className="text-xl font-medium text-[#00000080]">{product.Data}</span>
                  <br /><br /><span className="text-green-700 font-medium">In Stock</span>
                  <img src="../Images/fullfilled-tag.png" alt="not found..." className="mb-1 h-6" />
                  <input type="checkbox" />
                  <span> This will be a gift</span>
                  <span className="text-blue-500  text-sm"> Learn More <br /> 7 days Retunable</span>
                  <div className="flex items-center">
                    <div className="w-25 mr-3 font-medium items-center px-3 h-8 rounded-4xl flex justify-between mt-2 border-4 border-[#007BFF]">
                      <span className="pb-1 text-xl cursor-context-menu">-</span>
                      <span className="text-md">1</span>
                      <span className="text-xl pb-1 cursor-context-menu">+</span>
                    </div>
                    <div className="mt-2">
                      <span className="text-blue-500 text-sm">Delete</span>
                      <span className="text-[#00000050] mx-2">|</span>
                      <span className="text-blue-500  text-sm">Save for Later</span>
                      <span className="text-[#00000050] mx-2">|</span>
                      <span className="text-blue-500  text-sm">See More Like This</span>
                      <span className="text-[#00000050] mx-2">|</span>
                      <span className="text-blue-500  text-sm">Share</span>
                    </div>
                  </div>
                  <div className="flex gap-3 mt-5">
                    <Link to={`/view-product/${product.key}`}>
                    <button className="h-10 border-2 px-5 rounded-lg font-bold text-[#FF6F00] border-[#FF6F00]">View Product</button>
                    </Link>
                    <button onMouseEnter={() => setOrders({ ...orders, orderId: product.key })} onClick={() => {
                      dispatch(updateOrders(orders))
                    }} className="h-10 px-5 bg-[#FF6F00] rounded-lg text-white font-bold">Order Now</button>
                  </div>
                </div>
              </div>
              <hr className="text-[#00000020] my-5" />
              <h2 className="font-bold text-xl text-right">Shopping Cart : {product.Cost}/-</h2>
            </div>
          ))
        ) : (
          <div className="text-center my-8">
            <img src="../Images/cart-shadow.jpg" className="mx-auto" alt="not found..." />
            <h2 className="font-medium text-xl text-[#00000080]">Your cart is empty</h2>
            <div className="flex mt-5 justify-center gap-3">
              <Link to="/">
                <button className="h-10 rounded-lg font-bold text-white px-5 bg-[#FF6F00]">Go Back to Home</button>
              </Link>
            </div>
          </div>
        )
      ) : (
        <div>
          <hr className="text-[#00000020] my-8" />
          <div className="text-center mt-10">
            <img src="../Images/cart-shadow.jpg" className="mx-auto" alt="not found..." />
            <h2 className="font-medium text-xl text-[#00000080]">You have to login or register for getting cart feature</h2>
            <div className="flex mt-5 justify-center gap-3">
              <Link to="/">
                <button className="h-10 rounded-lg font-bold text-white px-5 bg-[#FF6F00]">Go Back to Home</button>
              </Link>
            </div>
          </div>
        </div>
      )
      }
    </div >
  )
}

export default Cart;
