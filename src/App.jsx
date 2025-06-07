import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import VerifyEmail from "./pages/verifyEmail/VerifyEmail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Services from "./pages/services/Services";
import AboutUs from "./pages/aboutUs/AboutUs";
import Setting from "./pages/setting/Setting";
import Landing from "./pages/landing/Landing";
import CustomerProfile from "./pages/profiles/CustomerProfile";
import CustomerDashboard from "./pages/dashboard/CustomerDashboard ";
import HandyManProfile from "./pages/profiles/HandyManProfile";
import HandyManDashboard from "./pages/dashboard/HandyManDashboard";
import ProfileSetting from "./layouts/ProfileSetting";
import { CustomerAuthProvider } from "./context/AuthCustomerContext";
import { HandymanAuthProvider } from "./context/AuthHandymanContext";
import Experts from "./pages/experts/Experts.jsx";
import Contact from "./pages/contacts/Contact";
import ServiceDetails from "./components/ServiceDetails.jsx"; 
import ServicesWithExperts from "./pages/services/ServicesWithExperts.jsx";

function App() {

  return (
    <>
      <Navbar />

      <div style={{ textAlign: "center", marginBottom: "20px" }}></div>
      <CustomerAuthProvider>
        <HandymanAuthProvider>
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/verifyEmail/:id" element={<VerifyEmail />} />
            {/* Route privée Customer */}
            <Route path="/services" element={<Services />} />
 
            <Route path="/services/:key" element={<ServiceDetails />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/Settings" element={<Setting />} />
            <Route path="/Landing" element={<Landing />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Experts" element={<Experts />} />
            <Route path="/customer/profile" element={<CustomerProfile />} />
            <Route path="/handyman/profile" element={<HandyManProfile />} />
            <Route path="/handyman/dashboard" element={<HandyManDashboard />} />
            <Route path="/customer/dashboard" element={<CustomerDashboard />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/services-experts" element={<ServicesWithExperts />} />
            <Route
              path="/ProfileSetting/layouts/profile"
              element={<ProfileSetting />}
            />
          </Routes>
        </HandymanAuthProvider>
      </CustomerAuthProvider>
      <Footer />
    </>
  );
}

export default App;
