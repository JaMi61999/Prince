import React from 'react';

const menuCategories = {
  standard: [
    { name: 'Jollof Rice', price: 'R120', description: 'West African spiced rice dish' },
    { name: 'Pap and Wors', price: 'R100', description: 'Traditional South African meal' }
  ],
  main: [
    { name: 'Grilled Tilapia', price: 'R180', description: 'Fresh fish with African spices' },
    { name: 'Suya', price: 'R150', description: 'Spiced grilled meat skewers' }
  ],
  veges: [
    { name: 'African Spinach', price: 'R80', description: 'Sautéed spinach with spices' },
    { name: 'Chakalaka', price: 'R60', description: 'Spicy vegetable relish' }
  ],
  specials: [
    { name: 'Monday: Egusi Soup', price: 'R140', description: 'Traditional Nigerian soup' },
    { name: 'Friday: Seafood Okra', price: 'R160', description: 'Fresh seafood with okra' }
  ]
};

export default function Menu() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Our <span className="text-red-500">Menu</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {Object.entries(menuCategories).map(([category, items]) => (
            <div key={category} className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-red-500 mb-6 capitalize">
                {category === 'veges' ? 'Vegetables' : category}
              </h3>
              
              {category === 'specials' && (
                <p className="text-yellow-500 mb-4 text-sm">
                  These meals are available only on the specified day
                </p>
              )}

              <div className="space-y-6">
                {items.map((item, index) => (
                  <div key={index} className="border-b border-gray-800 pb-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-white font-semibold">{item.name}</h4>
                      <span className="text-red-500 font-bold">{item.price}</span>
                    </div>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}