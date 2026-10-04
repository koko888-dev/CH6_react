import { useState, useEffect } from 'react';
import FoodList from './FoodList';
import FoodForm from './FoodForm';
import './food.css';

const initialFood = [
  { name: "cake", price: 35, isBestSeller: true },
  { name: "bread", price: 25, isBestSeller: false },
  { name: "milk", price: 15, isBestSeller: true },
  { name: "donut", price: 45, isBestSeller: false },
  { name: "cookie", price: 55, isBestSeller: true },
];

const FoodContainer = () => {
  const [food, setFood] = useState(initialFood);

  const [mode, setMode] = useState(() => {
    return localStorage.getItem('food_app_mode') || 'user';
  });

  useEffect(() => {
    localStorage.setItem('food_app_mode', mode);
  }, [mode]);

  const toggleMode = () => {
    setMode(prev => (prev === 'user' ? 'admin' : 'user'));
  };

  const deleteItem = (index) => {
    setFood(food.filter((_, i) => i !== index));
  };

  const addItem = (item) => {
    setFood([...food, item]);
  };

  return (
    <div className="food-wrapper">
      <div className="food-card">
        {/* Header bar สำหรับสลับ Mode */}
        <div className="food-header">
          <span className="mode-badge">{mode === 'user' ? 'User Mode' : 'Admin Mode'}</span>
          <button onClick={toggleMode} className="btn-toggle-mode">
            {mode === 'user' ? 'Admin' : 'User'}
          </button>
        </div>

        <h3 className="food-title">Our Menu</h3>

        <FoodList food={food} deleteItem={deleteItem} mode={mode} />

        {mode === 'admin' && (
          <>
            <hr className="divider" />
            <FoodForm addItem={addItem} />
          </>
        )}
      </div>
    </div>
  );
};

export default FoodContainer;
