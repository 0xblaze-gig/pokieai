import { useEffect } from "react";

interface PhotoModalProps {
  item: {
    title: string;
    description: string;
    image: string;
  };
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function PhotoModal({ item, onClose, onPrev, onNext }: PhotoModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onPrev();
      } else if (e.key === 'ArrowRight') {
        onNext();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, onPrev, onNext]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
      onClick={handleBackdropClick}
    >
      <div className="max-w-4xl w-full mx-4 bg-white rounded-lg overflow-hidden relative shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-white bg-red-500 w-10 h-10 rounded-full flex items-center justify-center focus:outline-none hover:bg-red-600 transition-colors duration-300"
          aria-label="Close"
        >
          ✕
        </button>
        
        <div className="bg-gradient-to-r from-primary/10 to-violet-500/10 p-8">
          <div className="relative">
            {/* Fancy decorative frame for the Pokemon image */}
            <div className="absolute inset-0 border-[16px] border-white rounded-xl shadow-inner z-10"></div>
            <div className="absolute inset-0 border-[1px] border-gray-200 rounded-xl z-0"></div>
            <div 
              className="w-full object-contain max-h-[70vh] bg-white rounded-xl min-h-[50vh] flex items-center justify-center relative z-0"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {/* Pokeball decorative element in the corner */}
              <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-white border-4 border-primary flex items-center justify-center" style={{boxShadow: '0 0 15px rgba(255,90,95,0.5)'}}>
                <div className="w-full h-1 bg-primary"></div>
                <div className="absolute w-4 h-4 rounded-full bg-white border-2 border-primary"></div>
              </div>
            </div>
          </div>
          <div className="p-6 text-center">
            <h3 className="font-heading font-bold text-2xl mb-3 bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">{item.title}</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">{item.description}</p>
          </div>
        </div>
        
        <div className="bg-gray-50 px-8 py-5 flex justify-between border-t border-gray-200">
          <button 
            onClick={onPrev}
            className="bg-primary text-white px-6 py-3 rounded-full font-heading font-medium hover:bg-opacity-90 transition-colors duration-300 flex items-center gap-2 shadow-md"
          >
            ← Previous
          </button>
          <button 
            onClick={onNext}
            className="bg-primary text-white px-6 py-3 rounded-full font-heading font-medium hover:bg-opacity-90 transition-colors duration-300 flex items-center gap-2 shadow-md"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}
