import React from 'react'
import { useParams } from 'react-router-dom'
import { allProduct } from '../Data/ProductData'

export default function ProductDetails() {
    let {Pid}=useParams()
    let singleProductDetails=allProduct.filter((items)=>items.id==Pid)[0]
  return (
    <div>
    
      <div className='max-w-[800px] mx-auto p-[15px] grid grid-cols-2 gap-6 mt-[100px] border shadow-lg hover:shadow-xl'>
        <div>
            <img src={singleProductDetails.thumbnail} alt="" />
        </div>
        <div>
            <h2 className='text-[25px] py-[10px] font-bold font-mono text-center'>Cateogry{singleProductDetails.category}</h2>
            <h2 className='pb-[10px] text-[20px] font-bold font-mono'>{singleProductDetails.title}</h2>
            <h2 className='text-[18px] py-[10px] font-mono font-bold'> Price:{singleProductDetails.price}</h2>
            <h2 className='text-[18px] py-[10px] font-mono font-bold'> Rating:{singleProductDetails.rating}</h2>
            <h2 className='text-[18px] py-[10px] font-mono font-bold'> In Stock:{singleProductDetails.stock}</h2>
            <p className='text-slate-500 leading-8'>{singleProductDetails.description}.</p>
            
        </div>
      </div>
     
    </div>
  )
}
