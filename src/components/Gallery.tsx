import React, { useState } from 'react';

const categories = ['All', 'Restaurant', 'Shisha', 'Perfume', 'Barbershop'];

const images = [
  {
    url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
    category: 'Restaurant',
    caption: 'Our elegant dining space'
  },
  {
    url: 'https://images.unsplash.com/photo-1542332213-31f87c6a4424',
    category: 'Shisha',
    caption: 'Premium shisha experience'
  },
  {
    url: 'https://images.unsplash.com/photo-1592945403244-b3faa7b3a4e1',
    category: 'Perfume',
    caption: 'Exotic perfume collection'
  },
  {
    url: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1',
    category: 'Barbershop',
    caption: 'Professional haircuts'
  }
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = images.filter(
    img => activeCategory === 'All' || img.category === activeCategory
  );

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Our <span className="text-red-500">Gallery</span>
        </h2>

        <div className="flex justify-center space-x-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition ${
                activeCategory === category
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-900 text-gray-400 hover:bg-gray-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg">
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-64 object-cover transform transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <p className="text-white text-center px-4">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}