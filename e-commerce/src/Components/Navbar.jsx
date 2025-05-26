import { useEffect, useState } from "react";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { changeLogin, fetchUsers, addUser, getLoginData, guestLogin, fetchProducts } from "../Store";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [loginData, setLoginData] = useState({
    Email: "",
    Password: ""
  })

  const [registerData, setRegisterData] = useState({
    Password: "",
    Phone: "",
    Email: "",
    Type: "customer",
    Cart: [],
    Orders: []
  })
  const [conPassword, setConPassword] = useState("");

  const data = useSelector(state => {
    return state.user;
  })

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchProducts());
  }, [dispatch])

  return (
    <>
      <input type="checkbox" id="sidebar-move" className="hidden" />
      <nav className='shadow-lg shadow-[#00000030] z-40 fixed w-full'>
        <div className='first-navbar flex justify-center text-white border-b border-[#E0E0E0] border-solid bg-[#007BFF]'>
          <div className='container h-14 flex items-center justify-between'>
            <Link to={"/"}>
              <img src=".././Images/main-logo.png" className="h-12" alt="not found..." />
            </Link>
            <div className='flex w-full nav-search justify-center items-center gap-x-0.5'>
              <input type="text" placeholder="Search here..." className="nav-search bg-white w-9/12 h-8 rounded-l-sm placeholder:text-[#2c2c2c80] outline-0 text-[#2c2c2c]" />
              <button className="h-8 w-20 bg-[#FF6F00] rounded-r-sm text-white font-medium">Search</button>
            </div>
            <div className='flex nav-buttons gap-x-6 items-center text-lg font-bold'>
              <div>
                <label htmlFor="login-form" className="account-link h-0 flex text-xl relative font-extrabold">
                  {
                    data.Customer.AccStatus ? <><i className="bi bi-person-fill mr-1"></i> {data.Customer.Email.slice(0, 6)}...</> : <>Account</>
                  }
                </label><br />
              </div>
              <div>
                <Link to={"/shopping-cart"}>
                  <span className="text-xl top-1 cursor-context-menu relative font-extrabold">Cart</span><br />
                  <span className="text-md bottom-1.5 relative">&Shop</span>
                </Link>
              </div>
              <div>
                <Link to={"/shopping-orders"}>
                  <span className="text-xl top-1 relative font-extrabold">Orders</span><br />
                  <span className="text-md bottom-1.5 relative">&List</span>
                </Link>
              </div>
              <label className="hamburger text-4xl relative items-center rounded-md h-8 w-10" htmlFor="sidebar-move"><i className="bi bi-list relative bottom-1"></i></label>
            </div>
          </div>
        </div>
        <div className='second-navbar flex justify-center w-full bg-[#007BFF] text-white'>
          <div className="container flex items-center h-8 font-medium justify-between">
            <span>All <i className="bi bi-chevron-down"></i></span>
            <span>Home Appliances <i className="bi bi-chevron-down"></i></span>
            <span>Mobiles</span>
            <span>Laptops</span>
            <span>Kitchen <i className="bi bi-chevron-down"></i></span>
            <span>Tupper Ware</span>
            <span>Decorative</span>
            <span>Electronics <i className="bi bi-chevron-down"></i></span>
            <span>Garmets <i className="bi bi-chevron-down"></i></span>
            <span>Shoes <i className="bi bi-chevron-down"></i></span>
            <span>Watches <i className="bi bi-chevron-down"></i></span>
            <span>Grocery</span>
          </div>
        </div>
      </nav>
      <div className="h-full fixed text-black shadow-xl shadow-[#00000030] bg-white z-50 sidebar overflow-y-auto">
        <div className="h-14 mb-5 bg-black w-full">
          <label htmlFor="sidebar-move" className=" top-2.5 right-3 text-white rounded-full h-8 flex items-center justify-center w-8 text-3xl absolute bottom-0.5">X</label>
        </div>
        <div className="px-3">
          <label htmlFor="login-form" className="h-10 flex items-center px-3 text-lg font-bold rounded-md hover:bg-gray-100 w-full">Account</label>
        </div>
        <Link to={"/shopping-cart"}>
          <div className="px-3">
            <div className="h-10 flex items-center px-3 text-lg font-bold rounded-md hover:bg-gray-100 w-full">Cart & Shop</div>
          </div>
        </Link>
        <Link to={"/shopping-orders"}>
          <div className="px-3">
            <div className="h-10 flex items-center px-3 text-lg font-bold rounded-md hover:bg-gray-100 w-full">Orders & list</div>
          </div></Link><br /><hr className="w-11/12 text-gray-300" /><br />
        <div className="px-3">
          <div className="h-10 flex items-center px-3 text-lg font-bold rounded-md hover:bg-gray-100 w-full">All</div>
        </div>
        <div className="px-3">
          <div className="h-10 flex items-center px-3 text-lg font-bold rounded-md hover:bg-gray-100 w-full">Home Appliances</div>
        </div>
        <div className="px-3">
          <div className="h-10 flex items-center px-3 text-lg font-bold rounded-md hover:bg-gray-100 w-full">Mobiles</div>
        </div>
        <div className="px-3">
          <div className="h-10 flex items-center px-3 text-lg font-bold rounded-md hover:bg-gray-100 w-full">Laptops</div>
        </div>
        <div className="px-3">
          <div className="h-10 flex items-center px-3 text-lg font-bold rounded-md hover:bg-gray-100 w-full">Kitchen</div>
        </div>
        <div className="px-3">
          <div className="h-10 flex items-center px-3 text-lg font-bold rounded-md hover:bg-gray-100 w-full">Tupper Ware</div>
        </div>
        <div className="px-3">
          <div className="h-10 flex items-center px-3 text-lg font-bold rounded-md hover:bg-gray-100 w-full">Decorative</div>
        </div>
        <div className="px-3">
          <div className="h-10 flex items-center px-3 text-lg font-bold rounded-md hover:bg-gray-100 w-full">Electronics</div>
        </div>
        <div className="px-3">
          <div className="h-10 flex items-center px-3 text-lg font-bold rounded-md hover:bg-gray-100 w-full">Garmets</div>
        </div>
        <div className="px-3">
          <div className="h-10 flex items-center px-3 text-lg font-bold rounded-md hover:bg-gray-100 w-full">Shoes</div>
        </div>
        <div className="px-3">
          <div className="h-10 flex items-center px-3 text-lg font-bold rounded-md hover:bg-gray-100 w-full">Watches</div>
        </div>
        <div className="px-3">
          <div className="h-10 flex items-center px-3 text-lg font-bold rounded-md hover:bg-gray-100 w-full">Grocery</div>
        </div>
      </div>
      <label htmlFor="sidebar-move" className="sidebar-shadow bg-[#00000020] fixed z-40 h-full"></label>
      <div className="h-14 w-full"></div>
      <div className="container mx-auto h-full z-30">
        <input type="checkbox" id="login-form" className="hidden" />
        <div className="px-5 login-form overflow-hidden bg-white shadow-xl rounded-2xl fixed my-auto z-30">
          {data.Customer.AccStatus ?
            <div className="text-center mt-12 font-bold text-2xl text-[#00000080]">
              <img src="../Images/user-empty.jpg" className="w-50 mx-auto mb-5 mt-10" alt="not found..." />
              <span>{data.Customer.Email}</span><br />
              <span>{data.Customer.Phone}</span><br />
              <button onClick={() => dispatch(changeLogin())} className="h-10 w-3/4 mt-5 rounded-lg text-white shadow-xl bg-blue-500">Logout</button>
              <button className="h-10 w-3/4 mt-3 rounded-lg text-white shadow-xl bg-red-500">
                <label htmlFor="login-form" className="w-30 px-24">Close</label>
              </button>
            </div> :
            <div>
              <input type="checkbox" id="login-visible" className="hidden" />
              <div className="register-section">
                <h1 className="text-3xl mt-15 font-bold text-blue-500 mb-5">Register Now</h1>
                <input value={registerData.Email} onChange={(e) => setRegisterData({ ...registerData, Email: e.target.value })} type="email" className="w-full h-10 border-2 font-medium shadow-lg text-[#00000080] px-3 rounded-lg outline-hidden border-blue-500 mb-3" placeholder="enter your email..." />
                <input value={registerData.Phone} onChange={(e) => setRegisterData({ ...registerData, Phone: e.target.value })} type="number" className="w-full h-10 border-2 font-medium shadow-lg text-[#00000080] px-3 rounded-lg outline-hidden border-blue-500 mb-3" placeholder="enter your mobile number..." />
                <input value={registerData.Password} onChange={(e) => setRegisterData({ ...registerData, Password: e.target.value })} type="password" className="w-full h-10 border-2 font-medium shadow-lg text-[#00000080] px-3 rounded-lg outline-hidden border-blue-500 mb-3" placeholder="create a new password..." />
                <input onChange={(e) => setConPassword(e.target.value)} value={conPassword} type="text" className="w-full h-10 border-2 font-medium shadow-lg text-[#00000080] px-3 rounded-lg outline-hidden border-blue-500 mb-5" placeholder="re-enter your password..." />
                <button onClick={() => {
                  {
                    registerData.Email.length != 0 && registerData.Phone.length != 0 && registerData.Password.length != 0 && registerData.Password === conPassword ?
                      dispatch(addUser(registerData)) : console.log("Please Enter Valid Details")
                  }
                  setRegisterData({
                    Password: "",
                    Phone: "",
                    Email: "",
                    Type: "",
                    Cart: [],
                    Orders: []
                  })
                  setConPassword("")
                }} className="h-10 bg-blue-500 text-white font-bold rounded-md shadow-lg">
                  <label className="px-5" htmlFor="login-form">Register</label>
                </button>
                <button onClick={() => dispatch(guestLogin())} className="h-10 bg-[#FF6F00] text-white font-bold rounded-md shadow-lg mx-2">
                  <label className="px-5" htmlFor="login-form">Guest Login</label>
                </button>
                <h5 className="mt-3">if your are already a customer</h5>
                <label htmlFor="login-visible" className="text-blue-500 font-medium">Click here to Login</label>
              </div>
              <div className="login-section">
                <h1 className="text-3xl mt-15 font-bold text-blue-500 mb-5">Login</h1>
                <input value={loginData.Email} onChange={(e) => setLoginData({ ...loginData, Email: e.target.value })} type="email" className="w-full h-10 border-2 font-medium shadow-lg text-[#00000080] px-3 rounded-lg outline-hidden border-blue-500 mb-3" placeholder="enter your email..." />
                <input value={loginData.Password} onChange={(e) => setLoginData({ ...loginData, Password: e.target.value })} type="password" className="w-full h-10 border-2 font-medium shadow-lg text-[#00000080] px-3 rounded-lg outline-hidden border-blue-500 mb-3" placeholder="enter your password..." />
                <button onClick={() => {
                  dispatch(getLoginData({ Email: loginData.Email, Password: loginData.Password, AllData: data.AllData })),
                    setLoginData({ Email: "", Password: "" })
                }}
                  className="h-10 bg-blue-500 text-white font-bold rounded-md shadow-lg">
                  <label className="px-5" htmlFor="login-form">Login</label>
                </button>
                <h5 className="mt-3">if you are a new customer</h5>
                <label htmlFor="login-visible" className="text-blue-500 font-medium">Click here to Register</label>
              </div>
            </div>
          }
        </div>
      </div>
    </>
  )
}

export default Navbar;