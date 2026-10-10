import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LeadModal } from './components/LeadModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { MoldTestingPage } from './pages/services/MoldTestingPage';
import { MoldInspectionPage } from './pages/services/MoldInspectionPage';
import { MoldRemovalPage } from './pages/services/MoldRemovalPage';
import { SmokeOdorPage } from './pages/services/SmokeOdorPage';
import { AirDuctPage } from './pages/services/AirDuctPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { BUSINESS_INFO } from './data/businessData';

export function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname || '/');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteDefaultService, setQuoteDefaultService] = useState('');
  const [showBottomBar, setShowBottomBar] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
      window.scrollTo(0, 0);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Reveal sticky bottom CTA bar only after scrolling past the hero (250px)
      setShowBottomBar(window.scrollY > 250);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuote = (serviceId = '') => {
    setQuoteDefaultService(serviceId);
    setIsQuoteModalOpen(true);
  };

  const renderCurrentPage = () => {
    switch (currentPath) {
      case '/about':
        return <AboutPage onNavigate={navigateTo} onOpenQuote={handleOpenQuote} />;
      case '/services':
        return <ServicesPage onNavigate={navigateTo} onOpenQuote={handleOpenQuote} />;
      case '/services/mold-testing':
        return <MoldTestingPage onNavigate={navigateTo} onOpenQuote={handleOpenQuote} />;
      case '/services/mold-inspection':
        return <MoldInspectionPage onNavigate={navigateTo} onOpenQuote={handleOpenQuote} />;
      case '/services/mold-removal':
        return <MoldRemovalPage onNavigate={navigateTo} onOpenQuote={handleOpenQuote} />;
      case '/services/smoke-odor-removal':
        return <SmokeOdorPage onNavigate={navigateTo} onOpenQuote={handleOpenQuote} />;
      case '/services/air-duct-cleaning':
        return <AirDuctPage onNavigate={navigateTo} onOpenQuote={handleOpenQuote} />;
      case '/gallery':
        return <GalleryPage onNavigate={navigateTo} onOpenQuote={handleOpenQuote} />;
      case '/contact':
        return <ContactPage onNavigate={navigateTo} onOpenQuote={handleOpenQuote} />;
      case '/':
      default:
        return <HomePage onNavigate={navigateTo} onOpenQuote={handleOpenQuote} />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#0066FF] selection:text-white flex flex-col justify-between antialiased">
      
      {/* Sticky Header */}
      <Navbar 
        currentPath={currentPath} 
        onNavigate={navigateTo} 
        onOpenQuote={() => handleOpenQuote('')} 
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <Footer 
        onNavigate={navigateTo} 
        onOpenQuote={() => handleOpenQuote('')} 
      />

      {/* Modal Dialog */}
      <LeadModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        defaultService={quoteDefaultService}
      />



      {/* Mobile Sticky Quick Contact Bar - Appears smoothly on scroll, hidden at top */}
      <div 
        className={`sm:hidden fixed bottom-0 inset-x-0 z-40 p-2.5 bg-white/95 border-t border-slate-200/90 backdrop-blur-xl flex items-center gap-2 shadow-[0_-8px_25px_rgba(0,0,0,0.12)] transition-all duration-300 ease-out transform ${
          showBottomBar ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <a
          href={BUSINESS_INFO.phoneRaw}
          className="flex-1 py-3 px-3.5 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 text-[#0066FF]" />
          <span>Call (609) 255-6499</span>
        </a>
        <button
          onClick={() => handleOpenQuote('')}
          className="flex-1 py-3 px-3.5 rounded-full bg-[#0066FF] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-transform"
        >
          <span>Get Free Estimate</span>
        </button>
      </div>

    </div>
  );
}

export default App;
