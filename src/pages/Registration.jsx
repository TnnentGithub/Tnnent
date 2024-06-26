import React from 'react';
import tnnentLogo from '../images/Frame 397.png';
import backIcon from '../images/back.png';
import flagIcon from '../images/flag.png';
import checkIcon from '../images/check.png';
import { Link } from 'react-router-dom';

const RegistrationPage = () => {
    const handleInputChange = (event) => {
        event.target.value = event.target.value.replace(/[^0-9]/g, '');
    };

    return (
        <>
        <div className='forscroll'>
        <section className="lg:hidden">
            <div className="w-full h-[12vh] flex p-[20px] justify-between sticky z-50 mb-[9vh]">
                <div className="flex justify-center items-center gap-2">
                    <img src={tnnentLogo} alt="tnnent-logo" className="w-10" />
                </div>
                <div className="flex justify-center items-center gap-4">
                    <img className="w-12" src={backIcon} alt="" />
                </div>
            </div>

            <div className="ml-7 mb-[5vh]">
                <p className="font-extrabold text-[7vw]">Registration</p>
                <p className="text-[#636363] text-[4vw]">We will send a code (via sms text message) to your phone number</p>
            </div>

            <div className="border border-[#848484] rounded-xl border-dotted h-48 mt-10 m-8 flex items-center justify-center bg-[#E1E1E1]">
                <div className="flex items-center gap-2">
                    <img className="w-10" src={flagIcon} alt="flag" />
                    <p className="text-[#636363] text-[5vw]">+91</p>
                    <div className="relative border-black">
                        <input type="number" id="phone-input" className="w-[30vw] ml-3 pl-[3vw] border-b-2 border-[#636363] py-1 outline-none bg-[#E1E1E1] text-[5vw]" maxLength="10" onChange={handleInputChange} />
                    </div>
                </div>
            </div>
           <Link to= '/otpverify'>
                <div className="w-12 h-12 bg-[#094446] rounded-full mt-3 mx-auto flex justify-center items-center">
                    <img src={checkIcon} alt="" className="w-[4vw]" />
                </div>
                </Link>
        </section>
        </div>
        </>
    );
};

export default RegistrationPage;
