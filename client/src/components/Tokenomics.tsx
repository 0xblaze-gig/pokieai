export default function Tokenomics() {
  const tokenDistribution = [
    { name: "Circulating Supply", percentage: 90, color: "bg-primary" },
    { name: "Development", percentage: 5, color: "bg-[#3498DB]" },
    { name: "Marketing", percentage: 3, color: "bg-[#F39C12]" },
    { name: "Community Rewards", percentage: 2, color: "bg-[#62DE64]" }
  ];

  const tokenDetails = [
    { label: "Token Name:", value: "POKEAI" },
    { label: "Token Symbol:", value: "$POKEAI" },
    { label: "Total Supply:", value: "1,000,000,000" },
    { label: "Network:", value: "Solana (SPL)" },
    { label: "Taxation:", value: "0% (No Tax)" }
  ];

  return (
    <section id="tokenomics" className="py-16 bg-neutral">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Tokenomics</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            Understanding the economic structure and distribution of $POKEAI tokens.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="w-full max-w-md aspect-square relative">
              {/* Pie chart using SVG */}
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Create pie chart segments */}
                <circle cx="50" cy="50" r="45" fill="white" />
                
                {/* Circulating Supply - 90% */}
                <path 
                  d="M50,50 L95,50 A45,45 0 0,1 50,95 A45,45 0 0,1 5,50 A45,45 0 0,1 23,15 Z" 
                  fill="#FF5A5F" 
                />
                
                {/* Development - 5% */}
                <path 
                  d="M50,50 L23,15 A45,45 0 0,1 41,9 Z" 
                  fill="#3498DB" 
                />
                
                {/* Marketing - 3% */}
                <path 
                  d="M50,50 L41,9 A45,45 0 0,1 54,7 Z" 
                  fill="#F39C12" 
                />
                
                {/* Community Rewards - 2% */}
                <path 
                  d="M50,50 L54,7 A45,45 0 0,1 95,50 Z" 
                  fill="#62DE64" 
                />
                
                {/* Center circle for logo */}
                <circle cx="50" cy="50" r="15" fill="white" stroke="#ddd" strokeWidth="1" />
                <text x="50" y="50" textAnchor="middle" dominantBaseline="middle" fontSize="5" fontWeight="bold">$POKEAI</text>
              </svg>
            </div>
          </div>
          
          <div>
            <div className="space-y-6">
              {tokenDistribution.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className={`w-4 h-4 rounded-full ${item.color} mr-3`}></div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="font-heading font-bold">{item.name}</span>
                      <span className="font-accent">{item.percentage}%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div className={`h-full ${item.color}`} style={{ width: `${item.percentage}%` }}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-white rounded-lg shadow-md border border-gray-100">
              <h3 className="text-black font-heading font-bold text-xl mb-4">Token Details</h3>
              <div className="space-y-3">
                {tokenDetails.map((detail, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-gray-600">{detail.label}</span>
                    <span className="font-medium text-black">{detail.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
