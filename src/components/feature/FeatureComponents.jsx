'use client';

import { useState } from 'react';
import { Heart } from 'lucide-react';
import Image from 'next/image';
import { useAppContext } from '../context/AppContext';
import Link from 'next/link';

export default function FeatureComponent() {
  const { favoritesCount, setFavoritesCount, searchQuery } = useAppContext();

  const [products, setProducts] = useState([
    { id: 1, name: "chemise", price: "$140.00", rating: 5, liked: false, image: "/5.jpg" },
    { id: 2, name: "pull marron", price: "$100.00", rating: 4, liked: false, image: "/6.jpg" },
    { id: 3, name: "pull", price: "$115.00", rating: 3, liked: false, image: "/7.jpg" },
    { id: 4, name: "pull belge", price: "$40.00", rating: 4, liked: false, image: "/8.jpg" },
    { id: 5, name: "pull en veste", price: " $95.00", rating: 2, liked: false, image: "/10.jpg" },
    { id: 6, name: "veste", price: "$58.00", rating: 5, liked: false, image: "/11.jpg" },
    { id: 7, name: "boucle", price: "$50.00", rating: 3, liked: false, image: "/12.jpg" },
    { id: 8, name: "bague diament", price: "$70.00", rating: 4, liked: false, image: "/13.jpg" }
  ]);

  const [activeTab, setActiveTab] = useState('New Arrival');

  const toggleLike = (productId) => {
    setProducts(products.map(product => {
      if (product.id === productId) {
        const newLikedState = !product.liked;
        setFavoritesCount(prev => newLikedState ? prev + 1 : prev - 1);
        return { ...product, liked: newLikedState };
      }
      return product;
    }));
  };

  // Filtrer les produits en fonction de la recherche
  let filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // (Optionnel) Filtrer par onglet actif si nécessaire
  // Ici, je laisse tout afficher, mais tu peux filtrer si besoin :
  // if (activeTab === 'Best Selling') filteredProducts = ...
  // if (activeTab === 'Top Rated') filteredProducts = ...
  // À toi de décider selon la logique métier souhaitée.

  return (
    <section className="py-12 bg-secondary dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#C7E9C0] dark:text-[#A1D99B]">
          Featured Products
        </h2>

        {/* Onglets */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-1 bg-gray-200 dark:bg-gray-700 p-1 rounded-lg">
            {['New Arrival', 'Best Selling', 'Top Rated'].map(tab => (
              <button
                key={tab}
                className={`px-4 py-2 rounded-md ${
                  activeTab === tab 
                    ? 'bg-white dark:bg-gray-800 shadow-sm text-black dark:text-white' 
                    : 'text-gray-600 dark:text-gray-300'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Grille de produits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <div 
              key={product.id} 
              className="bg-white dark:bg-gray-700 p-4 shadow rounded-lg relative group hover:shadow-lg transition-shadow"
            >
              <button 
                onClick={() => toggleLike(product.id)}
                className="absolute top-4 right-4 z-10 p-2 bg-white dark:bg-gray-600 rounded-full shadow hover:scale-110 transition-transform"
              >
                <Heart 
                  className={`h-5 w-5 ${
                    product.liked 
                      ? 'fill-red-500 text-red-500' 
                      : 'text-gray-300 dark:text-gray-400'
                  }`}
                  strokeWidth={1.5}
                />
              </button>

              <Link href={`/product/${product.id}`} className="block">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-600">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-2">
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-1 hover:text-[#C7E9C0] dark:hover:text-[#A1D99B] transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex mb-2 text-yellow-400">
                    {"★".repeat(product.rating)}{"☆".repeat(5 - product.rating)}
                  </div>
                  <p className="text-red-500 dark:text-red-400 font-medium">
                    {product.price}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
