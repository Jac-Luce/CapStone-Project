import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyFooter from './components/footer/MyFooter.jsx';
import ServicesList from './components/services/ServicesList.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import Booking from './pages/booking/Booking.jsx';
import Profile from './components/user/Profile.jsx';
import Login from './components/user/Login.jsx';
import Register from './components/user/Register.jsx';
import ProtectRoute from './protect-route/ProtectRoute.jsx';
import AdminLogin from './components/admin/AdminLogin.jsx';
import AdminHome from './pages/home/AdminHome.jsx';
import Service from './pages/services/Service.jsx';
import AdminBooking from './components/admin/AdminBooking.jsx';
import WhoWeAre from './pages/who-we-are/WhoWeAre.jsx';
import AdminWhoWeAre from './pages/who-we-are/AdminWhoWeAre.jsx';
import Profile2 from './components/user/Profile2.jsx';

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/services' element={<Service />} />
      <Route path='/booking' element={<Booking />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signIn' element={<Register />} />
      <Route path='/chiSiamo' element={<WhoWeAre />} />

      <Route element={<ProtectRoute />} > 
        <Route path='/profile' element={<Profile />} />
        <Route path='/profile2' element={<Profile2 />} />
      </Route>

      <Route path='/adminLogin' element={<AdminLogin />} />

      <Route element={<ProtectRoute />} > 
        <Route path='/adminHome' element={<AdminHome />}/>
        <Route path='/servicesAdmin' element={<ServicesList />}/>
        <Route path='/adminBooking' element={<AdminBooking />} />
        <Route path='/adminChiSiamo' element={<AdminWhoWeAre />}/>
      </Route>
      
     </Routes>
     <MyFooter />
    </BrowserRouter>
  )    
}

export default App;
