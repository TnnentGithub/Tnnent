import React, { useState, useEffect } from 'react';
import image1 from '../images/image 1.svg';
import vector1 from '../images/Vector (1).svg';
import vector2 from '../images/Vector (2).svg';
import movieEdit from '../images/movie_edit (1).svg';
import './style.css';

function CommunityPost() {
    const [category, setCategory] = useState('promotion');

    const [promotionActive, setPromotionActive] = useState(true);
    const [saleActive, setSaleActive] = useState(false);

    useEffect(() => {
        showCategory(category);
    }, [category]);

    
    function showCategory(category) {
        if (category === 'promotion') {
            return (
                <div>
                    <h2 className="font-extrabold text-[5vw] mt-16 ml-3">Add Images</h2>
                    <div className="flex ml-4 items-center mt-6 gap-3">
                        <div className="w-[25vw] h-[25vw] border-2 border-dashed flex justify-center items-center rounded-2xl border-[#848484]">
                            <img className="w-[11vw]" src={vector1} alt="" />
                        </div>
                        <p className="text-[3.2vw]">(Add more than one image of the product)</p>
                    </div>
                    <h2 className="font-extrabold text-[5vw] mt-7 ml-3">Caption</h2>
            <div className="flex justify-center">
                <div className="w-[93vw] h-[34vw] mt-6 border-2 border-dashed  rounded-2xl border-[#848484] flex flex-col">
                    <h2 className="font-bold ml-3 mt-1 text-[3.7vw] text-[#545454]">Description</h2>
                    <div className="flex gap-2">
                        <img className="ml-4 mt-3 w-[6vw]" src={movieEdit} alt="" />
                        <input className="mt-2 text-[4vw] focus:outline-none" type="text" placeholder="Write your caption" />
                    </div>
                </div>
            </div>
            <p className="mb-32 ml-[82%] mt-1 text-[3.6vw]">(0/ 700)</p>
            </div>
            );
        } else if (category === 'sale') {
            return (
                <div>
                    <h2 className="font-extrabold text-[5vw] mt-16 ml-3">Add Images</h2>
                    <div className="flex ml-4 items-center mt-6 gap-3">
                <div className="w-[25vw] h-[25vw] border-2 border-dashed flex justify-center items-center rounded-2xl border-[#848484]">
                    <img className="w-[11vw]" src={vector1} alt="" />
                </div>
                <p className="text-[3.2vw]">(Add more than one image of the product)</p>
            </div>
            <div className="flex items-center justify-between mt-12">
                <h2 className="font-extrabold text-[5vw] ml-3">Item Budget</h2>
                
            </div>
            <div className="w-[55vw] mt-6 ml-3 border-2 border-dashed flex rounded-2xl border-[#848484]  flex-col">
                <h2 className="font-bold ml-3 mt-1 text-[3.7vw] text-[#545454]">Amount</h2>
                <div className="flex mt-3 gap-2 ml-4 py-1 mb-2">
                    <img className="w-[4vw]" src={vector2} alt="" />
                    <input id="amountInput" className="focus:outline-none text-[3.8vw] w-[32vw]" type="number"  placeholder="₹200" />
                </div>
            </div>
            <p className="ml-4 mt-3 text-[3.4vw] opacity-50">(Add budget of your product)</p>
            <h2 className="font-extrabold text-[5vw] mt-7 ml-3">Caption</h2>
            <div className="flex justify-center">
                <div className="w-[93vw] h-[34vw] mt-6 border-2 border-dashed  rounded-2xl border-[#848484] flex flex-col">
                    <h2 className="font-bold ml-3 mt-1 text-[3.7vw] text-[#545454]">Description</h2>
                    <div className="flex gap-2">
                        <img className="ml-4 mt-3 w-[6vw]" src={movieEdit} alt="" />
                        <input className="mt-2 text-[4vw] focus:outline-none" type="text" placeholder="Write your caption" />
                    </div>
                </div>
            </div>
            <p className="mb-32 ml-[82%] mt-1 text-[3.6vw]">(0/ 700)</p>
                </div>
            );
        }
    }

    return (
        <section className="lg:hidden">
            <div className="flex justify-between mt-6">
                <h2 className="font-extrabold text-[5vw] ml-4 mt-4">COMMUNITY POST<span className="text-red-500"> &bull;</span></h2>
                <div className="w-[12.7vw] h-[12.7vw] bg-[#F5F5F5] rounded-full flex-shrink-0 flex justify-center items-center mr-4 ">
                    <img className="w-[2.5vw] mr-[4.1px]" src={image1} alt="" />
                </div>
            </div>
            <h2 className="font-extrabold text-[5vw] mt-8 ml-3">Post Type</h2>
            <div className="flex gap-3 ml-3 mt-6 mb-12">
                <button className={`btn px-3 py-3  border-2 border-[#343434] text-[#737373] font-bold text-[3.5vw] rounded-3xl category-button ${category === 'promotion' ? 'active' : ''}`} onClick={() => setCategory('promotion')}>
                    Promotion & Marketing
                </button>
                <button className={`btn px-3 py-1  border-2 border-[#343434] text-[#737373] font-bold text-[3.5vw] rounded-3xl category-button ${category === 'sale' ? 'active' : ''}`} onClick={() => setCategory('sale')}>
                    Sale & Demand
                </button>
            </div>
            <div id="categorySection">
                {showCategory(category)}
            </div>
        </section>
    );
}

export default CommunityPost;

