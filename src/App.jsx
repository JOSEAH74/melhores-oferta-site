import React from 'react';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="p-4 bg-blue-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-center text-blue-800">Melhores Oferta em Todo o Brasil</h1>
      <ProductList />
    </div>
  );
}

export default App;
