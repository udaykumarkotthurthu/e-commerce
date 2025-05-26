import { useDispatch, useSelector } from "react-redux";
import "./Admin.css";
import { useEffect, useState } from "react";
import { deleteProduct, deleteUser, fetchProducts, fetchUsers, addProduct } from "../Store";

const Admin = () => {

    const data = useSelector((state) => {
        return state.user
    })

    const [productData, setProductData] = useState({
        key: new Date().getTime().toString(),
        ProductId: "",
        ProductName: "",
        Type: "",
        Cost: "",
        Rating: Math.floor(Math.random() * 10),
        Reviews: Math.floor(Math.random() * 1000),
        Data: "",
        Seller: "",
        URL: "../Images/Products/empty-product.jpeg"
    })

    const [active, setActive] = useState("users");

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
        dispatch(fetchProducts());
    }, [dispatch])

    const filterItems = data.ProductsData.filter((product) => {
        return data.AllData.some(each => {
            return each.Cart.some(item => item.includes(product.key))
        })
    })

    return (
        <div>
            <input className="hidden" type="checkbox" id="productform" />
            <div className="product-form">
                <h1 className="text-2xl font-bold text-blue-500 my-4">Add Product</h1>
                <input value={productData.ProductId} onChange={(e) => setProductData({ ...productData, ProductId: e.target.value })} type="text" className=" outline-0 shadow-lg w-full h-10 border-2 border-blue-500 rounded-lg px-3 mb-3" placeholder="Enter product id..." />
                <input value={productData.ProductName} onChange={(e) => setProductData({ ...productData, ProductName: e.target.value })} type="text" className=" outline-0 shadow-lg w-full h-10 border-2 border-blue-500 rounded-lg px-3 mb-3" placeholder="Enter product name..." />
                <input value={productData.Type} onChange={(e) => setProductData({ ...productData, Type: e.target.value })} type="text" className=" outline-0 shadow-lg w-full h-10 border-2 border-blue-500 rounded-lg px-3 mb-3" placeholder="Enter product type..." />
                <input value={productData.Cost} onChange={(e) => setProductData({ ...productData, Cost: e.target.value })} type="text" className=" outline-0 shadow-lg w-full h-10 border-2 border-blue-500 rounded-lg px-3 mb-3" placeholder="Enter cost..." />
                <input value={productData.Data} onChange={(e) => setProductData({ ...productData, Data: e.target.value })} type="text" className=" outline-0 shadow-lg w-full h-10 border-2 border-blue-500 rounded-lg px-3 mb-3" placeholder="Enter product data..." />
                <input value={productData.Seller} onChange={(e) => setProductData({ ...productData, Seller: e.target.value })} type="text" className=" outline-0 shadow-lg w-full h-10 border-2 border-blue-500 rounded-lg px-3 mb-3" placeholder="Enter seller name..." />
                <button onClick={() => {
                    dispatch(addProduct(productData)).then(() => 
                    dispatch(fetchProducts()))
                    setProductData({
                        key: new Date().getTime().toString(),
                        ProductId: "",
                        ProductName: "",
                        Type: "",
                        Cost: "",
                        Rating: Math.floor(Math.random() * 10),
                        Reviews: Math.floor(Math.random() * 1000),
                        Data: "",
                        Seller: "",
                        URL: "../Images/Products/empty-product.jpeg"
                    })
                }} className="h-10 px-5 mx-2 bg-blue-500 rounded-lg text-white font-bold">
                    <label htmlFor="productform">Add Product</label>
                </button>
                <button className="h-10 px-5 mx-2 bg-red-500 rounded-lg text-white font-bold">
                    <label htmlFor="productform">Close</label>
                </button>
            </div>
            <nav className='h-15 z-50 top-0 fixed bg-[#007BFF] shadow-lg w-full flex items-center px-5'>
                <div className='container mx-auto flex justify-between items-center'>
                    <img onClick={() => window.location.href = "/"} src="../Images/main-logo.png" className='h-12' alt="not found..." />
                    <label className="h-10 rounded-lg font-bold px-5 bg-white text-blue-500 flex items-center" htmlFor="productform">Add Poduct</label>
                </div>
            </nav>
            <div className="container mx-auto mt-20 relative">
                <div className="mb-5">
                    <button onClick={() => setActive("users")} className='h-10 rounded-lg text-lg px-5 bg-blue-500 font-bold text-white'>Users</button>
                    <button onClick={() => setActive("products")} className='h-10 rounded-lg mx-3 text-lg px-5 bg-blue-500 font-bold text-white'>Products</button>
                    <button onClick={() => setActive("orders")} className='h-10 rounded-lg text-lg px-5 bg-blue-500 font-bold text-white'>Orders</button>
                </div>
                <div className="p-5 scrollbar overflow-scroll shadow-lg w-full rounded-lg mb-5 border-1 border-[#00000050]">
                    {
                        active === "users" ?
                            <table className='w-full text-left'>
                                <thead>
                                    <tr className="h-10 border-[#00000050] text-[#00000080]">
                                        <th className='px-3'>Sno</th>
                                        <th className='px-3'>Email</th>
                                        <th className='px-3'>Phone</th>
                                        <th className='px-3'>Password</th>
                                        <th className='px-3'>Type</th>
                                        <th className='px-3'>Buttons</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.AllData.map((eachobj, index) => {
                                            return (
                                                <tr key={eachobj._id} className="h-20 border-t-1 font-bold border-[#00000050] text-[#00000050]">
                                                    <td className='px-3'>{index + 1}</td>
                                                    <td className='px-3'>{eachobj.Email}</td>
                                                    <td className='px-3'>{eachobj.Phone}</td>
                                                    <td className='px-3'>{eachobj.Password}</td>
                                                    <td className='px-3'>{eachobj.Type}</td>
                                                    <td className='px-3 items-center'>
                                                        <button onClick={() => {
                                                            dispatch(deleteUser(eachobj._id)).then(() => dispatch(fetchUsers()))
                                                        }} className="h-10 bg-red-500 rounded-md px-5 font-bold text-white my-2 ">Delete</button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table> : <></>
                    }
                    {
                        active === "products" ?
                            <table className='w-full text-left'>
                                <thead>
                                    <tr className="h-10 border-[#00000050] text-[#00000080]">
                                        <th className='px-3'>Sno</th>
                                        <th className="px-3">Image</th>
                                        <th className='px-3'>ProductId</th>
                                        <th className='px-3'>Type</th>
                                        <th className='px-3'>Name</th>
                                        <th className='px-3'>Seller</th>
                                        <th className='px-3'>Cost</th>
                                        <th className='px-3'>Rating</th>
                                        <th className='px-3'>Buttons</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.ProductsData.map((eachobj, index) => {
                                            return (
                                                <tr key={eachobj._id} className="h-25 border-t-1 font-bold border-[#00000050] text-[#00000050]">
                                                    <td className='px-3'>{index + 1}</td>
                                                    <td className='px-3'>
                                                        <img src={eachobj.URL} alt="not found..." className="h-20 w-auto" />
                                                    </td>
                                                    <td className='px-3'>{eachobj.ProductId}</td>
                                                    <td className='px-3'>{eachobj.Type}</td>
                                                    <td className='px-3'>{eachobj.ProductName}</td>
                                                    <td className='px-3'>{eachobj.Seller}</td>
                                                    <td className='px-3'>{eachobj.Cost}/-</td>
                                                    <td className='px-3'>{eachobj.Rating}</td>
                                                    <td className='px-3 items-center'>
                                                        <button onClick={() => {
                                                            dispatch(deleteProduct(eachobj._id)).then(() => dispatch(fetchProducts()))
                                                        }} className="h-10 bg-red-500 rounded-md px-5 font-bold text-white my-2 ">Delete</button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table> : <></>
                    }
                    {
                        active === "orders" ?
                            <table className='w-full text-left'>
                                <thead>
                                    <tr className="h-10 border-[#00000050] text-[#00000080]">
                                        <th className='px-3'>Sno</th>
                                        <th className='px-3'>Image</th>
                                        <th className='px-3'>ProductId</th>
                                        <th className='px-3'>Type</th>
                                        <th className='px-3'>Name</th>
                                        <th className='px-3'>Seller</th>
                                        <th className='px-3'>Cost</th>
                                        <th className='px-3'>Rating</th>
                                        <th className='px-3'>Buttons</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        filterItems.map((eachobj, index) => {
                                            return (
                                                <tr key={eachobj.key} className="h-25 border-t-1 font-bold border-[#00000050] text-[#00000050]">
                                                    <td className='px-3'>{index + 1}</td>
                                                    <td className='px-3'>
                                                        <img src={eachobj.URL} alt="not found..." className="h-20 w-auto" />
                                                    </td>
                                                    <td className='px-3'>{eachobj.ProductId}</td>
                                                    <td className='px-3'>{eachobj.Type}</td>
                                                    <td className='px-3'>{eachobj.ProductName}</td>
                                                    <td className='px-3'>{eachobj.Seller}</td>
                                                    <td className='px-3'>{eachobj.Cost}/-</td>
                                                    <td className='px-3'>{eachobj.Rating}</td>
                                                    <td className='px-3 items-center'>
                                                        <button onClick={() => window.location.href = `/view-product/${eachobj.key}`} className="h-10 bg-blue-500 rounded-md px-5 font-bold text-white my-2 ">ViewItem</button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table> : <></>
                    }
                </div>
            </div>
        </div>
    )
}

export default Admin
