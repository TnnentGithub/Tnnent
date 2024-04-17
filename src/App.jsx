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
        </Routes>

      </Router>
    </div>
  )
}

export default App
