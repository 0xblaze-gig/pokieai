import { ExternalLink, Twitter, Send, MessageCircle, BookOpen } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-40 right-10 w-64 h-64 bg-primary opacity-5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 opacity-5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-white">
              The Future of <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">Pokemon</span> & <span className="bg-gradient-to-r from-purple-500 to-primary bg-clip-text text-transparent">AI</span> Crypto
            </h1>
            <p className="text-lg mb-8 text-gray-300 max-w-lg">
              $POKEAI combines the beloved world of Pokemon with cutting-edge AI technology to create a revolutionary cryptocurrency experience on Solana.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 backdrop-filter backdrop-blur-sm bg-opacity-80">
                <h3 className="font-heading font-bold text-lg mb-2 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">Coming Soon on Solana!</h3>
                <p className="text-gray-300 mb-4">
                  Join us for the $POKEAI launch:
                </p>
                <ol className="list-decimal pl-5 space-y-2 text-gray-300">
                  <li>Set up your <a href="https://phantom.app/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Phantom wallet</a></li>
                  <li>Fund your wallet with $SOL</li>
                  <li>Connect to our platform at launch</li>
                </ol>
              </div>
            </div>
            <div className="flex items-center space-x-6 mt-8">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300 transform hover:scale-110">
                <Twitter strokeWidth={1.5} className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300 transform hover:scale-110">
                <Send strokeWidth={1.5} className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300 transform hover:scale-110">
                <MessageCircle strokeWidth={1.5} className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300 transform hover:scale-110">
                <BookOpen strokeWidth={1.5} className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            {/* Enhanced pokeball SVG with animation */}
            <div className="w-full rounded-lg shadow-xl bg-gray-800 aspect-[4/3] flex items-center justify-center overflow-hidden border border-gray-700 backdrop-filter backdrop-blur-sm bg-opacity-80 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black opacity-80"></div>
              <svg className="w-3/4 h-3/4 relative z-10 transition-transform duration-700 ease-in-out group-hover:rotate-[20deg]" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="pokeball-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF5A5F" />
                    <stop offset="100%" stopColor="#A855F7" />
                  </linearGradient>
                  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>
                <circle cx="50" cy="50" r="40" fill="url(#pokeball-gradient)" className="animate-pulse" style={{animationDuration: '3s'}} />
                <path d="M50,10 A40,40 0 0,1 90,50 H10 A40,40 0 0,1 50,10 Z" fill="#FF5A5F" opacity="0.6" />
                <circle cx="50" cy="50" r="38" fill="none" stroke="#fff" strokeWidth="2" strokeDasharray="5,3" className="animate-spin" style={{animationDuration: '20s'}} />
                <circle cx="50" cy="50" r="20" fill="white" filter="url(#glow)" />
                <circle cx="50" cy="50" r="18" fill="none" stroke="#FF5A5F" strokeWidth="1" />
                <circle cx="50" cy="50" r="10" fill="#FF5A5F" />
                <circle cx="50" cy="50" r="4" fill="#fff" opacity="0.8" />
                <text x="50" y="95" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold" filter="url(#glow)">$POKEAI</text>
              </svg>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-primary to-purple-600 opacity-10 mix-blend-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
