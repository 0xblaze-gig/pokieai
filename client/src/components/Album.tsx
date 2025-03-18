import { useState } from "react";
import PhotoModal from "./PhotoModal";

export default function Album() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const albumItems = [
    {
      title: "Pikachu's Digital Wallet",
      description: "Pikachu's electric powers are charging up the Solana blockchain! Each transaction completes as fast as a Thunderbolt attack.",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
    },
    {
      title: "Charizard's Token Burn",
      description: "When Charizard burns tokens, the $POKEAI market cap reaches new heights. Deflationary mechanics at their fiercest!",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"
    },
    {
      title: "Bulbasaur's Yield Farm",
      description: "Staking $POKEAI tokens is like planting Bulbasaur's seeds - watch your investments grow organically with amazing APY.",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
    },
    {
      title: "Mewtwo's Smart Contract",
      description: "Mewtwo's psychic powers ensure our smart contracts are bulletproof. Security audits passed with legendary perfection.",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png"
    },
    {
      title: "Snorlax HODLing",
      description: "Snorlax knows the secret to crypto success: HODL through market volatility and wake up when $POKEAI reaches the moon!",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png"
    },
    {
      title: "Eevee's Multi-Chain Evolution",
      description: "Like Eevee's many evolutions, $POKEAI is developing cross-chain functionality to evolve across the entire crypto ecosystem.",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png"
    },
    {
      title: "Gengar's NFT Collection",
      description: "Rare $POKEAI NFTs featuring Gengar's shadow art are selling out faster than you can say 'Gas fees on Solana are minimal!'",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png"
    },
    {
      title: "Jigglypuff's Community Call",
      description: "Join our weekly $POKEAI community calls! Unlike Jigglypuff's song, we promise to keep you wide awake with exciting updates.",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png"
    }
  ];

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <section id="album" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">Crypto Pokémon Collection</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            Where Pokémon meets blockchain! These legendary creatures are leading the $POKEAI revolution on Solana with lightning-fast transactions and zero fees.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {albumItems.map((item, index) => (
            <div 
              key={index} 
              className="album-item cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={() => openModal(index)}
            >
              <div className="bg-neutral p-6 rounded-lg shadow-lg border-4 border-primary">
                <div className="aspect-square mb-4 overflow-hidden">
                  {/* Pokemon image with decorated frame */}
                  <div 
                    className="w-full h-64 rounded-lg bg-gray-100 flex items-center justify-center"
                    style={{
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: 'contain',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      boxShadow: 'inset 0 0 10px rgba(0,0,0,0.1)'
                    }}
                  >
                    <div className="absolute top-0 left-0 w-full h-full border-8 border-white rounded-lg" style={{boxShadow: 'inset 0 0 20px rgba(0,0,0,0.2)'}}></div>
                  </div>
                </div>
                <div className="p-3 text-center">
                  <h3 className="font-heading font-bold text-lg mb-2 bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="relative inline-block px-10 py-4 rounded-full font-heading font-bold text-white bg-gradient-to-r from-purple-700 via-primary to-purple-700 bg-[length:200%_100%] animate-gradient shadow-lg overflow-hidden">
            <span className="relative z-10">Coming Soon</span>
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <div className="absolute -top-12 -left-12 w-24 h-24 bg-white opacity-5 rounded-full transform rotate-45"></div>
            <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-white opacity-5 rounded-full transform rotate-45"></div>
          </div>
        </div>
      </div>
      
      {isModalOpen && (
        <PhotoModal 
          item={albumItems[currentIndex]} 
          onClose={closeModal}
          onNext={() => setCurrentIndex((currentIndex + 1) % albumItems.length)}
          onPrev={() => setCurrentIndex((currentIndex - 1 + albumItems.length) % albumItems.length)}
        />
      )}
    </section>
  );
}
