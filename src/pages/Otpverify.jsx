import React, { useState } from 'react';
import tnnentLogo from '../images/Frame 397.png';
import backButton from '../images/back.png';
import eastImage from '../images/east.png';
import { Link } from 'react-router-dom';

function Otpverify() {
    const [verificationCode, setVerificationCode] = useState(['', '', '', '']);

    const handleChange = (index, value) => {
        const updatedVerificationCode = [...verificationCode];
        updatedVerificationCode[index] = value;

        if (value === '' && index > 0) {
            document.getElementById(`digit${index}`).focus();
        }
    
        setVerificationCode(updatedVerificationCode);

        if (value.length === 1 && index < 3) {
            document.getElementById(`digit${index + 2}`).focus();
        }
    };
    

    return (
        <>
        <div className='forscroll'>
        <section className="lg:hidden">
            <div className="w-full h-[12vh] flex p-[20px] justify-between sticky z-50 mb-[9vh]">
                <div className="flex justify-center items-center gap-2">
                    <img src={tnnentLogo} alt="tnnent-logo" className="w-10" />
                </div>
                <a href="./registration.html">
                    <div className="flex justify-center items-center gap-4">
                        <img className="w-12" src={backButton} alt="" />
                    </div>
                </a>
            </div>

            <div className="ml-7 mb-[5vh]">
                <p className="font-extrabold text-[7vw]">Verification</p>
                <p className="text-[#636363] text-[4vw]">Enter it in the verification code box and click continue</p>
            </div>

            <div className="border border-[#848484] bg-[#E1E1E1] rounded-xl border-dotted h-48 mt-10 m-8 flex items-center justify-center">
                <div className="max-w-sm mx-auto">
                    <div className="flex space-x-2">
                        {verificationCode.map((value, index) => (
                            <input
                                key={index}
                                type="text"
                                id={`digit${index + 1}`}
                                name={`digit${index + 1}`}
                                maxLength="1"
                                className="bg-[#E1E1E1] w-10 py-2 px-1 border-b-2 border-[#636363] focus:outline-none focus:border-red-500 text-[5vw]"
                                value={value}
                                onChange={(e) => handleChange(index, e.target.value)}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-12 h-12 bg-[#094446] rounded-full mt-3 mx-auto flex items-center">
                <Link to='/storeemail'>
                    <img src={eastImage} alt="" className="w-6 ml-3" />
           </Link>
            </div>
        </section>
        </div>
        </>
    );
}

export default Otpverify;
