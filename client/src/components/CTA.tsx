import { Info, Bell, Twitter, Send, MessageCircle, BookOpen } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
        <div className="w-[800px] h-[800px] absolute -top-[400px] -right-[400px] rounded-full bg-gradient-to-b from-primary to-purple-700 opacity-20 blur-3xl"></div>
        <div className="w-[600px] h-[600px] absolute -bottom-[300px] -left-[300px] rounded-full bg-gradient-to-t from-indigo-700 to-purple-700 opacity-20 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading font-bold text-3xl md:text-5xl mb-6 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">Join the POKIEAI Revolution</h2>
          <p className="text-lg text-gray-300 mb-12">
            Be part of the community that's combining Pokemon culture with cryptocurrency innovation on the Solana blockchain.
          </p>
          
          <div className="max-w-xl mx-auto bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 backdrop-filter backdrop-blur-sm bg-opacity-80 mb-12 transform transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-primary to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                <Bell className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-heading font-bold text-xl text-white">Get Notified at Launch</h3>
            </div>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-3 text-left">
                <div className="w-8 h-8 rounded-full bg-primary bg-opacity-20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold">1</span>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Join our community channels</h4>
                  <p className="text-gray-400">Stay updated with the latest announcements and development progress</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 text-left">
                <div className="w-8 h-8 rounded-full bg-primary bg-opacity-20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold">2</span>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Set up a <a href="" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Phantom wallet</a></h4>
                  <p className="text-gray-400">Prepare by creating your Solana wallet before our token launch</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 text-left">
                <div className="w-8 h-8 rounded-full bg-primary bg-opacity-20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold">3</span>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Subscribe to launch notifications</h4>
                  <p className="text-gray-400">Be the first to know when POKIEAI goes live on Solana</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <a href="#" className="relative overflow-hidden group bg-gradient-to-r from-primary to-purple-600 px-8 py-4 rounded-full font-heading font-bold text-white hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1">
                <span className="relative z-10">Join Our Community</span>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-white animate-ping"></div>
              </a>
            </div>
          </div>
          
          <div className="flex justify-center items-center mt-10">
            <a href="https://x.com/@PokieAi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3 bg-gray-800 rounded-full border border-gray-700 text-white hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group">
              <Twitter className="w-6 h-6 text-primary" strokeWidth={1.5} />
              <span className="font-medium">Follow on Twitter</span>
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
