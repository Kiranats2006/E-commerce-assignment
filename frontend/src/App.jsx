// import LoginPage from "./components/auth/login";
// import SignUpPage from "./components/auth/signup";
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import ProductEntryPage from './Pages/ProductEntryPage';
import UpdateForm from './Pages/updateForm';
import NavBar from './components/NavBar/NavBar';
import SinglePageProduct from './Pages/SingleProductPage';
import CartPage from './Pages/CartPage';
import ProfilePage from './Pages/Profile';
import AddressCard from './components/Address/AddressCard';
import SelectAdress from './Pages/SelectAdress';
import OrderConfirmation from './Pages/OrderConfirmationPage';
import OrderHistory from './Pages/Order-history';

function App() {
  return (
    <>
    <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product-entry-page" element={<ProductEntryPage />} />
        <Route path="/update-form/:id" element={<UpdateForm/>}/>
        <Route path="/product-details/:id" element={<SinglePageProduct />}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
        <Route path="/address-form" element={<AddressCard />} />
        <Route path="/select-address" element={<SelectAdress/>}/>
        <Route path='/order-confirmation' element={<OrderConfirmation/>}/>
        <Route path="/order-history" element={<OrderHistory />} />
      </Routes>
    </>
  );
}

export default App;
