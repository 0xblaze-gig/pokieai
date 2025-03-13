import { useState, useEffect } from "react";

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
    <nav className={`fixed w-full bg-white shadow-md z-50 ${isScrolled ? 'shadow-lg' : ''}`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          {/* Logo represented by a text placeholder since we can't use actual images */}
          <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">PA</div>
          <span className="font-heading font-bold text-2xl text-primary">$POKEAI</span>
        </div>
        
        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden flex items-center"
          aria-label="Toggle mobile menu"
        >
          <i className="fas fa-bars text-xl"></i>
        </button>
        
        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#home" className="font-heading font-medium hover:text-primary transition-colors duration-300">Home</a>
          <a href="#about" className="font-heading font-medium hover:text-primary transition-colors duration-300">About</a>
          <a href="#album" className="font-heading font-medium hover:text-primary transition-colors duration-300">Album</a>
          <a href="#tokenomics" className="font-heading font-medium hover:text-primary transition-colors duration-300">Tokenomics</a>
          <a href="#roadmap" className="font-heading font-medium hover:text-primary transition-colors duration-300">Roadmap</a>
          <button className="bg-primary text-white px-6 py-2 rounded-full font-heading font-bold hover:bg-opacity-90 transition-colors duration-300">
            Buy Now
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`px-4 pt-2 pb-4 bg-white md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <a href="#home" onClick={closeMenu} className="block py-2 px-4 font-heading hover:bg-neutral rounded">Home</a>
        <a href="#about" onClick={closeMenu} className="block py-2 px-4 font-heading hover:bg-neutral rounded">About</a>
        <a href="#album" onClick={closeMenu} className="block py-2 px-4 font-heading hover:bg-neutral rounded">Album</a>
        <a href="#tokenomics" onClick={closeMenu} className="block py-2 px-4 font-heading hover:bg-neutral rounded">Tokenomics</a>
        <a href="#roadmap" onClick={closeMenu} className="block py-2 px-4 font-heading hover:bg-neutral rounded">Roadmap</a>
        <div className="mt-2 pt-2 border-t border-gray-200">
          <button className="w-full bg-primary text-white px-4 py-2 rounded-full font-heading font-bold hover:bg-opacity-90 transition-colors duration-300">
            Buy Now
          </button>
        </div>
      </div>
    </nav>
  );
}
