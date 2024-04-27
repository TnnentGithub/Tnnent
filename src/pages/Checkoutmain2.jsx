import React from 'react'
import Checkoutcards from '../components/Checkoutcards.jsx'
import car from '../images/Vector (16).svg';
import globe from '../images/Vector (15).svg';
import coupon from '../images/Vector (11).svg';
import { Link } from 'react-router-dom';

function Checkoutmain2() {
  return (
    <>
    <div className='forscroll'>
        <section className='lg:hidden'>
        <div className="fixed bg-[#fff] z-60 tnennt">
                
                <div className="flex justify-between items-center px-3 mt-6">
                <div className="flex flex-col">
            <div className="flex gap-2 items-center">
                <h2 className="font-bold text-[6vw]">CHECKOUT</h2>
                <div className="rounded-full bg-red-500 w-[1vh] h-[1vh] "></div>
            </div>
            
        </div>
        <div className="rounded-full bg-[#F5F5F5] w-[12vw] h-[12vw] flex justify-center items-center absolute left-[85%]">
            <svg width="40%" height="40%" viewBox="0 0 18 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="15.6315" y1="27.347" x2="1.96744" y2="13.6829" stroke="#272727" strokeWidth="4.09708"/>
                <line x1="16.2493" y1="2.30791" x2="4.66085" y2="13.8964" stroke="#272727" strokeWidth="4.09708"/>
                </svg>                
        </div>
                </div>
                <div className='flex gap-1 items-center mt-12 ml-[68%]'>
                    <h2 className='font-bold text-[3.3vw]'>Order ID:</h2>
                    <p className='text-[3vw] font-bold opacity-50'>9099878</p>
                </div>
                </div>
                <div className='mt-[35%]'>
                <Checkoutcards/>
                <Checkoutcards/>
                </div>
                <div className='flex justify-center'>
                <div className='mt-6 rounded-3xl shadow-md w-[93vw]  bg-[#ffffff] px-5 py-3'>
                    <div className='flex justify-between items-center'>
                        <div className='flex flex-col gap-1'>
                            <h2 className='font-bold text-[4vw]'>Provided Middlemen:</h2>
                            <h2 className='text-[3.8vw] opacity-70'>MR. Subhajit Bhattacharjee</h2>
                        </div>
                        <div className='rounded-full w-[10.5vw] h-[10.5vw] bg-green-200'></div>
                    </div>
                    <div className='flex gap-3 items-center mt-4'>
                    <div className='w-[17vw] h-[17vw] bg-green-200 rounded-2xl'></div>
                    <div className='flex flex-col'>
                        <h2 className='font-bold text-[5vw]'>Jain Brothers</h2>
                        <div className='flex gap-2'>
                           <img className='w-[3.1vw]' src={globe} alt="" />
                           <h2 className='text-[2.7vw] opacity-55'>jainbrothers.tnennt.store</h2>
                        </div>
                    </div>
                    
                </div>
                <div className='flex gap-3 items-center mt-4'>
                    <div className='w-[17vw] h-[17vw] bg-green-200 rounded-2xl'></div>
                    <div className='flex flex-col'>
                        <h2 className='font-bold text-[5vw]'>Jain Brothers</h2>
                        <div className='flex gap-2'>
                           <img className='w-[3.1vw]' src={globe} alt="" />
                           <h2 className='text-[2.7vw] opacity-55'>jainbrothers.tnennt.store</h2>
                        </div>
                    </div>
                    
                </div>
                    <div className='flex gap-2 mt-6 items-center'>
                        <img className='w-[6vw]' src={car} alt="" />
                        <h2 className='text-[3.8vw] opacity-70'>Delivery in 45 Minutes</h2>
                    </div>
                </div>
            </div>
            <div className='flex justify-between mt-6 px-3'>
            <div className='w-[45vw] h-[17vw] border-2 border-[#E3E3E3] rounded-[40vw] flex justify-between items-center'>
                    <div className='w-[14vw] h-[14vw] rounded-full bg-[#F3F3F3] ml-1 flex justify-center items-center'>
                        <img className='w-[4vw]' src={coupon} alt="" />
                      </div>
                      <div className='flex flex-col mr-5 gap-1'>
                        <h2 className='text-[3.2vw] font-bold '>Coupons</h2>
                        <p className='text-[2.3vw] text-[#838383] '>Orders, payments &<br/>cupons</p>
                      </div>
                    </div>
                    <div className='w-[45vw] h-[17vw] border-2 border-[#E3E3E3] rounded-[40vw] flex justify-between items-center'>
                        <h2 className='ml-3 text-[3.2vw] font-bold'>Enter Code:</h2>
                        <input className='focus:outline-none text-[3vw] mr-2 w-[20vw]' type="text" />
                    </div>
                    </div>
                    <h2 className='ml-5 mt-4 font-bold text-[4.2vw]'>Summary</h2>
                    <div className='items-center mt-5 px-5 flex justify-between'>
                      <h2 className='font-bold text-[3.5vw] opacity-55'>Subtotal</h2>
                      <h2 className='font-bold text-[3.5vw] opacity-75'>₹200</h2>
                    </div>
                    <div className='items-center mt-3 px-5 flex justify-between'>
                      <h2 className='font-bold text-[3.5vw] opacity-55'>Tax</h2>
                      <h2 className='font-bold text-[3.5vw] opacity-75'>₹90</h2>
                    </div>
                    <div className='items-center mt-3 px-5 flex justify-between'>
                      <h2 className='font-bold text-[3.5vw] opacity-55'>Delivery Charge</h2>
                      <h2 className='font-bold text-[3.5vw] opacity-75'>₹90</h2>
                    </div>
                    <div className='items-center mt-3 px-5 flex justify-between'>
                      <h2 className='font-bold text-[3.5vw] opacity-55'>Discount</h2>
                      <h2 className='font-bold text-[3.5vw]  text-red-500'>₹80</h2>
                    </div>
                    <div className='justify-center flex'>
                    <hr className='mt-2 w-[90vw]'/>

                    </div>
                    <div className='flex justify-between px-5 mt-2 mb-24'>
                        <h2 className='font-bold text-[5.4vw]'>Total</h2>
                        <h2 className='font-bold text-[5.4vw]'>₹ 210</h2>
                    </div>
                    <div className="fixed bottom-2 left-0 right-0 flex justify-center items-center">
                                <Link to="" className="flex bg-[#094446] rounded-xl text-xl p-4 w-[93vw] md:hidden text-white justify-center font-bold items-center">
                                Pay ₹210
                                </Link>
                            </div>
        </section>
    </div>
    </>
  )
}

export default Checkoutmain2
