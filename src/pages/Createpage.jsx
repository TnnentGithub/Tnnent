import React, { useEffect, useState, useRef } from 'react';

import backIcon from '../images/images3/back.png';
import frame401 from '../images/images3/Frame 401.png';
import frame402 from '../images/images3/Frame 402.png';
import frame403 from '../images/images3/Frame 403.png';
import frame405 from '../images/images3/Frame 405.png';
import frame407 from '../images/images3/Frame 407.png';
import frame404 from '../images/images3/Frame 404.png';
import frame406 from '../images/images3/Frame 406.png';
import frame408 from '../images/images3/Frame 408.png';
import deleteicon from '../images/Vector (26).svg'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog";
import { storage } from '../../firebase';
import { ref, uploadBytes } from 'firebase/storage';
import { db } from "../../firebase.js";
import { doc, setDoc, arrayUnion } from "firebase/firestore";



function CreateProductPage() {
    
    

     

const [categoryname, setcategoryname] = useState('')
const [item, setitem] = useState('')
const [Discount, setDiscount] = useState('')
const [mrpprice, setmrpprice] = useState('')
const [itemprice, setitemprice] = useState('')
const [caption, setcaption] = useState('')

useEffect(() => {
    const timerid = setTimeout(() => {
        console.log(caption)
    }, 1000);
    return () => {
        clearTimeout(timerid)
    }
}, [caption])

    const [selectedParcel, setSelectedParcel] = useState(null);

  const handleParcelSelect = (parcel) => {
    setSelectedParcel(parcel);
  };

  const [showHello, setShowHello] = useState(false);

  const [uploadedImages, setUploadedImages] = useState([]);

  const handleImageUpload1 = (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const imageData = e.target.result;
            // Generate a unique key for each image
            const uniqueKey = Date.now(); // Using timestamp as a unique key
            setUploadedImages(prevImages => [...prevImages, { id: uniqueKey, data: imageData }]);
        };
        reader.readAsDataURL(file);
    }
};



const handleDeleteImage = (id) => {
    setUploadedImages(prevImages => prevImages.filter(image => image.id !== id));
};
const [selectedOption, setSelectedOption] = useState('Product Type');
const [menuOpen, setMenuOpen] = useState(false);

const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setMenuOpen(false);
};

const [selectedOption1, setSelectedOption1] = useState('Weight');
const [menuOpen1, setMenuOpen1] = useState(false);

const handleOptionSelect1 = (option) => {
    setSelectedOption1(option);
    setMenuOpen1(false);
};



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
            <div className="mx-5 my-4 flex flex-row gap-4 items-center ">
            {uploadedImages.length < 5 && (
                            <div className="p-4 border-dotted border-[2px] rounded-[15px] border-[#848484] ">
                                <label htmlFor="imageUpload1" className="cursor-pointer">
                                    <img src={frame401} alt="" className="w-[11vw]" />
                                    <input id="imageUpload1" type="file" accept="image/*" className="hidden" onChange={handleImageUpload1} />
                                </label>
                            </div>
                        )}
                {uploadedImages.map((image) => (
                            <div key={image.id} className='border-[1px] rounded-[15px] border-[#848484] w-[14vw] h-[14vw] bg-cover bg-center bg-no-repeat flex justify-center items-center' style={{ backgroundImage: `url(${image.data})` }}>
                            <AlertDialog className="z-[99999]">
                                <AlertDialogTrigger>
                                <img className='w-[6vw]'  src={deleteicon}
                                    alt=""
                                     />
                                    </AlertDialogTrigger>
                                    <AlertDialogContent className="w-[90vw] rounded-3xl">
                        <AlertDialogHeader>
               <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel className="rounded-3xl">Cancel</AlertDialogCancel>
      <AlertDialogAction className="rounded-3xl" onClick={() => handleDeleteImage(image.id)} >Continue</AlertDialogAction>
    </AlertDialogFooter>
                        </AlertDialogContent>
                                    </AlertDialog>
                            </div>
                        ))}
            </div>

    <div className='justify-between items-center flex px-4 mt-7 mb-4'>
    <div className="dropdown ">
                        <div className="select border-[1px] border-[#AFAFAF] rounded-3xl font-bold" onClick={() => setMenuOpen(!menuOpen)}>
                            <span className="selected">{selectedOption}</span>
                            <div className={`caret ${menuOpen ? 'caret-rotate' : ''}`}>
                            <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="15.9091" y1="1.63956" x2="7.7021" y2="9.84654" stroke="#272727" strokeWidth="2.4608"/>
                    <line x1="0.870025" y1="1.26865" x2="7.83034" y2="8.22896" stroke="#272727" strokeWidth="2.4608"/>
                    </svg> 
                            </div>
                        </div>
                        <ul className={`menu font-bold ${menuOpen ? 'menu-open' : ''}`}>
                            <li className={selectedOption === 'Today' ? 'active' : ''} onClick={() => handleOptionSelect('Today')}>Today</li>
                            <li className={selectedOption === 'Yesterday' ? 'active' : ''} onClick={() => handleOptionSelect('Yesterday')}>Yesterday</li>
                            <li className={selectedOption === 'Last Month' ? 'active' : ''} onClick={() => handleOptionSelect('Last Month')}>Last Month</li>
                            <li className={selectedOption === 'Last Year' ? 'active' : ''} onClick={() => handleOptionSelect('Last Year')}>Last Year</li>
                        </ul>
                    </div>
                    <h2 className='text-[3.4vw]'>Enter your product type</h2>
    </div>

            <p className="mx-5 font-extrabold text-xl">Item Name</p>
            <div className="mx-5 my-3 px-4 py-3  border-dotted border-[2px] rounded-[15px] border-[#848484] flex justifu-right mb-[30px]">
                <input type="text" id="phone-input" className="text-[#636363] text-[13px] w-[100%] border-0 border-[#000000] px-0.5 py-1 outline-none bg-[#ffffff]" placeholder="Write your Product Name" onChange={(e) => setitem(e.target.value)}/>
            </div>

            <p className="mx-5 font-extrabold text-xl">Item Price</p>
            <p className="mx-5 text-[#636363] text-[12px]">(Fill any two slots and the third will be calculated automatically)</p>
            <div className="flex flex-row items-center justify-center gap-1 my-2">
                <div className="my-3 px-3 py-2  border-dotted border-[2px] rounded-[10px] border-[#848484] flex justify-right mb-[30px]  flex-row gap-1">
                    <img className="h-5" src={frame403} alt="" />
                    <input type="text" id="phone-input" className="text-[#989898] w-[60px] text-[11px] font-bold border-0 border-[#000000]  outline-none bg-[#ffffff]" maxLength="6" placeholder="Discount" onInput="this.value=this.value.replace(/[^0-9]/g,'');" onChange={(e) => setDiscount(e.target.value)}/>
                </div>
                <div className="my-3 px-3 py-2  border-dotted border-[2px] rounded-[10px] border-[#848484] flex justify-right mb-[30px]  flex-row gap-1">
                    <img className="h-3" src={frame402} alt="" />
                    <input type="text" id="phone-input" className="text-[#989898] w-[60px] text-[11px] font-bold border-0 border-[#000000]  outline-none bg-[#ffffff]" maxLength="6" placeholder="MRP Price" onInput="this.value=this.value.replace(/[^0-9]/g,'');" onChange={(e) => setmrpprice(e.target.value)} />
                </div>
                <div className="my-3 px-3 py-2  border-dotted border-[2px] rounded-[10px] border-[#848484] flex mb-[30px]  flex-row gap-1 items-center justify-center">
                    <img className="h-5" src={frame405} alt="" />
                    <input type="text" id="phone-input" className="text-[#989898] w-[60px] text-[11px] font-bold border-0 border-[#000000]  outline-none bg-[#ffffff]" maxLength="6" placeholder="Item Price" onInput="this.value=this.value.replace(/[^0-9]/g,'');" onChange={(e) => setitemprice(e.target.value)} />
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
                <img className="wow w-6" src={frame404} alt="" onClick={() => setShowHello(true)} />
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
            <textarea className="text-[#989898] w-[100%] text-[13px] font-bold border-0 border-[#000000]  outline-none bg-[#ffffff]" name="" maxLength="700" id="" cols="38" rows="4" placeholder="Write Your Caption" onChange={(e) => setcaption(e.target.value)}></textarea>
        </div>
    </div>
</div>

<p className="mx-5 font-extrabold text-xl">Item Weight</p>
<div className='justify-between items-center flex px-2 mt-7 mb-32'>
    <div className="dropdown relative">
                        <div className="select border-[1px] border-[#AFAFAF] rounded-3xl font-bold" onClick={() => setMenuOpen1(!menuOpen1)}>
                            <span className="selected">{selectedOption1}</span>
                            <div className={`caret ${menuOpen1 ? 'caret-rotate' : ''}`}>
                            <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="15.9091" y1="1.63956" x2="7.7021" y2="9.84654" stroke="#272727" strokeWidth="2.4608"/>
                    <line x1="0.870025" y1="1.26865" x2="7.83034" y2="8.22896" stroke="#272727" strokeWidth="2.4608"/>
                    </svg> 
                            </div>
                        </div>
                        <ul className={`menu font-bold ${menuOpen1 ? 'menu-open' : ''} absolute top-[-54vw]`}>
                            <li className={selectedOption1 === 'Today' ? 'active' : ''} onClick={() => handleOptionSelect1('Today')}>Today</li>
                            <li className={selectedOption1 === 'Yesterday' ? 'active' : ''} onClick={() => handleOptionSelect1('Yesterday')}>Yesterday</li>
                            <li className={selectedOption1 === 'Last Month' ? 'active' : ''} onClick={() => handleOptionSelect1('Last Month')}>Last Month</li>
                            <li className={selectedOption1 === 'Last Year' ? 'active' : ''} onClick={() => handleOptionSelect1('Last Year')}>Last Year</li>
                        </ul>
                    </div>
                    <h2 className='text-[3.3vw]'>Select the weight of your product</h2>
    </div>



    <button className="text-[#ffffff] z-[999] text-[4vw] py-3 px-20 bg-[#000000] border rounded-full font-bold fixed bottom-4 left-[23%]">
        List Item
    </button>

        </section>
        </div>
        </>
    );
}

export default CreateProductPage;
