export default function CTA() {
  return (
    <section className="py-16 bg-primary bg-opacity-10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">Join the $POKEAI Revolution</h2>
          <p className="text-lg text-gray-700 mb-8">
            Be part of the community that's combining Pokemon culture with cryptocurrency innovation.
          </p>
          <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-lg border-2 border-primary mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 16V12" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8H12.01" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-heading font-bold text-lg text-primary">$POKEAI Launch Coming Soon!</h3>
            </div>
            <p className="text-gray-700 mb-4 text-left">
              Get ready for the launch! Here's how to purchase $POKEAI tokens:
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-gray-700 text-left mb-4">
              <li>Set up a <a href="https://phantom.app/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Phantom wallet</a></li>
              <li>Load your wallet with $SOL</li> 
              <li>Visit our exchange when we launch</li>
              <li>Connect your wallet and swap $SOL for $POKEAI</li>
            </ol>
            <a href="#" className="bg-primary text-white px-8 py-3 rounded-full font-heading font-bold hover:bg-opacity-90 transition-colors duration-300 inline-block">
              Join Community for Updates
            </a>
          </div>
          
          <div className="flex justify-center items-center space-x-8 mt-10">
            <a href="#" className="text-primary hover:text-primary-dark transition-colors duration-300">
              <i className="fab fa-twitter text-3xl"></i>
            </a>
            <a href="#" className="text-primary hover:text-primary-dark transition-colors duration-300">
              <i className="fab fa-telegram text-3xl"></i>
            </a>
            <a href="#" className="text-primary hover:text-primary-dark transition-colors duration-300">
              <i className="fab fa-discord text-3xl"></i>
            </a>
            <a href="#" className="text-primary hover:text-primary-dark transition-colors duration-300">
              <i className="fab fa-medium text-3xl"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
