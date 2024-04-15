import React, { useState } from 'react';
import tnnentLogo from '../images/Frame 397.png';
import backIcon from '../images/back.png';
import './style.css';

const SelectCategory = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);

    const toggleCategory = (category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter((c) => c !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    const categories = ['Clothing', 'Grocery', 'Electronics', 'Restaurant','Book Store','Bakery','Beauty Apparel','Cafe','Florist','Footwear','Accessories','Stationary','Eyewear','Watch','Musical Instrument','Sports'];

    return (
        <>
        <div className='forscroll'>
        <section className="lg:hidden">
            <div className="w-full h-[12vh] flex p-[20px] justify-between sticky z-50 mb-[1vh]">
                <div className="flex justify-center items-center gap-2">
                    <img src={tnnentLogo} alt="tnnent-logo" className="w-10" />
                </div>
                <a href="./registration.html">
                    <div className="flex justify-center items-center gap-4">
                        <img className="w-12" src={backIcon} alt="" />
                    </div>
                </a>
            </div>

            <div className="mx-5 mb-[5vh]">
                <p className="font-extrabold text-[7vw]">Choose Your Category</p>
                <p className="text-[#636363] text-[4vw]">Select one category which describes your store</p>
            </div>

            {/* Repeat the category selection divs for each category */}
            {/* Example: */}
            
            <div className="mx-5 mb-24">
                {categories.reduce((rows, category, index) => {
                    if (index % 2 === 0) rows.push([]);
                    rows[rows.length - 1].push(
                        <div key={category} className="w-[50%] my-5">
                            <div
                                className={`p-3 flex items-center border-dotted rounded-lg gap-2 border-[2px] border-[#636363] ${
                                    selectedCategories.includes(category) && 'bg-[#094446] text-white'
                                }`}
                                onClick={() => toggleCategory(category)}
                            >
                                <div className="checkbox-wrapper-13">
                                    <input
                                        id={`c1-${index}`}
                                        type="checkbox"
                                        checked={selectedCategories.includes(category)}
                                        onChange={() => toggleCategory(category)}
                                    />
                                </div>
                                <p className="text text-[12px]">{category}</p>
                            </div>
                        </div>
                    );
                    return rows;
                }, []).map((row, index) => (
                    <div key={index} className="flex justify-center items-center gap-8">
                        {row}
                    </div>
                ))}
            </div>


            {/* Continue button */}
            
                
                    <button className="absolute bottom-[3%] left-[20%] px-[9vh] py-3 bg-[#094446] font-extrabold text-white border rounded-[15px]">
                        CONTINUE
                    </button>
                
            
        </section>
        </div>
        </>
    
    );
};

export default SelectCategory;
