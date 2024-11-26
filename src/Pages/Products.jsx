import React from 'react'
import Header from '../comonComponent/Header'
import Footer from '../comonComponent/Footer'
import { allProduct } from '../Data/ProductData'
import { Link } from 'react-router-dom'

export default function Products() {
  return (
    <div>
        <Header/>
        <div className="mt-[100px] ">
        <h1 className='text-center text-red-600 text-[40px]'> Our Product</h1>
        <div className='grid grid-cols-3 gap-4 pb-[10px]'>
            {allProduct.map((items,index)=>{
                return(
                    <div className='shadow-lg hover:shadow-xl hover:shadow-slate-500'>
                        <Link to={`/Product-details/${items.id}`}>
                        <img className='mx-auto w-[50%] hover:scale-[1.2] transition-[0.5s]' src={items.thumbnail} alt="" />
                        <div className='border'>
                        <h2 className='px-[15px] text-[22px] font-bold mt-6'>Category:{items.category}</h2>
                        <h2 className='p-[15px] font-normal text-[20px]'>{items.title}</h2>
                        <p className='px-[15px] text-justify pb-[25px] '>{items.description}</p>
                        </div>
                        </Link>
                    </div>
                )
            })}
           
        </div>
        



        
      <Footer/>
    </div>
    </div>
  )
}
