import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-8 px-4 md:px-16 lg:px-24'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div>
                <h3 className='text-xl font-semibold'>E-shop</h3>
                <p className='mt-4'>Your one step for all you needs. shop with us annd experience the best online shoping experiences</p>
            </div>
            <div className='flex flex-col md:items-center'>
                <h4 className='text-lg font-semibold'>Quick Links</h4>
                <ul className='mt-4 space-y-2'>
                    <li >
                    <Link to="/" className='hover:underline' >Home</Link>
                    </li>
                    <li>
                    <Link  to="/shop" className='hover:underline'>shop</Link>
                    </li>
                    <li>
                    <Link  to="/contact" className='hover:underline'>contact</Link>
                    </li>
                    <li>
                    <Link  to="/about" className='hover:underline'>about</Link>
                    </li>
                    
                </ul>
            </div>
            
        </div>
        <div className='mt-8 border-t border-gray-700 pt-4'>
            <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
                <p className='flex space-x-0 mt-4 md:mt-0'>&copy; 2024 e-shop all rights reserved</p>
            </div>
            <div>
                <a href="" className='hover:underline'>Privacy Policy</a>
                <a href="" className='hover:underline'>Terms & Condictions</a>
            </div>
        </div>
    </footer>
  )
}

export default Footer