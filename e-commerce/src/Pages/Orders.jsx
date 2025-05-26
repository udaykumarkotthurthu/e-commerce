import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Orders = () => {

  const data = useSelector((state) => {
    return state.user;
  })

  const orderItems = data.ProductsData.filter((product) =>
    data.Customer.Orders.includes(product.key)
  )

  return (
    <>
      <div className="container mx-auto p-5 my-10">
        <div className="mb-3">
          <span className="text-3xl font-bold">Shopping Orders</span>
        </div>
        {data.Customer.Type === "customer" ? (
          orderItems.length > 0 ? (
            orderItems.map((product) => (
              <div key={product.key}><hr className="text-[#00000020] my-5" />
                <span className="text-2xl font-extrabold">Delievered 3 Mar, 2025</span><br />
                <span className="text-lg font-medium text-[#00000080]">Package was handovered to the Customer</span><br /><br />
                <div className="grid-cols-12 grid items-center">
                  <div className="xl:col-span-3 lg:col-span-3 md:col-span-3 sm:col-span-4 col-span-12">
                    <img src={product.URL} alt="not found..." className="w-4/5 mx-auto rounded-3xl" />
                  </div>
                  <div className="xl:col-span-6 m-3 lg:col-span-6 md:col-span-6 sm:col-span-8 col-span-12">
                    <span className="text-xl font-medium text-blue-500">{product.Data}</span>
                    <br /><span className="font-medium">Return Window Closed on 10 Mar, 2025</span><br />
                    <span className="font-bold text-2xl text-[#FF6F00]">{product.Cost}/-</span><br />
                    <span className="font-bold text-[#00000080]">Conditon : New</span><br />
                    <Link to={`/view-product/${product.key}`}>
                    <button className="h-10 border-2 px-5 rounded-lg mt-2 font-bold text-white bg-[#FF6F00]">View Product</button>
                    </Link>
                  </div>
                  <div className="xl:col-span-3 lg:col-span-3 md:col-span-3 sm:col-span-4 col-span-12">
                    <button className="h-10 w-full bg-[#00000030] border-2 border-[#00000030] shadow-lg shadow-[#00000020] font-bold text-[#00000050] rounded-lg my-1.5 ">Ask Product Question</button>
                    <button className="h-10 w-full bg-[#00000030] border-2 border-[#00000030] shadow-lg shadow-[#00000020] font-bold text-[#00000050] rounded-lg my-1.5 ">Leave Feedback</button>
                    <button className="h-10 w-full bg-[#00000030] border-2 border-[#00000030] shadow-lg shadow-[#00000020] font-bold text-[#00000050] rounded-lg my-1.5 ">Write Product Review</button>
                    <button className="h-10 w-full bg-[#00000030] border-2 border-[#00000030] shadow-lg shadow-[#00000020] font-bold text-[#00000050] rounded-lg my-1.5 ">Archive Order</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center my-8">
              <img src="../Images/order-shadow.jpg" className="mx-auto" alt="not found..." />
              <h2 className="font-medium text-xl text-[#00000080]">Your orders is empty</h2>
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
              <img src="../Images/order-shadow.jpg" className="mx-auto" alt="not found..." />
              <h2 className="font-medium text-xl text-[#00000080]">You have to login or register for getting order feature</h2>
              <div className="flex mt-5 justify-center gap-3">
                <Link to="/">
                  <button className="h-10 rounded-lg font-bold text-white px-5 bg-[#FF6F00]">Go Back to Home</button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div >
    </>
  )
}

export default Orders;
