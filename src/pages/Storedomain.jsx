import React, { useState } from 'react';
import tnnentLogo from '../images/Frame 397.png';
import backIcon from '../images/back.png';
import frame398Icon from '../images/Frame 398.png';
import frame399Icon from '../images/Frame 399.png';
import { Link } from 'react-router-dom';

const SelectStoreDomainPage = () => {
    const [domain, setDomain] = useState('');
    const [domainExists, setDomainExists] = useState(true); // Change to false if domain doesn't exist

    const handleDomainChange = (e) => {
        setDomain(e.target.value);
    };

    const handleContinueClick = () => {
        // Handle continue button click event
    };

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
                <p className="font-extrabold text-[7vw]">Enter Your Store Domain</p>
                <p className="text-[#636363] text-[4vw]">People can search for your store using this domain</p>
            </div>

            <div className="mx-5 my-3 px-3 py-2 border border-[#848484] rounded-lg border-dotted mt-[3vh]">
                <p className="text-[#094446] text-[3vw] font-extrabold">Store Domain</p>
                <div className="flex flex-row justify-between items-center">
                    <input type="text" value={domain} onChange={handleDomainChange} className="text-[#636363] text-[3vw]  border-0 border-[#000000] px-0.5 py-1 outline-none bg-[#fff]" />
                    <p className="text-[#848484] font-bold text-[3vw]">.tnnent.store</p>
                </div>
            </div>

            {domainExists && (
                <div className="mx-6 my-5 flex items-center">
                    <img src={frame398Icon} alt="" className="w-[3vw] mr-1" />
                    <p className="text-[3vw] text-[#636363]">You can own this store domain</p>
                </div>
            )}

            {!domainExists && (
                <div className="mx-6 my-5 flex items-center">
                    <img src={frame399Icon} alt="" className="w-[3vw] mr-1" />
                    <p className="text-[3vw] text-[#636363]">Already Registered Store</p>
                </div>
            )}

            <div className="parent flex justify-center items-center relative h-[440px]">

                <div className="absolute bottom-[10px]">
                    <Link to='/selectcategory'>
                    <button onClick={handleContinueClick} className="px-[9vh] py-3 bg-[#094446] text-[3vw] font-extrabold text-white border rounded-[15px]">
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

export default SelectStoreDomainPage;
