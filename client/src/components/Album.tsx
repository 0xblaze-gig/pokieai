import { useState } from "react";
import PhotoModal from "./PhotoModal";

export default function Album() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const albumItems = [
    {
      title: "Electric Evolution",
      description: "AI-generated electric-type Pokemon showing the evolution potential of the $POKEAI ecosystem.",
      image: "https://cdn.pixabay.com/photo/2019/11/27/14/06/pokemon-4657023_960_720.jpg"
    },
    {
      title: "Crypto Creatures",
      description: "The perfect blend of cryptocurrency symbols and Pokemon-inspired design create these unique digital creatures.",
      image: "https://cdn.pixabay.com/photo/2020/04/08/19/20/pikachu-5018653_960_720.jpg"
    },
    {
      title: "Token Trainers",
      description: "$POKEAI community members reimagined as Pokemon trainers in our digital metaverse environment.",
      image: "https://cdn.pixabay.com/photo/2019/11/17/14/30/pokemon-4632774_960_720.jpg"
    },
    {
      title: "Digital Safari",
      description: "Explore virtual lands filled with unique Pokemon-inspired creatures that exist only in the $POKEAI ecosystem.",
      image: "https://cdn.pixabay.com/photo/2019/11/18/15/46/pokemon-4635112_960_720.jpg"
    },
    {
      title: "Blockchain Battles",
      description: "Visualizing the competitive market dynamics as Pokemon-inspired creatures face off in the crypto arena.",
      image: "https://cdn.pixabay.com/photo/2016/07/19/03/53/pokemon-1527747_960_720.jpg"
    },
    {
      title: "Future Evolution",
      description: "A glimpse into the future potential of $POKEAI as it continues to evolve and transform the crypto space.",
      image: "https://cdn.pixabay.com/photo/2022/08/08/12/19/pokemon-7372685_960_720.jpg"
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
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">$POKEAI Gallery</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            Explore our collection of AI-generated Pokemon-inspired artworks that showcase the creative potential of $POKEAI.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {albumItems.map((item, index) => (
            <div 
              key={index} 
              className="album-item cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={() => openModal(index)}
            >
              <div className="bg-neutral p-4 rounded-lg shadow-md border-2 border-gray-200">
                <div className="aspect-w-16 aspect-h-9 mb-4 overflow-hidden">
                  {/* Image placeholder with background color representing the image */}
                  <div 
                    className="w-full h-64 rounded bg-gray-200 flex items-center justify-center"
                    style={{
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                  </div>
                </div>
                <div className="p-3 text-center">
                  <h3 className="font-heading font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-primary text-white px-8 py-3 rounded-full font-heading font-bold hover:bg-opacity-90 transition-colors duration-300 shadow-md">
            Load More
          </button>
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
