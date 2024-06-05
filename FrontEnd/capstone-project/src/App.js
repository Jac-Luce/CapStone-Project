import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyFooter from './components/footer/MyFooter.jsx';
import ServicesList from './components/services/ServicesList.jsx';
import MyNavb from './components/navbar/MyNavb.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import NewBooking from './components/booking-item/NewBooking.jsx';
import Booking from './pages/booking/Booking.jsx';
import Profile from './components/user/Profile.jsx';
import Login from './components/user/Login.jsx';
import Register from './components/user/Register.jsx';
import ProtectRoute from './protect-route/ProtectRoute.jsx';

function App() {
  return (
    <BrowserRouter>
     <MyNavb />
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/services' element={<ServicesList />} />
      <Route path='/booking' element={<Booking />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signIn' element={<Register />} />

      <Route element={<ProtectRoute />} > 
        <Route path='/profile' element={<Profile />} />
      </Route>

      <Route path='/newBooking' element={<NewBooking />} />
     </Routes>
     <MyFooter />
    </BrowserRouter>
  )    
}

export default App;
