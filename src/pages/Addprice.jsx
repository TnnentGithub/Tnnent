import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import back from '../images/images3/back.png'
import frame397 from '../images/images3/Frame 397.png';
import frame404 from '../images/images3/Frame 404.png';
import frame402 from '../images/images3/Frame 402.png';
import frame403 from '../images/images3/Frame 403.png';
import frame405 from '../images/images3/Frame 405.png';
import frame407 from '../images/images3/Frame 407.png'

function AddPriceToOptionals() {
    const [pounds, setPounds] = useState([
        { id: 1, name: '1 Pound', defaultOptional: 'Default Optional', showDetails: false },
        { id: 2, name: '1.5 Pounds', defaultOptional: 'Default Optional', showDetails: false },
    ]);

    const toggleDetails = (id) => {
        setPounds(pounds.map(pound => {
            if (pound.id === id) {
                return { ...pound, showDetails: !pound.showDetails };
            }
            return pound;
        }));
    };
    const removePound = (id) => {
        setPounds(pounds.filter(pound => pound.id !== id));
    };
    return (
        <section className="lg:hidden">
            <div className="w-full h-[12vh] flex p-[20px] justify-between">
                <div className="flex justify-center items-center gap-4">
                    <img className="w-12" src={frame397} alt="" />
                </div>
                <div className="flex justify-center items-center gap-4">
                    <Link to="/createpage"><img className="w-12" src={back} alt="" /></Link>
                </div>
            </div>

            <p className="mx-5 font-extrabold text-[5.5vw]">Add Price To Your Optionals</p>
            <p className="mx-5 text-[#636363] text-[3.5vw] pb-3">All the optional will have the default pricing entered while adding product. </p>

            <div className="mx-5 my-3 p-3 flex flex-row border border-[#094446] border-dotted rounded-lg items-center gap-2 w-[37%] mb-[30px]">
                <img className="w-6" src={frame407} alt="" />
                <p className="text-[#094446] text-[13px] font-bold">Add Optional</p>
            </div>

            <div className="flex justify-center items-center ">
                <hr className="w-[95%]" style={{ borderTop: '1.5px dashed #848484' }} />
            </div>

            <div className="flex justify-between mx-5 my-5 mb-12">
                <div>
                    <p className="text-[4vw] font-extrabold">1.5 Pounds</p>
                    <p className="text-[3vw] text-[#646464] font-bold">Default Optional</p>
                </div>
                <button className="px-5 py-2 bg-[#343434] text-[4vw] text-white border rounded-lg font-bold">Change</button>
            </div>

            {pounds.map(pound => (
                <div key={pound.id}>
                    <div className="flex justify-between mx-5 my-5">
                        <p className="text-[4vw] text-[#094446] font-bold">{pound.name}</p>
                        <div className="flex justify-center items-center gap-9">
                            <button className="px-5 py-1 bg-[#094446] text-[3.5vw] text-white border rounded-lg font-bold" onClick={() => toggleDetails(pound.id)}>{pound.showDetails ? 'Hide' : 'Price'}</button>
                            <img className="w-6 h-7" src={frame404} alt="" onClick={() => removePound(pound.id)} />
                        </div>
                    </div>
                    {pound.showDetails && (
                        <div className="flex flex-row items-center justify-center gap-1 my-2" id={`myDIV${pound.id}`}>
                            <div className="my-3 px-3 py-2 border-dotted border-[2px] rounded-[10px] border-[#848484] flex justify-right mb-[30px] flex-row gap-1">
                                <img className="h-5" src={frame403} alt="" />
                                <input type="text" id="phone-input" className="text-[#989898] w-[60px] text-[11px] font-bold border-0 border-[#000000] outline-none bg-[#ffffff]" maxLength="6" placeholder="Discount" onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')} />
                            </div>
                            <div className="my-3 px-3 py-2 border-dotted border-[2px] rounded-[10px] border-[#848484] flex justify-right mb-[30px] flex-row gap-1">
                                <img className="h-3" src={frame402} alt="" />
                                <input type="text" id="phone-input" className="text-[#989898] w-[60px] text-[11px] font-bold border-0 border-[#000000] outline-none bg-[#ffffff]" maxLength="6" placeholder="MRP Price" onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')} />
                            </div>
                            <div className="my-3 px-3 py-2 border-dotted border-[2px] rounded-[10px] border-[#848484] flex mb-[30px] flex-row gap-1 items-center justify-center">
                                <img className="h-5" src={frame405} alt="" />
                                <input type="text" id="phone-input" className="text-[#989898] w-[60px] text-[11px] font-bold border-0 border-[#000000] outline-none bg-[#ffffff]" maxLength="6" placeholder="Item Price" onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')} />
                            </div>
                        </div>
                    )}
                </div>
            ))}

<button className="text-[#ffffff] text-[4vw] py-3 px-20 bg-[#000000]  rounded-full font-bold fixed bottom-4 left-[23%]">
        Confirm
    </button>
        </section>
    );
}

export default AddPriceToOptionals;
