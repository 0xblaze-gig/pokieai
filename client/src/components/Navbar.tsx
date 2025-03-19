import { useState, useEffect } from "react";
import { Menu, X, Home, Info, Image, PieChart, Map, Twitter } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-md bg-opacity-80 
      ${isScrolled 
        ? 'py-2 bg-gray-900 shadow-lg shadow-gray-900/20' 
        : 'py-4 bg-transparent'}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          {/* Enhanced logo */}
          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-primary to-purple-600 flex items-center justify-center text-white shadow-md overflow-hidden">
            <svg viewBox="0 0 32 32" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="12" fill="white" opacity="0.9" />
              <circle cx="16" cy="16" r="6" fill="#FF5A5F" />
              <circle cx="16" cy="16" r="3" fill="white" opacity="0.6" />
            </svg>
          </div>
          <span className="font-heading font-bold text-2xl bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">POKIEAI</span>
        </div>
        
        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden flex items-center text-white"
          aria-label="Toggle mobile menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
        
        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-1">
          <NavLink href="#home" icon={<Home size={16} />} label="Home" />
          <NavLink href="#about" icon={<Info size={16} />} label="About" />
          <NavLink href="#album" icon={<Image size={16} />} label="Album" />
          <NavLink href="#tokenomics" icon={<PieChart size={16} />} label="Tokenomics" />
          <NavLink href="#roadmap" icon={<Map size={16} />} label="Roadmap" />
          
          <div className="ml-4">
            <TwitterLink />
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`absolute top-full left-0 right-0 px-4 py-5 bg-gray-900 bg-opacity-90 backdrop-blur-md md:hidden border-t border-gray-800 transition-all duration-300 
        ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible h-0 py-0 overflow-hidden'}`}
      >
        <div className="flex flex-col space-y-3">
          <MobileNavLink href="#home" icon={<Home size={18} />} label="Home" onClick={closeMenu} />
          <MobileNavLink href="#about" icon={<Info size={18} />} label="About" onClick={closeMenu} />
          <MobileNavLink href="#album" icon={<Image size={18} />} label="Album" onClick={closeMenu} />
          <MobileNavLink href="#tokenomics" icon={<PieChart size={18} />} label="Tokenomics" onClick={closeMenu} />
          <MobileNavLink href="#roadmap" icon={<Map size={18} />} label="Roadmap" onClick={closeMenu} />
          
          <div className="pt-3 mt-1 border-t border-gray-800">
            <a 
              href="https://x.com/@Pokieai"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center py-2 px-4 bg-gradient-to-r from-primary to-purple-600 text-white rounded-lg space-x-2 font-medium hover:shadow-lg transition-all duration-300"
            >
              <Twitter size={18} />
              <span>Follow on Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Utility Components
function NavLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a 
      href={href} 
      className="font-medium text-gray-300 hover:text-white py-2 px-3 flex items-center space-x-1 transition-all duration-300 rounded-lg hover:bg-gray-800 group"
    >
      <span className="text-gray-400 group-hover:text-primary transition-colors duration-300">{icon}</span>
      <span>{label}</span>
    </a>
  );
}

function MobileNavLink({ href, icon, label, onClick }: { href: string; icon: React.ReactNode; label: string; onClick: () => void }) {
  return (
    <a 
      href={href} 
      onClick={onClick}
      className="flex items-center space-x-3 py-3 px-4 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-all duration-300"
    >
      <span className="text-primary">{icon}</span>
      <span className="font-medium">{label}</span>
    </a>
  );
}

function TwitterLink() {
  return (
    <a 
      href="https://x.com/@PokeAionSOL"
      target="_blank"
      rel="noopener noreferrer"
      className="relative group overflow-hidden py-2 px-4 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white rounded-lg flex items-center space-x-2 transition-all duration-300"
    >
      <Twitter size={16} className="text-primary" />
      <span className="font-medium">Follow on X</span>
      <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-primary animate-ping"></span>
    </a>
  );
}