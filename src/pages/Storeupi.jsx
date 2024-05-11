import React, { useState } from 'react';
import tnnentLogo from '../images/Frame 397.png';
import backButton from '../images/back.png';
import frame398 from '../images/Frame 398.png';
import { Link } from 'react-router-dom';


function StoreUPI() {
    const [username, setUsername] = useState('');
    const [upiId, setUpiId] = useState('');
    const [invalidUpi, setInvalidUpi] = useState(false);

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handleUpiIdChange = (e) => {
        setUpiId(e.target.value);
    };

    const handleContinueClick = () => {
        
        if (upiId === '') {
            setInvalidUpi(true);
        } else {
            
        }
    };

    return (
        <>
        <div className='forscroll'>
        <section className="md:hidden">
            <div className="w-full h-[12vh] flex p-[20px] justify-between sticky z-50 mb-[12vh]">
                <div className="flex justify-center items-center gap-2">
                    <img src={tnnentLogo} alt="tnnent-logo" className="w-10" />
                </div>
                <div className="flex justify-center items-center gap-4">
                    <img className="w-12" src={backButton} alt="" />
                </div>
            </div>

            <div className="mx-5">
                <p className="font-extrabold text-[7vw]">Enter Your UPI Details</p>
                <p className="text-[#636363] text-[4vw]">You will receive your store payment directly to your UPI account</p>
            </div>

            <div className="mx-5 my-3 px-3 py-2 border border-[#848484] rounded-lg border-dotted mt-[3vh]">
                <p className="text-[#094446] text-[3vw] font-extrabold">Username</p>
                <input type="text" value={username} onChange={handleUsernameChange} className="text-[#636363] text-[3vw] border-0 border-[#000000] px-0.5 py-1 outline-none bg-[#fff]" />
            </div>

            <div className="mx-5 my- px-3 py-2 border border-[#848484] rounded-lg border-dotted mt-[3vh]">
                <p className="text-[#094446] text-[3vw] font-extrabold">UPI ID</p>
                <input type="email" value={upiId} onChange={handleUpiIdChange} className="text-[#636363] text-[3vw] border-0 border-[#000000] px-0.5 py-1 outline-none bg-[#fff]" />
            </div>

            {invalidUpi && (
                <div className="mx-6 my-5 flex items-center">
                    <img src={frame398} alt="" className="w-[4vw] h-[4vw] mr-1" />
                    <p className="text-[3vw] text-[#636363]">There's a problem with your verification. Try again</p>
                </div>
            )}

            <div className="parent flex justify-center items-center h-[350px] relative">
                <div className="absolute bottom-[10px]">
                    <Link to='/storelocation'>
                    <button onClick={handleContinueClick} className="px-[9vh] py-3 bg-[#094446] font-extrabold text-white border rounded-[15px]">
                        CONTINUE
                    </button>
                    </Link>
                </div>
            </div>
        </section>
        </div>
        </>
    );
}

export default StoreUPI;
