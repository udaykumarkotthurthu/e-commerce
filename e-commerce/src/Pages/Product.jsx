import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { updateCart, updateOrders } from "../Store";

const Product = () => {

    const data = useSelector((state) => {
        return state.user;
    })

    const[productValue,setProductValue] = useState({
        customerId : data.Customer.id,
        cartId : ""
    });

    const[orders,setOrders] = useState({
        customerId : data.Customer.id,
        orderId : ""
    })

    const dispatch = useDispatch();
    const { id } = useParams();

    return (
        <>
            <div className="container mx-auto my-15">
                {
                    data.ProductsData.map((eachobj) => {
                        return (
                            eachobj.key == id ?
                                <div key={eachobj.key} className="grid grid-cols-12 gap-5">
                                    <div className="col-span-12 xl:col-span-5 lg:col-span-5 md:col-span-12 sm:col-span-12 grid grid-cols-12 items-start">
                                        <div className="col-span-2 gap-y-3 grid">
                                            <img src={eachobj.URL} className="mx-3 opacity-40" alt="not found..." />
                                            <img src={eachobj.URL} className="mx-3 opacity-60" alt="not found..." />
                                            <img src={eachobj.URL} className="mx-3" alt="not found..." />
                                        </div>
                                        <div className="col-span-10 px-5">
                                            <img src={eachobj.URL} alt="not found..." />
                                        </div>
                                    </div>
                                    <div className="col-span-12 p-5 xl:col-span-7 lg:col-span-7 md:col-span-12 sm:col-span-12">
                                        <h2 className="text-xl mb-2 font-bold">{eachobj.ProductName}</h2>
                                        <span className="text-lg text-[#00000050] font-bold">{eachobj.Data}</span><br /><br />
                                        <div className="flex gap-3 items-center">
                                            <span className="text-3xl font-bold">{Math.floor(eachobj.Cost * 1.5)}/-</span>
                                            <span className="font-bold text-[#00000050] line-through">{eachobj.Cost}/-</span>
                                            <span className="font-bold text-blue-500 text-lg">40% Off</span>
                                        </div>
                                        <div className="flex items-center gap-x-3">
                                            <div className="h-8 w-20 bg-blue-500 text-white flex items-center justify-center gap-2 text-xl my-3 rounded-4xl font-bold">{eachobj.Rating} <i className="bi text-sm bi-star-fill"></i></div>
                                            <span className="font-medium text-[#00000080]">{eachobj.Reviews} Reviews</span>
                                        </div>
                                        <div className="h-7 flex items-center justify-center w-35 text-white rounded-3xl bg-[#00000030] font-bold">
                                            <span>Free Delievery</span>
                                        </div>
                                        <div className="flex gap-3 mt-4 font-bold">
                                            <button onMouseEnter={() => setProductValue({...productValue,cartId:eachobj.key})} onClick={() => {
                                                dispatch(updateCart(productValue))
                                            }} 
                                         className="h-10 bg-[#FF6F00] text-white rounded-lg px-5">Add to Cart</button>
                                            <button onMouseEnter={() => setOrders({...orders,orderId:eachobj.key})} onClick={() => {
                                                dispatch(updateOrders(orders))
                                            }}  className="h-10 text-[#FF6F00] border-2 border-[#FF6F00] px-5 rounded-lg">Order Now</button>
                                        </div><hr className="text-[#00000030] my-5" />
                                        <div className="flex items-center text-lg font-bold text-[#00000050] gap-5">
                                            <img src=".././Images/Items/id_poster1.jpeg" className="h-10" alt="not found..." />
                                            <span><i className="bi bi-patch-check-fill text-blue-500"></i> Original Brand</span>
                                            <span><i className="bi bi-patch-check-fill text-blue-500"></i> Authorised Seller</span>
                                        </div><hr className="text-[#00000030] my-5" />
                                        <div>
                                            <h2 className="text-xl mb-2 font-bold">Product Details</h2>
                                            <span>Name : {eachobj.ProductName} <br />
                                                Material : Synthetic <br />
                                                Sole Material : Pvc <br />
                                                Fastening & Back Detail : Lace-Up <br />
                                                Sizes : IND-6, IND-7, IND-8, IND-9, IND-10 <br />
                                                Country of Origin : India</span>
                                        </div><hr className="text-[#00000030] my-5" />
                                        <div>
                                            <h2 className="text-xl mb-2 font-bold">Sold By</h2>
                                            <div className="flex items-center justify-between mb-5">
                                                <div className="flex items-center">
                                                    <img src=".././Images/Items/id_poster1.jpeg" className="h-20 mr-4" alt="not found..." />
                                                    <span className="text-2xl font-bold text-[#00000050]">{eachobj.Seller}</span>
                                                </div>
                                                <Link to={"/"}>
                                                    <button className="h-10 w-30 border-2 border-blue-500 rounded-lg text-blue-500 font-bold">View More</button>
                                                </Link>
                                            </div>
                                            <div className="flex text-[#00000080] font-bold text-xl justify-between">
                                                <span>Lowest Price</span>
                                                <span>|</span>
                                                <span>Cash on Delievery</span>
                                                <span>|</span>
                                                <span>7 Days Return</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                : <div key={eachobj.key} className="hidden"></div>
                        )
                    })
                }
                <div className="grid container mx-auto grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-4 sm:grid-cols-6 gap-5 my-15">
                    {
                        data.ProductsData.map((eachobj) => {
                            return (
                                eachobj.key >= 65 && eachobj.key <= 80 ?
                                    <Link key={eachobj.key} to={`/view-product/${eachobj.key}`}>
                                        <div className="shadow-xl w-full p-5 rounded-xl">
                                            <img src={eachobj.URL} className="mb-2 rounded-lg" alt="not found..." />
                                            <span className="text-lg font-medium">{eachobj.ProductName}</span><br />
                                            <i className="bi bi-star-fill text-[#FF6F00]"></i>
                                            <i className="bi bi-star-fill text-[#FF6F00]"></i>
                                            <i className="bi bi-star-fill text-[#FF6F00]"></i>
                                            <i className="bi bi-star-fill text-[#FF6F00]"></i>
                                            <i className="bi bi-star-fill text-[#FF6F00]"></i>
                                            <span className="text-sm text-[#00000080] font-medium"> ({eachobj.Reviews} reviews)</span>
                                            <h1 className="my-2 font-bold text-2xl">{eachobj.Cost}/-</h1>
                                            <div className="h-6 flex items-center my-3 justify-center w-30 text-[#00000050] py-1 rounded-3xl border-1 border-[#00000050] text-xs font-bold">
                                                <span>Free Delievery</span>
                                            </div>
                                        </div>
                                    </Link> : <div key={eachobj.key} className='hidden'></div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Product
