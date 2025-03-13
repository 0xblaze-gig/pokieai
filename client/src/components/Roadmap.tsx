export default function Roadmap() {
  const phases = [
    {
      number: 1,
      status: "Complete",
      statusClass: "bg-primary bg-opacity-20 text-primary",
      title: "Launch & Community Building",
      items: [
        "Initial token launch on decentralized exchanges",
        "Community building across social platforms",
        "Website launch with initial functionality",
        "First marketing campaigns to establish brand presence"
      ],
      active: true
    },
    {
      number: 2,
      status: "Current",
      statusClass: "bg-secondary bg-opacity-20 text-secondary",
      title: "Ecosystem Expansion",
      items: [
        "Integration with major cryptocurrency wallets",
        "Launch of $POKEAI NFT collection",
        "Partnerships with Pokemon communities and influencers",
        "Enhanced website with interactive features"
      ],
      active: true
    },
    {
      number: 3,
      status: "Upcoming",
      statusClass: "bg-gray-200 text-gray-600",
      title: "AI Integration",
      items: [
        "Launch of AI-powered Pokemon generator platform",
        "Implementation of token staking with rewards",
        "Cross-chain integration for wider accessibility",
        "Enhanced security measures and audit implementations"
      ],
      active: false
    },
    {
      number: 4,
      status: "Future",
      statusClass: "bg-gray-200 text-gray-600",
      title: "Metaverse & Gaming",
      items: [
        "Development of $POKEAI metaverse environment",
        "Launch of play-to-earn game with $POKEAI rewards",
        "Major exchange listings and institutional partnerships",
        "Global marketing campaign and community expansion"
      ],
      active: false
    }
  ];

  return (
    <section id="roadmap" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Roadmap</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            Our strategic plan for $POKEAI development and growth milestones.
          </p>
        </div>
        
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-primary bg-opacity-20 transform -translate-x-1/2"></div>
          
          <div className="space-y-12 relative">
            {phases.map((phase, index) => (
              <div key={index} className="md:flex items-center">
                {/* Left side (odd phases) */}
                {index % 2 === 0 ? (
                  <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 md:text-right">
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 md:ml-auto md:mr-0 transition-transform duration-300 hover:-translate-y-1">
                      <span className={`inline-block px-3 py-1 ${phase.statusClass} rounded-full text-sm font-medium mb-3`}>
                        Phase {phase.number}: {phase.status}
                      </span>
                      <h3 className="font-heading font-bold text-xl mb-3">{phase.title}</h3>
                      <ul className="text-gray-600 space-y-2 list-disc list-inside">
                        {phase.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div className="md:w-1/2 md:pr-12 md:opacity-0 mb-8 md:mb-0"></div>
                )}
                
                {/* Circle indicator */}
                <div className="hidden md:flex items-center justify-center relative z-10">
                  <div className={`w-12 h-12 rounded-full ${phase.active ? 'bg-primary text-white' : 'bg-gray-300 text-gray-700'} flex items-center justify-center font-bold text-xl shadow-md`}>
                    {phase.number}
                  </div>
                </div>
                
                {/* Right side (even phases) */}
                {index % 2 === 1 ? (
                  <div className="md:w-1/2 md:pl-12">
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-transform duration-300 hover:-translate-y-1">
                      <span className={`inline-block px-3 py-1 ${phase.statusClass} rounded-full text-sm font-medium mb-3`}>
                        Phase {phase.number}: {phase.status}
                      </span>
                      <h3 className="font-heading font-bold text-xl mb-3">{phase.title}</h3>
                      <ul className="text-gray-600 space-y-2 list-disc list-inside">
                        {phase.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div className="md:w-1/2 md:pl-12 md:opacity-0"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
