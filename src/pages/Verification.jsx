import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import logo from '../images/images2/desktop icons/logo.png';
import backOption from '../images/images2/mobile icons/BACK OPTION.png';
import bigIllustration from '../images/images2/mobile icons/big illustration.png';
import DTEIcon from '../images/images2/mobile icons/DTE.png';
import idProofIcon from '../images/images2/mobile icons/ID PROOF.png';


class VerifyDetailsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: 'Aadhar',
            dob: '',
            aadhar: '',
            passport: '',
            doi: '',
            doe: '',
            imagePreview: logo
        };
    }

    componentDidMount() {
        this.setState({ category: 'Aadhar' });
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                this.setState({ imagePreview: e.target.result });
            };
            reader.readAsDataURL(file);
        }
    }

    render() {
        return (
            <>
            <div className='forscroll'>
            <section className="md:hidden">
                <div className="w-full h-64" style={{ backgroundImage: `url(${bigIllustration})`, backgroundSize: 'cover', padding: '20px' }}>
                    <div className="flex">
                        <div className="mt-1">
                            <Link href="index.html" className="flex items-center text-white">
                                <img src={logo} alt="Your Logo" className="mt-5 w-10" />
                            </Link>
                        </div>
                        <div className="ml-auto mt-5 md:mt-5 pr-3 sm:pr-2">
                            <img src={backOption} alt="" className="w-10" />
                        </div>
                    </div>
                    <div className="mt-5">
                        <h1 className="text-3xl font-gotham-black font-bold mr-28" style={{ color: 'black' }}>Upload Your Documents For Verification</h1>
                    </div>
                </div>

                <div className="mt-3 ml-7 flex gap-3 flex-wrap">
                    <button className={`border border-black bg-white text-[#737373] hover:bg-[#343434] hover:text-white px-4 py-2 rounded-3xl transition-colors duration-300 inline-flex items-center ${this.state.category === 'Aadhar' ? 'active' : ''}`} onClick={() => this.setState({ category: 'Aadhar' })}>
                        Aadhar
                    </button>
                    <button className={`border border-black bg-white text-[#737373] hover:bg-[#343434] hover:text-white px-4 py-2 rounded-3xl transition-colors duration-300 inline-flex items-center ${this.state.category === 'Passport' ? 'active' : ''}`} onClick={() => this.setState({ category: 'Passport' })}>
                        Passport
                    </button>
                </div>

                <div className="">
                    {this.state.category === 'Aadhar' ? (
                        <section>
                            <div className="ml-6 mt-14 pr-10 mb-10">
                                <h2 className="font-extrabold text-2xl">Upload your documents.</h2>
                                <p className="text-[#636363] mt-3">Submit your aadhaar card details below</p>
                            </div>

                            <div className="pr-10 md:pr-10 mt-6">
                                <div className="mb-4 ml-6 relative">
                                    <label htmlFor="dob" className="block mb-1 font-extrabold text-[#545454]">Date of Birth:</label>
                                    <input id="dob" type="text" name="dob" placeholder="DD-MM-YYYY" className="w-full px-3 py-4 border border-dotted rounded-lg focus:outline-none border-[#848484] font-extrabold text-[#545454] pr-12" value={this.state.dob} onChange={this.handleInputChange} />
                                    <img src={DTEIcon} className="absolute right-4 top-11 h-6 w-6" alt="icon" />
                                </div>

                                <div className="mb-4 ml-6 relative">
                                    <label htmlFor="aadhar" className="block mb-1 font-extrabold text-[#545454]">ID Proof (Aadhar Number):</label>
                                    <input id="aadhar" type="text" name="aadhar" placeholder="Enter 12 digit Aadhar Number" className="w-full px-3 py-4 border border-dotted rounded-lg focus:outline-none border-[#848484] font-extrabold text-[#545454] pr-12" value={this.state.aadhar} onChange={this.handleInputChange} />
                                    <img src={idProofIcon} className="absolute right-4 top-11 h-6 w-7" alt="icon" />
                                    <img src="./Images/AUTHENTICATION LOGOS AND ICONS/INTEREST TICK.png" className="absolute right-12 top-11 h-6 w-6" alt="icon" style={{ display: this.state.aadhar.length === 14 ? 'block' : 'none' }} />
                                </div>

                                <div>
                                    <p className="text-[#545454] font-extrabold ml-6 mt-5">Add aadhaar image</p>
                                </div>

                                <div className="flex mb-36">
                                    <div className="border border-dotted p-4 ml-6 mt-3 border-[#848484] rounded-xl">
                                        <label htmlFor="imageUpload" className="cursor-pointer">
                                            <img src={this.state.imagePreview} alt="" className="w-10" />
                                            <input id="imageUpload" type="file" accept="image/*" className="hidden" onChange={this.handleFileChange} />
                                        </label>
                                    </div>
                                    <div className="mt-7 pr-3 text-xs ml-2">
                                        <p className="text-[#636363]">(Add an image of your aadhaar so that we could verify it's you)</p>
                                    </div>
                                </div>
                            </div>
                            <div className="fixed bottom-4 left-0 right-0 flex justify-center items-center">
                                <Link to="/pickuptime" className="flex bg-[#2D332F] rounded-full text-xl p-4 w-72 md:hidden text-white justify-center items-center">
                                    Verify
                                </Link>
                            </div>
                        </section>
                    ) : (
                        <section>
                            <div className="ml-6 mt-14 pr-10">
                                <h2 className="font-extrabold text-2xl">Upload your documents.</h2>
                                <p className="text-[#636363] mt-3">Submit your passport details below</p>
                            </div>

                            <div className="pr-10 md:pr-10 mt-14">
                                <div className="flex">
                                    <div className="mb-4 ml-6 pr-6 relative">
                                        <label htmlFor="doi" className="block mb-1 font-extrabold text-[#545454]">Date of Issue:</label>
                                        <input id="doi" type="text" name="doi" placeholder="DD-MM-YYYY" className="w-full px-3 py-4 border border-dotted rounded-lg focus:outline-none border-[#848484] font-extrabold text-[#545454] pr-12" value={this.state.doi} onChange={this.handleInputChange} />
                                        <img src={DTEIcon} className="absolute right-9 top-11 h-6 w-6" alt="icon" />
                                    </div>

                                    <div className="mb-4 ml-6 relative">
                                        <label htmlFor="doe" className="block mb-1 font-extrabold text-[#545454]">Date of Expiry:</label>
                                        <input id="doe" type="text" name="doe" placeholder="DD-MM-YYYY" className="w-full px-3 py-4 border border-dotted rounded-lg focus:outline-none border-[#848484] font-extrabold text-[#545454] pr-12" value={this.state.doe} onChange={this.handleInputChange} />
                                        <img src={DTEIcon} className="absolute right-3 top-11 h-6 w-6" alt="icon" />
                                    </div>
                                </div>

                                <div className="mb-4 ml-6 relative">
                                    <label htmlFor="passport" className="block mb-1 font-extrabold text-[#545454]">Passport Number:</label>
                                    <input id="passport" type="text" name="passport" placeholder="Enter your passport Number" className="w-full px-3 py-4 border border-dotted rounded-lg focus:outline-none border-[#848484] font-extrabold text-[#545454] pr-12" value={this.state.passport} onChange={this.handleInputChange} />
                                    <img src={idProofIcon} className="absolute right-4 top-11 h-6 w-7" alt="icon" />
                                </div>
                            </div>

                            <div>
                                <p className="text-[#545454] font-extrabold ml-6 mt-5">Add Passport Image</p>
                            </div>

                            <div className="flex mb-36">
                                <div className="border border-dotted p-4 ml-6 mt-3 border-[#848484] rounded-xl">
                                    <label htmlFor="imageUpload" className="cursor-pointer">
                                        <img src={this.state.imagePreview} alt="" className="w-10" />
                                        <input id="imageUpload" type="file" accept="image/*" className="hidden" onChange={this.handleFileChange} />
                                    </label>
                                </div>
                                <div className="mt-7 pr-3 text-xs ml-2">
                                    <p className="text-[#636363]">(Add an image of your passport so that we could verify it's you)</p>
                                </div>
                            </div>

                            <div className="fixed bottom-4 left-0 right-0 flex justify-center items-center">
                                <Link to="/pickuptime" className="flex bg-[#2D332F] rounded-full text-xl p-4 w-72 md:hidden text-white justify-center items-center">
                                    Verify
                                </Link>
                            </div>
                        </section>
                    )}
                </div>
            </section>
            </div>
            </>
        );
    }
}

export default VerifyDetailsPage;
