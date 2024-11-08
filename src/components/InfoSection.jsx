import React from 'react'
import { FaHeadset, FaLock, FaShippingFast, FaTag } from 'react-icons/fa'
import { FaMoneyBill1Wave } from 'react-icons/fa6'

const InfoSection = () => {
    const infoItems=[
        {
            icon:<FaShippingFast className='text-3xl text-red-600'/>,
            title:'Free Shipping',
            description:'Get your orders deliverd with no extra cost'
        },
        {
            icon:<FaHeadset className='text-3xl text-red-600'/>,
            title:'Support 24/7',
            description:'We are Hear to assist you anytime'
        },
        {
            icon:<FaMoneyBill1Wave className='text-3xl text-red-600'/>,
            title:'100% money back',
            description:'Full refund if younare not Satisfied'
        },
        {
            icon:<FaLock className='text-3xl text-red-600'/>,
            title:'Payment Secure',
            description:'your payment information is safe'
        },
        {
            icon:<FaTag className='text-3xl text-red-600'/>,
            title:'Discount',
            description:'Enjoy the best prices'
        },
    ]
  return (

    <div className='bg-white pb-8 pt-12'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
            {infoItems.map((item,index)=>(
                <div key={index} className='flex flex-col item-center text-center p-4 border rounded-lg shadow-md teansform transition-transform duration-300 hover:scale-105 cursor-pointer'>
                    {item.icon}
                    <h3 className='mt-4 text-xl font-semibold'>{item.title}</h3>
                    <p className='mt-2 text-gray-600'>{item.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default InfoSection