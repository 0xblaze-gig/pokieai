export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#album" },
    { name: "Tokenomics", href: "#tokenomics" },
    { name: "Roadmap", href: "#roadmap" }
  ];
  
  const resources = [
    { name: "Whitepaper", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Smart Contract", href: "#" },
    { name: "Audit Report", href: "#" },
    { name: "Media Kit", href: "#" }
  ];

  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">PA</div>
              <span className="font-heading font-bold text-2xl text-primary">$POKEAI</span>
            </div>
            <p className="text-gray-400 mb-6">
              The revolutionary cryptocurrency merging Pokemon culture with cutting-edge AI technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                <i className="fab fa-telegram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                <i className="fab fa-discord"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                <i className="fab fa-medium"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-primary transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a href={resource.href} className="text-gray-400 hover:text-primary transition-colors duration-300">
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Subscribe</h3>
            <p className="text-gray-400 mb-4">Get the latest updates about $POKEAI directly to your inbox.</p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-primary"
              />
              <button 
                type="submit" 
                className="w-full bg-primary text-white px-4 py-2 rounded-md font-heading font-medium hover:bg-opacity-90 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {currentYear} $POKEAI. All rights reserved.</p>
          <p className="mt-2 text-xs">
            $POKEAI is not affiliated with The Pokémon Company or Nintendo. This is a fan-made cryptocurrency project.
          </p>
        </div>
      </div>
    </footer>
  );
}
