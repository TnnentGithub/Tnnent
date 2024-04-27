import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Analytics from './pages/Analytics';
import Storeprofile from './pages/Storeprofile';
import Storeprofileview from './pages/Storeprofileview';
import Userprofile from './pages/Userprofile';
import Catalog from './pages/Catalog';
import Productdelivery from './pages/Productdelivery';
import DeliveryStatus from './pages/Deliveryfromme';
import DeliveryToMe from './pages/Deliverytome';
import ElectronicsPage from './pages/Electronics';
import ServicesPage from './pages/Ourservices';
import PickupDetailsPage from './pages/Pickupdetails';
import PickupTimePage from './pages/Pickuptime';
import ShipmentDetailsPage from './pages/Shipment';
import VerifyDetailsPage from './pages/Verification';
import MiddlemanGroup from './pages/Galleryins';
import Gallery from './pages/Gallery';
import Gallerymiddle from './pages/Gallerymiddle';
import Store from './pages/Store';
import RegistrationPage from './pages/Registration';
import SelectEmailPage from './pages/Storeemail';
import SelectStoreDomainPage from './pages/Storedomain';
import SelectStoreLocation from './pages/Storelocation';
import SelectStoreName from './pages/Storename';
import StorePayment from './pages/Storepayment';
import StoreUPI from './pages/Storeupi';
import Otpverify from './pages/Otpverify';
import SelectCategory from './pages/Selectcategory';
import Highlights from './pages/Highlights';
import CreateProductPage from './pages/Createpage';
import CreateProductPage2 from './pages/Createcategory';
import SelectDefaultOptional from './pages/Defaultoptional';
import AddPriceToOptionals from './pages/Addprice';
import Community from './pages/Community';
import Communitypost from './pages/Createcommunity';
import UploadDocuments from './Auth/Aadhar';
import LocationPage from './Auth/Location';
import Name from './Auth/Name';
import ProfilePictureadded from './Auth/Profilepictureadded';
import AddProfilePicture from './Auth/Profilepicture';
import ResetPassword from './Auth/Resetpass';
import SignIn from './Auth/Signin';
import Signup from './Auth/Signup';
import Verify from './Auth/Verify';
import Createpass from './Auth/Createpass';
import Passport from './Auth/Passport';
import OptionalsVolume from './pages/Optionalsvolume';
import Optionalsweight from './pages/Optionalsweight';
import Optionalsbakery from './pages/Optionalsbakery';
import Optionalssize from './pages/Optionalssize';
import Optionalsstorage from './pages/Optionalstorage';
import Notification from './pages/Notification';
import Storenotification from './pages/Storenotification';
import Orderandpays from './pages/Orderandpays';
import Payments from './pages/Payments';
import Ongoingorders from './pages/Ongoingorders';
import Deliveredorders from './pages/Deliveredorders';
import Cancelledorders from './pages/Cancelledorders';
import Couponprice from './pages/Couponprice';
import Couponpercent from './pages/Couponpercent';
import CreateCoupon from './pages/Createcoupon';
import Details from './pages/Details';
import Checkoutaddress from './pages/Checkoutaddress';
import Checkoutinfo from './pages/Checkoutinfo';
import Checkoutmain1 from './pages/Checkoutmain1';
import Checkoutmain2 from './pages/Checkoutmain2';
import Receiptsuccess from './pages/Receiptsuccess';

function App() {
  return (
    <div className='App'>
      <Router>

        <Routes>
          <Route path='/analytics' element={<Analytics/>}/>
          <Route path='/storeprofile' element={<Storeprofile/>}/>
          <Route path='/storeprofileview' element={<Storeprofileview/>}/>
          <Route path='/userprofile' element={<Userprofile/>}/>
          <Route path='/catalog' element={<Catalog/>}/>
          <Route path='/deliverproduct' element={<Productdelivery/>}/>
          <Route path='/deliveryfromme' element={<DeliveryStatus/>}/>
          <Route path='/deliverytome' element={<DeliveryToMe/>}/>
          <Route path='/electronics' element={<ElectronicsPage/>}/>
          <Route path='/services' element={<ServicesPage/>}/>
          <Route path='/pickupdetails' element={<PickupDetailsPage/>}/>
          <Route path='/pickuptime' element={<PickupTimePage/>}/>
          <Route path='/shipment' element={<ShipmentDetailsPage/>}/>
          <Route path='/verification' element={<VerifyDetailsPage/>}/>
          <Route path='/galleryins' element={<MiddlemanGroup/>}/>
          <Route path='/' element={<Store/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/gallerymiddle' element={<Gallerymiddle/>}/>
          <Route path='/registration' element={<RegistrationPage/>}/>
          <Route path='/storeemail' element={<SelectEmailPage/>}/>
          <Route path='/storedomain' element={<SelectStoreDomainPage/>}/>
          <Route path='/storelocation' element={<SelectStoreLocation/>}/>
          <Route path='/storename' element={<SelectStoreName/>}/>
          <Route path='/storepayment' element={<StorePayment/>}/>
          <Route path='/storeupi' element={<StoreUPI/>}/>
          <Route path='/otpverify' element={<Otpverify/>}/>
          <Route path='/selectcategory' element={<SelectCategory/>}/>
          <Route path='/highlights' element={<Highlights/>}/>
          <Route path='/createpage' element={<CreateProductPage/>}/>
          <Route path='/createcategory' element={<CreateProductPage2/>}/>
          <Route path='/defaultoptional' element={<SelectDefaultOptional/>}/>
          <Route path='/addprice' element={<AddPriceToOptionals/>}/>
          <Route path='/community' element={<Community/>}/>
          <Route path='/communitypost' element={<Communitypost/>}/>
          <Route path='/aadhardetails' element={<UploadDocuments/>}/>
          <Route path='/location' element={<LocationPage/>}/>
          <Route path='/name' element={<Name/>}/>
          <Route path='/profilepictureadded' element={<ProfilePictureadded/>}/>
          <Route path='/addprofilepicture' element={<AddProfilePicture/>}/>
          <Route path='/resetpass' element={<ResetPassword/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/verify' element={<Verify/>}/>
          <Route path='/createpass' element={<Createpass/>}/>
          <Route path='/passport' element={<Passport/>}/>
          <Route path='/optionalvolume' element={<OptionalsVolume/>}/>
          <Route path='/optionalweight' element={<Optionalsweight/>}/>
          <Route path='/optionalbakery' element={<Optionalsbakery/>}/>
          <Route path='/optionalsize' element={<Optionalssize/>}/>
          <Route path='/optionalstorage' element={<Optionalsstorage/>}/>
          <Route path='/notification' element={<Notification/>}/>
          <Route path='/storenotification' element={<Storenotification/>}/>
          <Route path='/orderandpays' element={<Orderandpays/>}/>
          <Route path='/payments' element={<Payments/>}/>
          <Route path='/ongoingorders' element={<Ongoingorders/>}/>
          <Route path='/deliveredorders' element={<Deliveredorders/>}/>
          <Route path='/cancelledorders' element={<Cancelledorders/>}/>
          <Route path='/couponprice' element={<Couponprice/>}/>
          <Route path='/couponpercent' element={<Couponpercent/>}/>
          <Route path='/createcoupon' element={<CreateCoupon/>}/>
          <Route path='/details' element={<Details/>}/>
          <Route path='/checkoutaddress' element={<Checkoutaddress/>}/>
          <Route path='/checkoutinfo' element={<Checkoutinfo/>}/>
          <Route path='/checkoutmain1' element={<Checkoutmain1/>}/>
          <Route path='/checkoutmain2' element={<Checkoutmain2/>}/>
          <Route path='/receiptsuccess' element={<Receiptsuccess/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
