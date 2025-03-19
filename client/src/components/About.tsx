import { Zap, Shield, Users, Feather, TrendingUp, Gift } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovative Technology",
      description: "POKIEAI leverages cutting-edge AI algorithms to create unique Pokemon-inspired digital assets that evolve over time."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Framework",
      description: "Our smart contracts are thoroughly audited, providing a secure and transparent environment for all future POKIEAI holders."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Strong Community",
      description: "Join thousands of Pokemon enthusiasts and crypto innovators building the future of gaming cryptocurrencies together."
    },
    {
      icon: <Feather className="w-8 h-8" />,
      title: "Low Transaction Fees",
      description: "Enjoy minimal gas fees and seamless transactions with our optimized Solana blockchain integration."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Growth Potential",
      description: "With our expanding ecosystem and strategic partnerships, POKIEAI is positioned for substantial long-term growth."
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Community Rewards",
      description: "POKIEAI rewards its community with exclusive NFTs, staking benefits, and participation in governance decisions."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="pokeball-bg-1 opacity-5"></div>
        <div className="pokeball-bg-2 opacity-5"></div>
        <div className="pokeball-bg-3 opacity-5"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">About POKIEAI</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-gray-300 text-lg">
            Discover how POKIEAI is transforming the cryptocurrency landscape by merging Pokemon culture with artificial intelligence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-700 backdrop-filter backdrop-blur-sm bg-opacity-80"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-purple-500 flex items-center justify-center mb-6 shadow-lg text-white">
                {feature.icon}
              </div>
              <h3 className="font-heading font-bold text-xl mb-4 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
