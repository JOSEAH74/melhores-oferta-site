import React from 'react';

const products = [
  {
    id: 1,
    name: "Smartphone Samsung Galaxy",
    image: "/images/celular.jpg",
    originalPrice: "R$ 2.199,00",
    offerPrice: "R$ 1.799,00",
    link: "https://www.magazineluiza.com.br/"
  },
  {
    id: 2,
    name: "Smart TV LG 50” 4K",
    image: "/images/tv.jpg",
    originalPrice: "R$ 2.999,00",
    offerPrice: "R$ 2.299,00",
    link: "https://www.americanas.com.br/"
  },
  {
    id: 3,
    name: "Notebook Lenovo i5 8GB SSD",
    image: "/images/notebook.jpg",
    originalPrice: "R$ 3.499,00",
    offerPrice: "R$ 2.899,00",
    link: "https://www.amazon.com.br/"
  }
];

function ProductList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map(product => (
        <div key={product.id} className="bg-white rounded-xl shadow-lg p-4">
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
          <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
          <p className="line-through text-gray-500">{product.originalPrice}</p>
          <p className="text-green-600 text-xl font-bold">{product.offerPrice}</p>
          <a href={product.link} target="_blank" rel="noopener noreferrer">
            <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Ver Oferta
            </button>
          </a>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
