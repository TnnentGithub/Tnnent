import React from 'react';
import tnnentLogo from '../images/Frame 397.png';
import backButton from '../images/back.png';
import frame398 from '../images/Frame 398.png';
import { Link } from 'react-router-dom';


function StorePayment() {
    return (
        <>
        <div className='forscroll'>
        <section className="lg:hidden">
            <div className="w-full h-[12vh] flex p-[20px] justify-between sticky z-50">
                <div className="flex justify-center items-center gap-2">
                    <img src={tnnentLogo} alt="tnnent-logo" className="w-10" />
                </div>
                <div className="flex justify-center items-center gap-4">
                    <img className="w-12" src={backButton} alt="" />
                </div>
            </div>

            <div className="flex flex-col items-center justify-center">
                <p className="font-extrabold text-[8vw] text-center mx-10">Pay Once & Own Your Store Forever</p>
                <p className="text-[#636363] text-center mt-4 mx-12">Get instant access to your personalized store and list unlimited items to your digital space</p>
            </div>

            <div className="flex flex-col mx-10 mt-[90px] gap-3">
                <div className="flex">
                    <img src={frame398} className="w-[5vw] h-[5vw]" alt="" />
                    <p className="text-[#636363] ml-2 text-[3.5vw]">Lifetime Store Access</p>
                </div>
                <div className="flex">
                    <img src={frame398} className="w-[5vw] h-[5vw]" alt="" />
                    <p className="text-[#636363] ml-2 text-[3.5vw]">Provided middlemen for item delivery</p>
                </div>
                <div className="flex">
                    <img src={frame398} className="w-[5vw] h-[5vw]" alt="" />
                    <p className="text-[#636363] ml-2 text-[3.5vw]">Free store domain</p>
                </div>
                <div className="flex">
                    <img src={frame398} className="w-[5vw] h-[5vw]" alt="" />
                    <p className="text-[#636363] ml-2 text-[3.5vw]">Free marketing & advertisement space</p>
                </div>
                <div className="flex">
                    <img src={frame398} className="w-[5vw] h-[5vw]" alt="" />
                    <p className="text-[#636363] ml-2 text-[3.5vw]">Unlimited coupon generator for your store</p>
                </div>
                <div className="flex">
                    <img src={frame398} className="w-[5vw] h-[5vw]" alt="" />
                    <p className="text-[#636363] ml-2 text-[3.5vw]">Print store analytics in excel, pdf or jpeg</p>
                </div>
            </div>

            <div className="parent flex justify-center items-center relative h-[300px]">
                <div className="absolute bottom-[10px]">
                    <p className="text-[#636363] text-center text-[2.2vw]">Hurry up! Register now and start your digital Store</p>
                    <p className="text-[#094446] text-center text-[2.2vw]">Join Our Tnennt Community</p>
                    <Link to='/storeprofile'>
                    <button className="px-[9vh] py-3 bg-[#094446] text-[4vw] font-extrabold text-white border rounded-[15px]">
                        Pay ₹2999.03
                    </button>
                    </Link>
                </div>
            </div>
        </section>
        </div>
        </>
    );
}

export default StorePayment;
