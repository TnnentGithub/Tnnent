import React from 'react';
import tnnentLogo from '../images/Frame 397.png';
import backIcon from '../images/back.png';
import emailIcon from '../images/EMAIL.png';
import { Link } from 'react-router-dom';


const SelectEmailPage = () => {
    return (
        <>
        <div className='forscroll'>
        <section className="lg:hidden">
            <div className="w-full h-[12vh] flex p-[20px] justify-between sticky z-50 mb-[12vh]">
                <div className="flex justify-center items-center gap-2">
                    <img src={tnnentLogo} alt="tnnent-logo" className="w-10" />
                </div>
                <div className="flex justify-center items-center gap-4">
                    <img className="w-12" src={backIcon} alt="" />
                </div>
            </div>

            <div className="mx-5">
                <p className="font-extrabold text-[7vw]">Enter Your Business/Store mail</p>
                <p className="text-[#636363] text-[4vw]">People can search for your store using this domain</p>
            </div>

            <div className="mx-5 my-3 px-3 py-2 border border-[#848484] rounded-lg border-dotted mt-[3vh] bg-[#]">
                <p className="text-[#094446] text-[4vw] font-extrabold">Email</p>
                <div className="flex justify-between">
                    <input type="email" id="email-input" className="text-[4vw] border-0 border-[#000000] px-0.5 py-1 outline-none" />
                    <img className="w-[4.5vw] h-[4vw]" src={emailIcon} alt="" />
                </div>
            </div>

            <div className="parent flex justify-center items-center relative h-[440px]">
                <div className="absolute bottom-[10px]">
                    <div className="flex gap-1 pb-2">
                        <input className="w-[3vw]" type="checkbox" name="" id="" />
                        <p className="text-[3vw]">I agree with the <span className="text-[#094446]">Terms and Conditions</span></p>
                    </div>
                    <Link to='/storename'>
                    <button className="px-[9vh] py-3 bg-[#094446] text-[4vw] font-extrabold text-white border rounded-[15px]">
                        CONTINUE
                    </button>
                    </Link>
                </div>
            </div>
        </section>
        </div>
        </>
    );
};

export default SelectEmailPage;
