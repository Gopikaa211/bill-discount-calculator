import React, { useState } from 'react';
import './App.css';

function App() {
  const [originalPrice, setOriginalPrice] = useState('');
  const [discount, setDiscount] = useState('');
  const [finalPrice, setFinalPrice] = useState(null);

  const calculateDiscount = () => {
    const price = parseFloat(originalPrice);
    const discountAmount = parseFloat(discount);
    if (!isNaN(price) && !isNaN(discountAmount)) {
      const discountedPrice = price - (price * discountAmount / 100);
      setFinalPrice(discountedPrice.toFixed(2));
    }
  };

  return (
    <div className="App">
      <h1>Bill Discount Calculator</h1>
      <input
        type="number"
        placeholder="Original Price"
        value={originalPrice}
        onChange={(e) => setOriginalPrice(e.target.value)}
      />
      <input
        type="number"
        placeholder="Discount %"
        value={discount}
        onChange={(e) => setDiscount(e.target.value)}
      />
      <button onClick={calculateDiscount}>Calculate</button>
      {finalPrice !== null && (
        <p>Final Price: ₹{finalPrice}</p>
      )}
    </div>
  );
}

export default App;