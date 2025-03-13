export default function About() {
  const features = [
    {
      icon: "fas fa-rocket",
      title: "Innovative Technology",
      description: "$POKEAI leverages cutting-edge AI algorithms to create unique Pokemon-inspired digital assets that evolve over time."
    },
    {
      icon: "fas fa-shield-alt",
      title: "Secure Investment",
      description: "Our smart contracts are thoroughly audited, providing a secure and transparent investment environment for all $POKEAI holders."
    },
    {
      icon: "fas fa-users",
      title: "Strong Community",
      description: "Join thousands of Pokemon enthusiasts and crypto investors building the future of gaming cryptocurrencies together."
    },
    {
      icon: "fas fa-exchange-alt",
      title: "Low Transaction Fees",
      description: "Enjoy minimal gas fees and seamless transactions with our optimized blockchain integration across multiple networks."
    },
    {
      icon: "fas fa-chart-line",
      title: "Growth Potential",
      description: "With our expanding ecosystem and strategic partnerships, $POKEAI is positioned for substantial long-term growth."
    },
    {
      icon: "fas fa-gift",
      title: "Holder Rewards",
      description: "$POKEAI rewards its community with exclusive NFTs, staking benefits, and participation in governance decisions."
    }
  ];

  return (
    <section id="about" className="py-16 bg-neutral">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">About $POKEAI</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            Discover how $POKEAI is transforming the cryptocurrency landscape by merging Pokemon culture with artificial intelligence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-primary bg-opacity-20 rounded-lg flex items-center justify-center mb-6">
                <i className={`${feature.icon} text-primary text-2xl`}></i>
              </div>
              <h3 className="font-heading font-bold text-xl mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
