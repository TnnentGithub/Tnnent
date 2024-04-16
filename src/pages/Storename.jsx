import React from 'react';
import tnnentLogo from '../images/Frame 397.png';
import backButton from '../images/back.png';

function SelectStoreName() {
    return (
        <>
        <div className='forscroll'>
        <section className="lg:hidden">
            <div className="w-full h-[12vh] flex p-[20px] justify-between sticky z-50 mb-[12vh]">
                <div className="flex justify-center items-center gap-2">
                    <img src={tnnentLogo} alt="tnnent-logo" className="w-10" />
                </div>
                <div className="flex justify-center items-center gap-4">
                    <img className="w-12" src={backButton} alt="" />
                </div>
            </div>

            <div className="mx-5">
                <p className="font-extrabold text-[7vw]">Your Store Name</p>
                <p className="text-[#636363] text-[4vw]">You can change it later from your store settings</p>
            </div>

            <div className="mx-5 my-3 px-3 py-2 border border-[#848484] rounded-lg border-dotted mt-[3vh]">
                <p className="text-[#094446] text-[3vw] font-extrabold">Store Name</p>
                <input type="text" id="phone-input" className="text-[#636363] text-[4vw] border-0 border-[#000000] px-0.5 py-1 outline-none bg-[#fff]" />
            </div>

            <div className="parent flex justify-center items-center relative h-[440px]">
                <div className="absolute bottom-[10px]">
                    <button className="px-[9vh] py-3 bg-[#094446] text-[3vw] font-extrabold text-white border rounded-[15px]">
                        CONTINUE
                    </button>
                </div>
            </div>
        </section>
        </div>
        </>
    );
}

export default SelectStoreName;
