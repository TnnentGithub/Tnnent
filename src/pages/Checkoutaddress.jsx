import React from 'react'

function Checkoutaddress() {
  return (
  <>
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
                </div>
    <div className='flex justify-center mt-[20%]'>
      <div className='bg-[#FFFFFF] w-[93vw] mt-6 rounded-3xl shadow-xl '>
        <div className='flex justify-between items-center mt-5'>
            <h2 className='font-bold ml-5  text-[5.8vw] mt-1'>Kunal Deb</h2>
            <button className='bg-transparent border-2 border-[#094446] px-5 py-1 mt-1 rounded-full text-[#094446] text-[3.5vw] font-bold mr-5'>Home</button>
        </div>
        <div className='flex flex-col ml-5 mt-4'>
            <h2 className='text-[3.6vw] text-[#727272]'>Shyamaprasad Road House No. 3</h2>
            <h2 className='text-[3.6vw] text-[#727272]'>Karimganj Shyamaprasad Road</h2>
            <h2 className='text-[3.6vw] text-[#727272]'>Karimganj, Assam 788710</h2>
            <div className='flex gap-2 mt-4'>
            <h2 className='text-[3.6vw] text-[#727272]'>Mobile:</h2>
            <h2 className='text-[3.6vw] font-bold'>9395593877</h2>
            </div>
        </div>
        <div className='flex justify-center'>
        <button className='mt-9 mb-4 px-[23vw] py-3 text-[3.6vw] font-bold border-2 border-[#E3E3E3] rounded-3xl'>Change Your Address</button>
        </div>
      </div>
    </div>
    <div className='flex justify-center'>
        <div className='bg-red-200 w-[93vw] mt-6 rounded-3xl shadow-xl h-[45vw]'>
          <div className='flex justify-between items-center'>
            <div className='flex justify-between items-center gap-4'>
                <div className='ml-4 mt-6 w-[27vw] h-[31vw] bg-green-200 rounded-md'></div>
                <div className='flex flex-col mt-7'>
                    <h2 className='font-bold text-[3.8vw]'>Nikon Camera</h2>
                    <button className='px-8 py-1 absolute text-[3vw] border-[1px] border-[#D0D0D0] mt-7 '>XS</button>
                    <div className='flex justify-between gap-3 items-center mt-12'>
                        <div className='flex gap-1'>
                        <h2 className='font-bold text-[5vw]'>₹</h2>
                        <h2 className='font-bold text-[5vw]'>200</h2>
                        </div>
                        <h2 className='font-bold text-[3.3vw] text-red-600 mt-1'>40% Discount</h2>
                    
                    </div>

                        <h2 className='font-bold text-[3.2vw] opacity-50 line-through'>M.R.P ₹700</h2>

                </div>
            </div>
            <div className='flex flex-col'>
                <h2 className='mr-4 font-bold text-[2.9vw]'>QUANTITY</h2>
                <div className='flex justify-around border-2'>
                    <h2>+</h2>
                    <h2>1</h2>
                    <h2>-</h2>
                </div>
            </div>
          </div>
        </div>
    </div>
  </section>
  </> 
  )
}

export default Checkoutaddress
