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
      <div className="max-w-4xl w-full mx-4 bg-white rounded-lg overflow-hidden relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-red-500 w-8 h-8 rounded-full flex items-center justify-center focus:outline-none hover:bg-red-600 transition-colors duration-300"
        >
          <i className="fas fa-times"></i>
        </button>
        
        <div className="bg-neutral p-6">
          <div 
            className="w-full object-contain max-h-[70vh] bg-gray-200 rounded min-h-[50vh] flex items-center justify-center"
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
          </div>
          <div className="p-4 text-center">
            <h3 className="font-heading font-bold text-xl mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        </div>
        
        <div className="bg-gray-100 px-6 py-4 flex justify-between">
          <button 
            onClick={onPrev}
            className="bg-primary bg-opacity-20 text-primary px-4 py-2 rounded-full font-heading font-medium hover:bg-opacity-30 transition-colors duration-300 flex items-center"
          >
            <i className="fas fa-arrow-left mr-2"></i> Previous
          </button>
          <button 
            onClick={onNext}
            className="bg-primary bg-opacity-20 text-primary px-4 py-2 rounded-full font-heading font-medium hover:bg-opacity-30 transition-colors duration-300 flex items-center"
          >
            Next <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
