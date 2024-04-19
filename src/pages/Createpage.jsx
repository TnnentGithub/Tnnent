import React, { useEffect, useState } from 'react';
import backIcon from '../images/images3/back.png';
import frame401 from '../images/images3/Frame 401.png';
import frame402 from '../images/images3/Frame 402.png';
import frame403 from '../images/images3/Frame 403.png';
import frame405 from '../images/images3/Frame 405.png';
import frame407 from '../images/images3/Frame 407.png';
import frame404 from '../images/images3/Frame 404.png';
import frame406 from '../images/images3/Frame 406.png';
import frame408 from '../images/images3/Frame 408.png';

function CreateProductPage() {

const [categoryname, setcategoryname] = useState('')

useEffect(() => {
    const timerid = setTimeout(() => {
        console.log(categoryname)
    }, 1000);
    return () => {
        clearTimeout(timerid)
    }
}, [categoryname])

    const [selectedParcel, setSelectedParcel] = useState(null);

  const handleParcelSelect = (parcel) => {
    setSelectedParcel(parcel);
  };

  const [showHello, setShowHello] = useState(true);

    return (
        <>
        
        <div className='forscroll'>
        <section className="lg:hidden">
            <div className="w-full h-[12vh] flex p-[20px] justify-between">
                <div className="flex justify-center items-center gap-2">
                    <h2 className="text-2xl font-black">ADD PRODUCT</h2>
                    <div className="bg-red-400 h-[1vh] w-[1vh] rounded-full"></div>
                </div>
                <div className="flex justify-center items-center gap-4">
                    <img className="w-12" src={backIcon} alt="" />
                </div>
            </div>

            <p className="mx-5 font-extrabold text-xl">Add Images</p>
            <div className="mx-5 my-4 flex flex-row gap-4 items-center mb-[50px]">
                <div className="p-4 border-dotted border-[2px] rounded-[15px] border-[#848484] ">
                    <img className="w-8" src={frame401} alt="" />
                </div>
                <p className="text-[13px] text-[#636363]">(Add more than one image of the product)</p>
            </div>

            <p className="mx-5 font-extrabold text-xl">Category Name</p>
            <div className="mx-5 my-3 px-4 py-3  border-dotted border-[2px] rounded-[15px] border-[#848484] flex justifu-right mb-[30px]">
                <input type="text" id="phone-input" className="text-[#636363] text-[13px] w-[100%] border-0 border-[#000000] px-0.5 py-1 outline-none bg-[#ffffff]" placeholder="Write your Category Name" onChange={(e) => setcategoryname(e.target.value)}/>
            </div>

            <p className="mx-5 font-extrabold text-xl">Item Name</p>
            <div className="mx-5 my-3 px-4 py-3  border-dotted border-[2px] rounded-[15px] border-[#848484] flex justifu-right mb-[30px]">
                <input type="text" id="phone-input" className="text-[#636363] text-[13px] w-[100%] border-0 border-[#000000] px-0.5 py-1 outline-none bg-[#ffffff]" placeholder="Write your Product Name" />
            </div>

            <p className="mx-5 font-extrabold text-xl">Item Price</p>
            <p className="mx-5 text-[#636363] text-[12px]">(Fill any two slots and the third will be calculated automatically)</p>
            <div className="flex flex-row items-center justify-center gap-1 my-2">
                <div className="my-3 px-3 py-2  border-dotted border-[2px] rounded-[10px] border-[#848484] flex justify-right mb-[30px]  flex-row gap-1">
                    <img className="h-5" src={frame403} alt="" />
                    <input type="text" id="phone-input" className="text-[#989898] w-[60px] text-[11px] font-bold border-0 border-[#000000]  outline-none bg-[#ffffff]" maxLength="6" placeholder="Discount" onInput="this.value=this.value.replace(/[^0-9]/g,'');" />
                </div>
                <div className="my-3 px-3 py-2  border-dotted border-[2px] rounded-[10px] border-[#848484] flex justify-right mb-[30px]  flex-row gap-1">
                    <img className="h-3" src={frame402} alt="" />
                    <input type="text" id="phone-input" className="text-[#989898] w-[60px] text-[11px] font-bold border-0 border-[#000000]  outline-none bg-[#ffffff]" maxLength="6" placeholder="MRP Price" onInput="this.value=this.value.replace(/[^0-9]/g,'');" />
                </div>
                <div className="my-3 px-3 py-2  border-dotted border-[2px] rounded-[10px] border-[#848484] flex mb-[30px]  flex-row gap-1 items-center justify-center">
                    <img className="h-5" src={frame405} alt="" />
                    <input type="text" id="phone-input" className="text-[#989898] w-[60px] text-[11px] font-bold border-0 border-[#000000]  outline-none bg-[#ffffff]" maxLength="6" placeholder="Item Price" onInput="this.value=this.value.replace(/[^0-9]/g,'');" />
                </div>
            </div>

            <p className="mx-5 font-extrabold text-xl">Item Optional</p>
            <p className="mx-5 text-[#636363] text-[12px]">(Use if your product has different size, weight & volume )</p>
        {showHello ? (
            <div className=" mx-5 my-3 p-3 flex flex-row border border-[#094446] rounded-lg items-center gap-2 w-[37%] mb-[30px]">
                
                <img className="w-6" src={frame407} alt="" />
                
                <p className="text-[#094446] text-[13px] font-bold">Add Optional</p>
            </div>
          ) : (
             <div className=" flex flex-row items-center mb-[30px]">
                <div className="mx-5 my-3 p-3 flex flex-row border border-[#ffffff] bg-[#094446] rounded-lg items-center gap-2 w-[37%] ">
                    <img className="w-6" src={frame406} alt="" />
                    <p className="text-[#ffffff] text-[13px] font-bold">View Optional</p>
                </div>
                <img className="w-6" src={frame404} alt="" />
            </div>

           )}
            <p className="mx-5 font-extrabold text-xl">Add Product Description and More</p>

<div className="mx-5 my-3 p-2 border-dotted border-[2px] rounded-[10px] border-[#848484] flex flex-col gap-1">
    <p className="text-[13px] font-extrabold text-[#636363]">Description</p>
    <div className="flex flex-row gap-1">
        <div>
            <img className="w-4 h-4 mt-1" src={frame408} alt="" />
        </div>
        <div>
            <textarea className="text-[#989898] w-[100%] text-[13px] font-bold border-0 border-[#000000]  outline-none bg-[#ffffff]" name="" maxLength="700" id="" cols="38" rows="4" placeholder="Write Your Caption"></textarea>
        </div>
    </div>
</div>

<p className="mx-5 font-extrabold text-xl">Item Weight</p>

<div className="flex mx-10 my-3 gap-8 mt-5">
    <div className={`w-[40%] p-2 border-dotted border-[2px] rounded-[17px] border-[#848484] flex flex-col gap-1 ${selectedParcel === 'Small' ? 'bg-black text-white' : ''}`} onClick={() => handleParcelSelect('Small')}>
        <span className="text-[13px] text-[#848484] font-bold">Small</span>
        <span className="text-[13px] font-bold">Wt:0-500gm</span>
    </div>
    <div className={`w-[40%] p-2  border-dotted border-[2px] rounded-[17px] border-[#848484] flex flex-col gap-1 ${selectedParcel === 'Medium' ? 'bg-black text-white' : ''}`} onClick={() => handleParcelSelect('Medium')} >
        <span className="text-[13px] text-[#848484] font-bold">Medium</span>
        <span className="text-[13px] font-bold">Wt:500gm-3kg</span>
    </div>
</div>

<div className="flex mx-10 my-3 gap-8 mb-28">
    <div className={`w-[40%] p-2  border-dotted border-[2px] rounded-[17px] border-[#848484] flex flex-col gap-1 ${selectedParcel === 'Large' ? 'bg-black text-white' : ''}`} onClick={() => handleParcelSelect('Large')}>
        <span className="text-[13px] text-[#848484] font-bold">Large</span>
        <span className="text-[13px] font-bold">Wt:3kg-7kg</span>
    </div>
    <div className={`w-[40%] p-2  border-dotted border-[2px] rounded-[17px] border-[#848484] flex flex-col gap-1 ${selectedParcel === 'Extra Large' ? 'bg-black text-white' : ''}`} onClick={() => handleParcelSelect('Extra Large')}>
        <span className="text-[13px] text-[#848484] font-bold">Extra Large</span>
        <span className="text-[13px] font-bold">7kg-14kg</span>
    </div>
</div>


    <button className="text-[#ffffff] text-[4vw] py-3 px-20 bg-[#000000] border rounded-full font-bold fixed bottom-4 left-[23%]">
        List Item
    </button>

        </section>
        </div>
        </>
    );
}

export default CreateProductPage;
