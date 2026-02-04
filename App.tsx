
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import InvestorRelations from './pages/InvestorRelations';
import Contact from './pages/Contact';
import Policies from './pages/Policies';
import LoanApplication from './pages/LoanApplication';
import MarketTicker from './components/MarketTicker';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <div className="fixed top-0 w-full z-[100]">
          <MarketTicker />
          <Navbar />
        </div>
        <main className="flex-grow pt-32 md:pt-40">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/investor-relations/:category" element={<InvestorRelations />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/apply-loan" element={<LoanApplication />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
