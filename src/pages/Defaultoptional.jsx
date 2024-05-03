import React, { useState } from 'react';
import frame397 from '../images/images3/Frame 397.png';
import backIcon from '../images/images3/back.png';

function SelectDefaultOptional() {
    const [options, setOptions] = useState([
        { label: '1 Pound', value: '1pound' },
        { label: '1.5 Pound', value: '1.5pound' },
        { label: '2 Pound', value: '2pound' },
        { label: '3 Pound', value: '3pound' }
    ]);
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

    };

    return (
        <section className="lg:hidden">
            <div className="w-full h-[12vh] flex p-[20px] justify-between">
                <div className="flex justify-center items-center gap-4">
                    <img className="w-12" src={frame397} alt="" />
                </div>
                <div className="flex justify-center items-center gap-4">
                    <a href=""><img className="w-12" src={backIcon} alt="" /></a>
                </div>
            </div>

            <p className="mx-5 font-extrabold text-[5.5vw]">Select Your Default Optional</p>
            <p className="mx-5 text-[#636363] text-[3.5vw] pb-4">Default optional will be displayed to the customer first.</p>

            <div className="flex justify-center items-center pt-3 pb-4">
                <hr className="w-[95%]" style={{ borderTop: '1.5px dashed #848484' }} />
            </div>

            <form onSubmit={handleSubmit}>
                {options.map((option, index) => (
                    <div key={index} className="flex justify-between mx-5 my-5">
                        <p className="text-[4vw] text-[#094446] font-bold">{option.label}</p>
                        <input
                            className="w-[4vw]"
                            type="radio"
                            id={option.value}
                            name="defaultOption"
                            value={option.value}
                            checked={selectedOption === option.value}
                            onChange={handleOptionChange}
                        />
                    </div>
                ))}

<button className="text-[#ffffff] text-[4vw] py-3 px-20 bg-[#000000]  rounded-full font-bold fixed bottom-4 left-[23%]">
        Change
    </button>
            </form>
        </section>
    );
}

export default SelectDefaultOptional;
