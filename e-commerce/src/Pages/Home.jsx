import { useSelector } from 'react-redux';
import "./Home.css";
import { Link } from 'react-router-dom';

const Home = () => {

  const data = useSelector((state) => {
    return state.user;
  })

  return (
    <>
      <div>
        <img src="./Images/main-poster.jpg" className='mb-10' alt="not found..." />
        <div className='p-5 mb-10 overflow-scroll grid grid-cols-2 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 container mx-auto scrollbar'>
          {
            data.ProductsData.map((eachobj) => {
              return (
                eachobj.key <= 24 ?
                  <Link key={eachobj.key} to={`/view-product/${eachobj.key}`}>
                    <div key={eachobj.id} className="p-3 w-fit rounded-xl shadow-[#00000020] mb-1 shadow-lg">
                      <img src={eachobj.URL} className='h-full rounded-lg' alt="not found..." />
                    </div>
                  </Link>
                  : <div key={eachobj.key} className='hidden'></div>
              )
            })
          }
        </div>
        <div className="whitespace-nowrap p-3 py-5 scrollbar relative bg-white container mx-auto mb-20 rounded-2xl shadow-lg shadow-[#00000020] overflow-scroll">
          {
            data.ProductsData.map((eachobj) => {
              return (
                eachobj.key < 40 && eachobj.key >= 25 ?
                  <Link key={eachobj.key} to={`/view-product/${eachobj.key}`}>
                    <div key={eachobj.key} className="w-65 relative top-1 mb-0 inline-block border-1 p-3 rounded-md border-[#00000030] mx-2.5">
                      <img src={eachobj.URL} alt="not found..." />
                      <h2 className='font-medium my-1 text-lg'>{eachobj.ProductName}</h2>
                      <div className="flex items-center gap-x-3">
                        <span className='h-7 flex items-center justify-center gap-x-2 font-bold rounded-3xl text-white w-18 bg-blue-500'>{eachobj.Rating} <i className="bi bi-star-fill"></i></span>
                        <span className='font-medium text-[#00000050] mt-3'>({eachobj.Reviews} reviews)</span>
                      </div>
                    </div>
                  </Link>
                  : <div key={eachobj.key} className='hidden'></div>
              )
            })
          }
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 container px-5 mx-auto gap-5 mb-20">
          {
            data.Store.map((eachobj) => {
              return (
                <div key={eachobj.unique} className='rounded-lg grid grid-cols-2 shadow-lg shadow-[#00000020] gap-4 p-5'>
                  {
                    eachobj.data.map((each) => {
                      return (
                        <Link key={each.key} to={`/view-product/${each.key}`}>
                          <div className="border-1 border-[#00000030] rounded-md p-2">
                            <img src={each.URL} className='mb-2' alt="not found..." />
                            <i className="bi bi-star-fill text-[#FF6F00]"></i>
                            <i className="bi bi-star-fill text-[#FF6F00]"></i>
                            <i className="bi bi-star-fill text-[#FF6F00]"></i>
                            <i className="bi bi-star text-[#FF6F00]"></i>
                            <i className="bi bi-star text-[#FF6F00]"></i>
                            <i className='text-sm text-[#00000050] font-medium'> ({each.Reviews} reviews)</i>
                          </div>
                        </Link>
                      )
                    })
                  }
                </div>
              )
            })
          }
          <div className='rounded-lg shadow-lg flex items-center shadow-[#00000020] p-5'>
            <img src="../Images/production-banner.jpg" alt="not found..." />
          </div>
        </div>
        <div className="grid container mx-auto grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-4 sm:grid-cols-6 gap-5 my-15">
          {
            data.ProductsData.map((eachobj) => {
              return (
                (eachobj.key >= 41 && eachobj.key <= 64) || eachobj.key>=100 ?
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

export default Home;
