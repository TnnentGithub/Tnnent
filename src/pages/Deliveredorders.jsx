import React from 'react'
import Deliveredorder from '../components/Deliveredorder.jsx';

function Deliveredorders() {
  return (
    <>
    <div className='forscroll'>
    <section className='lg:hidden'>
    <div className="fixed bg-[#fff] z-60 tnennt">
                
                <div className="flex justify-between items-center px-3 mt-6">
                <div className="flex flex-col">
            <div className="flex gap-2 items-center">
                <h2 className="font-bold text-[6vw]">ORDERS</h2>
                <div className="rounded-full bg-green-500 w-[1vh] h-[1vh]"></div>
            </div>
            <p className="font-bold opacity-50 text-[3vw]">My Orders</p>
        </div>
        <div className="rounded-full bg-[#F5F5F5] w-[12vw] h-[12vw] flex justify-center items-center absolute left-[85%]">
            <svg width="40%" height="40%" viewBox="0 0 18 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="15.6315" y1="27.347" x2="1.96744" y2="13.6829" stroke="#272727" strokeWidth="4.09708"/>
                <line x1="16.2493" y1="2.30791" x2="4.66085" y2="13.8964" stroke="#272727" strokeWidth="4.09708"/>
                </svg>                
        </div>
                </div>
                <div className='flex items-center justify-between mt-12 px-4'>
                    <h2 className='font-bold text-[4.5vw]'>Delivered Orders</h2>
                    <h2 className='font-bold text-[5.7vw] text-[#094446]'>10</h2>
                </div>
                </div>
                <div className='mt-[48%]'>
                    <Deliveredorder/>
                    <Deliveredorder/>
                    <Deliveredorder/>
                    <Deliveredorder/>
                    <Deliveredorder/>

                    <Deliveredorder/>
                    
                </div>
    </section>
    </div>
    </>
  )
}

export default Deliveredorders
