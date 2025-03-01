import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import LogisticsSection from './components/LogisticsSection/LogisticsSection';
import Navbar from './components/Navbar/Navbar';
import AboutUsSection from './components/AboutUsSection/AboutUsSection';
import Servicess from './components/Servicess/Servicess';
import Team from './components/Team/Team';
import Howitwork from './components/HowWork/Howitwork';
import PricingSection from './components/PricingSection/PricingSection';
import Faq from './components/Faq/Faq';
import ContactUs from './components/ContactUs/ContactUs';
import DailyTask from './components/DailyTask/DailyTask';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LogisticsSection />} />
        <Route path="/about-us" element={<AboutUsSection />} />
        <Route path="/services" element={<Servicess />} />
        <Route path="/team" element={<Team/>} />
        <Route path="/how-it-works" element={<Howitwork/>} />
        <Route path="/pricing" element={<PricingSection />} />
        <Route path="/faq" element={<Faq/>} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/daily" element={<DailyTask/>} />

       
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;