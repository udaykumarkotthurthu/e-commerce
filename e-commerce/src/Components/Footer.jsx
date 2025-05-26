import "./Footer.css";

const Footer = () => {
    return (
        <>
            <div className="h-auto pt-15 flex justify-center text-white bottom-0 bg-[#007BFF] w-full text-left footer">
                <div className="container">
                    <div className="grid grid-cols-12 gap-x-4">
                        <div className="lg:col-span-6 xl:col-span-6 md:col-span-12 sm:col-span-12 col-span-12">
                            <span className="text-4xl font-extrabold">Shop Now</span><br />
                            <button className="h-10 px-5 my-3 rounded-md font-bold text-lg bg-[#FF6F00]">Get Prime Now</button><br />
                            <span className="font-medium">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, deserunt alias, reiciendis porro dolorem ex incidunt nulla obcaecati at asperiores nisi aliquid eaque vel quod? Ad doloribus tempora porro quasi?</span><br /><br />
                        </div>
                        <div className="xl:col-span-2 lg:col-span-2 md:col-span-4 sm:col-span-12 col-span-12">
                            <span className="text-2xl font-bold">About Us</span><br /><br />
                            <ul className="text-md font-medium">
                                <li>#91 - 0861-56***96</li>
                                <li>shopno*@gmail.org</li>
                                <li>Stores Locations</li>
                                <li>CS - 9AM - 5PM</li>
                            </ul><br /><br />
                        </div>
                        <div className="xl:col-span-2 lg:col-span-2 md:col-span-4 sm:col-span-12 col-span-12">
                            <span className="text-2xl font-bold">Navigation Links</span><br /><br />
                            <ul className="text-md font-medium">
                                <li>Shop Categories</li>
                                <li>About Us</li>
                                <li>FAQ's</li>
                                <li>Blog or News</li>
                                <li>Careers</li>
                            </ul><br /><br />
                        </div>
                        <div className="xl:col-span-2 lg:col-span-2 md:col-span-4 sm:col-span-12 col-span-12">
                            <span className="text-2xl font-bold">Customer Service</span><br /><br />
                            <ul className="text-md font-medium">
                                <li>Shipping & Delivery info</li>
                                <li>Returns & Exchanges</li>
                                <li>Payment Options</li>
                                <li>Order Tracking</li>
                                <li>Privacy Policy</li>
                                <li>Terms & Conditions</li>
                            </ul><br /><br />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
