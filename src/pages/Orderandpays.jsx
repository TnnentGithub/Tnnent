import React from 'react'
import './style.css';
import rupee from '../images/₹.svg';
import coupon from '../images/Vector (11).svg';
import gonext from '../images/Group 2.svg';

function Orderandpays() {
  return (
    <>
    <section className="lg:hidden">
            <div className="fixed bg-[#fff] z-60 tnennt">
                
                <div className="flex justify-between items-center px-3 mt-6">
                <div className="flex flex-col">
            <div className="flex gap-2 items-center">
                <h2 className="font-bold text-[6vw]">ORDERS & PAYS</h2>
                <div className="rounded-full bg-green-500 w-[1vh] h-[1vh]"></div>
            </div>
            <p className="font-bold opacity-50 text-[3vw]">Orders, payments & cupons</p>
        </div>
        <div className="rounded-full bg-[#F5F5F5] w-[12vw] h-[12vw] flex justify-center items-center absolute left-[85%]">
            <svg width="40%" height="40%" viewBox="0 0 18 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="15.6315" y1="27.347" x2="1.96744" y2="13.6829" stroke="#272727" strokeWidth="4.09708"/>
                <line x1="16.2493" y1="2.30791" x2="4.66085" y2="13.8964" stroke="#272727" strokeWidth="4.09708"/>
                </svg>                
        </div>
                </div>
                </div>
                <div className='flex justify-center '>
                    <div className='flex justify-between items-center mt-[29%] gap-5'>
                    <div className='w-[45vw] h-[17vw] bg-[#F3F3F3] rounded-3xl flex justify-between items-center'>
                    <div className='w-[14vw] h-[14vw] rounded-full bg-white ml-1 flex justify-center items-center'>
                        <img className='w-[3vw]' src={rupee} alt="" />
                      </div>
                      <div className='flex flex-col mr-12 gap-1'>
                        <h2 className='text-[3.2vw] font-bold '>Payments</h2>
                        <p className='text-[2.3vw] text-[#838383]leading-[0.05rem]'>My Earnings</p>
                      </div>
                    </div>
                    <div className='w-[45vw] h-[17vw] bg-[#F3F3F3] rounded-3xl flex justify-between items-center'>
                    <div className='w-[14vw] h-[14vw] rounded-full bg-white ml-1 flex justify-center items-center'>
                        <img className='w-[4vw]' src={coupon} alt="" />
                      </div>
                      <div className='flex flex-col mr-5 gap-1'>
                        <h2 className='text-[3.2vw] font-bold '>Coupons</h2>
                        <p className='text-[2.3vw] text-[#838383] leading-[0.05rem]'>Orders, payments &<br/>cupons</p>
                      </div>
                    </div>
                    </div>
                </div>
                <p className="font-extrabold text-[4.5vw] ml-4 mt-8">Orders</p>
                <div className='flex justify-center'>
                    <div className='mt-4 w-[93vw] h-[27vw] bg-[#F3F3F3] rounded-2xl'>
                        <div className='flex justify-between items-center'>
                        <div className='flex flex-col ml-3 mt-3'>
                            <h2 className='font-bold text-[6vw] text-[#094446]'>100</h2>
                            <h2 className='font-bold text-[4vw]'>Ongoing Orders</h2>
                            <p className='text-[#9B9B9B] text-[3.6vw] mt-1'>Products that are out for delivery</p>
                        </div>
                        <img className='w-[11vw] mr-3 mt-2' src={gonext} alt="" />
                        </div>
                    </div>
                    
                </div>
                <div className='flex justify-center'>
                    <div className='mt-4 w-[93vw] h-[27vw] bg-[#F3F3F3] rounded-2xl'>
                        <div className='flex justify-between items-center'>
                        <div className='flex flex-col ml-3 mt-3'>
                            <h2 className='font-bold text-[6vw] text-[#094446]'>100</h2>
                            <h2 className='font-bold text-[4vw]'>Delivered Orders</h2>
                            <p className='text-[#9B9B9B] text-[3.6vw] mt-1'>Products that are delivered to the customer</p>
                        </div>
                        <img className='w-[11vw] mr-3 mt-2' src={gonext} alt="" />
                        </div>
                    </div>
                    
                </div>
                <div className='flex justify-center'>
                    <div className='mt-4 w-[93vw] h-[27vw] bg-[#F3F3F3] rounded-2xl'>
                        <div className='flex justify-between items-center'>
                        <div className='flex flex-col ml-3 mt-3'>
                            <h2 className='font-bold text-[6vw] text-[#094446]'>100</h2>
                            <h2 className='font-bold text-[4vw]'>Cancelled Orders</h2>
                            <p className='text-[#9B9B9B] text-[3.6vw] mt-1'>Products that are not delivered</p>
                        </div>
                        <img className='w-[11vw] mr-3 mt-2' src={gonext} alt="" />
                        </div>
                    </div>
                    
                </div>
                <p className="font-extrabold text-[4.5vw] ml-4 mt-8">Orders Matrix</p>
                <div className="flex justify-center mb-12">
  <div className="w-[95vw] border-[1px] border-[#AFAFAF] mt-4 rounded-xl p-3">
    <div className="flex justify-between items-center px-2">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col">
          <h3 className="font-bold text-[4.3vw]">Confirmed Orders</h3>
          <p className="font-bold opacity-40 text-[2.4vw]">Total confirmed orders from your store</p>
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold text-[4.3vw]">Cancelled Orders</h3>
          <p className="font-bold opacity-40 text-[2.4vw]">Total cancelled orders from your store</p>
        </div>
      </div>
      <div className="flex gap-7 items-center mt-1">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col">
            <h3 className="font-bold text-[4vw] text-[#094446]">400</h3>
            <p className="font-bold opacity-40 text-[2.4vw]">Number</p>
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold text-[4vw] text-[#094446]">80</h3>
            <p className="font-bold opacity-40 text-[2.4vw]">Number</p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col">
            <h3 className="font-bold text-[4vw] text-[#094446]">₹ 400k</h3>
            <p className="font-bold opacity-40 text-[2.4vw]">Number</p>
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold text-[4vw] text-[#094446]">₹ 90k</h3>
            <p className="font-bold opacity-40 text-[2.4vw]">Number</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
                </section>
    </>
  )
}

export default Orderandpays
