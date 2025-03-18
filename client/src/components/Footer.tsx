import { Twitter, Send, MessageCircle, BookOpen, Home, Info, Image, PieChart, Map, FileText, FileCode, ShieldCheck, Newspaper, ChevronRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: "Home", href: "#home", icon: <Home size={16} /> },
    { name: "About", href: "#about", icon: <Info size={16} /> },
    { name: "Gallery", href: "#album", icon: <Image size={16} /> },
    { name: "Tokenomics", href: "#tokenomics", icon: <PieChart size={16} /> },
    { name: "Roadmap", href: "#roadmap", icon: <Map size={16} /> }
  ];
  
  const resources = [
    { name: "Whitepaper", href: "#", icon: <FileText size={16} /> },
    { name: "Documentation", href: "#", icon: <FileCode size={16} /> },
    { name: "Security", href: "#", icon: <ShieldCheck size={16} /> },
    { name: "News", href: "#", icon: <Newspaper size={16} /> }
  ];

  return (
    <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="pokeball-bg-1 opacity-5"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-primary to-purple-600 flex items-center justify-center text-white font-bold shadow-lg p-3">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="12" fill="white" opacity="0.9" />
                  <circle cx="16" cy="16" r="6" fill="#FF5A5F" />
                  <circle cx="16" cy="16" r="3" fill="white" opacity="0.6" />
                </svg>
              </div>
              <span className="font-heading font-bold text-2xl bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">$POKEAI</span>
            </div>
            <p className="text-gray-300 mb-6">
              The revolutionary cryptocurrency merging Pokemon culture with cutting-edge AI technology on the Solana blockchain.
            </p>
            <div className="flex">
              <a href="https://x.com/@PokeAionSOL" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-all duration-300 transform hover:scale-110 flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-full border border-gray-700">
                <Twitter size={18} strokeWidth={1.5} />
                <span>@PokeAionSOL</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-heading font-bold text-lg mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-primary transition-all duration-300 flex items-center group">
                    <span className="mr-2 text-gray-500 group-hover:text-primary transition-colors duration-300">{link.icon}</span>
                    {link.name}
                    <ChevronRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-bold text-lg mb-6 text-white">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a href={resource.href} className="text-gray-300 hover:text-primary transition-all duration-300 flex items-center group">
                    <span className="mr-2 text-gray-500 group-hover:text-primary transition-colors duration-300">{resource.icon}</span>
                    {resource.name}
                    <ChevronRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-bold text-lg mb-6 text-white">Stay Updated</h3>
            <p className="text-gray-300 mb-4">Get notified when $POKEAI launches on Solana.</p>
            <form className="space-y-3">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                />
                <div className="absolute right-3 top-3 text-gray-400">
                  <Send size={18} />
                </div>
              </div>
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-primary to-purple-600 text-white px-4 py-3 rounded-lg font-heading font-medium hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Get Notified</span>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">&copy; {currentYear} $POKEAI. All rights reserved.</p>
          <p className="mt-2 text-xs text-gray-500">
            $POKEAI is not affiliated with The Pokémon Company or Nintendo. This is a fan-made cryptocurrency project.
          </p>
        </div>
      </div>
    </footer>
  );
}
