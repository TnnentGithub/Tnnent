import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import frame397 from '../images/images3/Frame 397.png';
import frame407 from '../images/images3/Frame 407.png';
import frame400 from '../images/images3/Frame 400.png';
import frame409 from '../images/images3/Frame 409.png';
import back from '../images/images3/back.png'

const getNextColor = (() => {
    const colors = ["#DDF1EF", "#EAE6F6", "#EFEFEF", "#EFF6E6", "#ffc8dd"];
    let colorIndex = 0;
    
    return () => {
        const color = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
        return color;
    };
})();

function CreateProductPage2() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [newCategoryName, setNewCategoryName] = useState('');
    const [categories, setCategories] = useState([]);

    const handleCategoryClick = (index) => {
        setSelectedCategory(index);
    };

    const handleInputChange = (e) => {
        setNewCategoryName(e.target.value);
    };

    const handleAddCategory = () => {
        if (newCategoryName.trim() !== '') {
            const newCategory = {
                name: newCategoryName.trim(),
                color: getNextColor(),
                count: "0"
            };
            setCategories([...categories, newCategory]);
            setNewCategoryName('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAddCategory();
        }
    };

    return (
        <>
        <div className='forscroll'>
        <section className="lg:hidden">
            <div className="w-full h-[12vh] flex p-[20px] justify-between">
                <div className="flex justify-center items-center gap-4">
                    <img className="w-12" src={frame397} alt="" />
                </div>
                <div className="flex justify-center items-center gap-4">
                <Link to="/createpage"><img className="w-12" src={back} alt="" /></Link>
                </div>
            </div>

            <p className="mx-5 text-[7vw] font-extrabold">Choose Your <br /> Personalised Category</p>
            <p className="mx-5 mt-2 text-[3vw] text-[#636363]">Create dedicated sections for your product list add items to their respective slot.</p>

            <p className="mx-5 mt-8 mb-2 font-extrabold text-[#636363] text-[4vw]">New Category:</p>
            <div className="mx-5 my-1 p-3 flex flex-row items-center  border-dotted border-[1px] border-[#636363] rounded-[15px] gap-2">
                <img className="w-[7vw] h-[7vw]" src={frame400} alt="" onClick={handleAddCategory}/>
                <input
                    type="text"
                    id="phone-input"
                    className="text-[#848484] font-bold text-[3.5vw] w-80 border-0 border-[#000000] px-0.5 py-1 outline-none bg-[#ffffff]"
                    placeholder="Create Your New Category"
                    value={newCategoryName}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                />
                
            </div>

            <p className="mx-5 mt-8 mb-2 font-extrabold text-[#636363] text-[4vw]">Created Category:</p>

            <div className="flex flex-wrap ml-5 gap-[2.3vw] mb-[45%]">
                {categories.map((category, index) => (
                    <div key={index} className={`flex flex-col w-[28vw] h-[24vw] bg-[${category.color}] p-[2vw] border rounded-[12px] ${selectedCategory === index ? 'bg-gray-300' : ''}`} onClick={() => handleCategoryClick(index)}>
                        <span className="text-[2.7vw] text-[#094446] font-extrabold mb-[3vw]">{category.name}</span>
                        <p className="text-[6vw] text-[#094446] font-extrabold mb-[-2vw]">{category.count}</p>
                        <div className="flex">
                            <div className="flex w-[100%] justify-between items-center">
                                <p className="text-[2.7vw] text-[#636363] font-extrabold">ITEMS</p>
                                <img className="w-[6vw] h-[6vw]" src={frame407} alt="" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            {categories.length === 0 && (
                <div className="flex justify-center items-center h-[410px]">
                    <img className="w-[170px]" src={frame409} alt="" />
                </div>
            )}

            
        </section>
        </div>
        </>
    );
}

export default CreateProductPage2;
