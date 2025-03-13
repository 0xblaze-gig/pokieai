export default function CTA() {
  return (
    <section className="py-16 bg-primary bg-opacity-10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">Join the $POKEAI Revolution</h2>
          <p className="text-lg text-gray-700 mb-8">
            Be part of the community that's combining Pokemon culture with cryptocurrency innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-primary text-white px-8 py-3 rounded-full font-heading font-bold hover:bg-opacity-90 transition-colors duration-300 shadow-lg">
              Buy $POKEAI
            </button>
            <a href="#" className="bg-white text-primary px-8 py-3 rounded-full font-heading font-bold border-2 border-primary hover:bg-primary hover:text-white transition-colors duration-300">
              Join Community
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
