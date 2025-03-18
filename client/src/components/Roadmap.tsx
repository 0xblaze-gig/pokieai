export default function Roadmap() {
  const phases = [
    {
      number: 1,
      status: "In Progress",
      statusClass: "bg-purple-600 bg-opacity-20 text-purple-400",
      title: "Foundation & Community Building",
      items: [
        "Website launch with roadmap and tokenomics",
        "Community building across social platforms",
        "Development of smart contract on Solana",
        "Initial branding and marketing strategy"
      ],
      active: true
    },
    {
      number: 2,
      status: "Coming Soon",
      statusClass: "bg-primary bg-opacity-20 text-primary",
      title: "Token Launch & Ecosystem",
      items: [
        "Token deployment on Solana network",
        "Integration with Phantom wallet",
        "Partnerships with Pokemon content creators",
        "Enhanced website with interactive features"
      ],
      active: false
    },
    {
      number: 3,
      status: "Future Plan",
      statusClass: "bg-indigo-600 bg-opacity-20 text-indigo-400",
      title: "AI Integration",
      items: [
        "Launch of AI-powered Pokemon generator platform",
        "Implementation of token staking with rewards",
        "Expansion to additional Solana DEXs",
        "Enhanced security measures and audit implementations"
      ],
      active: false
    },
    {
      number: 4,
      status: "Long-term Vision",
      statusClass: "bg-blue-600 bg-opacity-20 text-blue-400",
      title: "Metaverse & Gaming",
      items: [
        "Development of $POKEAI metaverse environment",
        "Launch of play-to-earn game with $POKEAI rewards",
        "Strategic partnerships with gaming platforms",
        "Global community expansion initiatives"
      ],
      active: false
    }
  ];

  return (
    <section id="roadmap" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoLTZ2LTZoNnptLTYtMTJ2Nmg2di02aC02em0tMTIgMTJ2Nmg2di02aC02em0wLTEydjZoNnYtNmgtNnptLTEyIDZ2Nmg2di02aC02em0wIDEydjZoNnYtNmgtNnptMTItMjR2Nmg2di02aC02em0tMTIgMTJ2Nmg2di02aC02em0yNCAwdjZoNnYtNmgtNnptLTI0LTEydjZoNnYtNmgtNnptMjQgMHY2aDZ2LTZoLTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">Roadmap</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-gray-300 text-lg">
            Our strategic plan for $POKEAI development and future growth on the Solana blockchain.
          </p>
        </div>
        
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-purple-600 transform -translate-x-1/2"></div>
          
          <div className="space-y-16 relative">
            {phases.map((phase, index) => (
              <div key={index} className="md:flex items-center">
                {/* Left side (odd phases) */}
                {index % 2 === 0 ? (
                  <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 md:text-right">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 md:ml-auto md:mr-0 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl backdrop-filter backdrop-blur-sm bg-opacity-80">
                      <span className={`inline-block px-3 py-1 ${phase.statusClass} rounded-full text-sm font-medium mb-3`}>
                        Phase {phase.number}: {phase.status}
                      </span>
                      <h3 className="font-heading font-bold text-xl mb-3 text-white">{phase.title}</h3>
                      <ul className="text-gray-300 space-y-2">
                        {phase.items.map((item, i) => (
                          <li key={i} className="flex items-center justify-end gap-2">
                            <span>{item}</span>
                            {phase.active && <span className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0"></span>}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div className="md:w-1/2 md:pr-12 md:opacity-0 mb-8 md:mb-0"></div>
                )}
                
                {/* Circle indicator */}
                <div className="hidden md:flex items-center justify-center relative z-10">
                  <div className={`w-16 h-16 rounded-full ${phase.active ? 'bg-gradient-to-r from-primary to-purple-600 text-white' : 'bg-gray-800 text-gray-300 border border-gray-700'} flex items-center justify-center font-bold text-xl shadow-lg transition-transform duration-300 hover:scale-110`}>
                    {phase.number}
                  </div>
                </div>
                
                {/* Right side (even phases) */}
                {index % 2 === 1 ? (
                  <div className="md:w-1/2 md:pl-12">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl backdrop-filter backdrop-blur-sm bg-opacity-80">
                      <span className={`inline-block px-3 py-1 ${phase.statusClass} rounded-full text-sm font-medium mb-3`}>
                        Phase {phase.number}: {phase.status}
                      </span>
                      <h3 className="font-heading font-bold text-xl mb-3 text-white">{phase.title}</h3>
                      <ul className="text-gray-300 space-y-2">
                        {phase.items.map((item, i) => (
                          <li key={i} className="flex items-center gap-2">
                            {phase.active && <span className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0"></span>}
                            <span>{item}</span>
                          </li>
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
