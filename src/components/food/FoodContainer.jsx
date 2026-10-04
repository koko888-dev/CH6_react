import { useState, useEffect } from 'react';
import FoodList from './FoodList';
import FoodForm from './FoodForm';

const initialFood = [
  { name: "cake", price: 35, isBestSeller: true },
  { name: "bread", price: 25, isBestSeller: false },
  { name: "milk", price: 15, isBestSeller: true },
  { name: "donut", price: 45, isBestSeller: false },
  { name: "cookie", price: 55, isBestSeller: true },
];

const FoodContainer = () => {
  const [food, setFood] = useState(initialFood);

  // localStorage บันทึก Mode ปัจจุบันไว้
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
    <div style={{ border: '1px solid #7a9a60', padding: '16px', width: '360px', fontFamily: 'serif', background: '#fff', borderRadius: '4px' }}>
      
      {/* Header bar สำหรับสลับ User Mode / Admin Mode */}
      <div style={{ 
        display: 'flex', 
        justify: 'flex-end', 
        alignItems: 'center', 
        gap: '8px',
        border: '1px solid #7a9a60',
        borderRadius: '12px',
        padding: '4px 12px',
        marginBottom: '16px',
        fontSize: '14px'
      }}>
        <span>{mode === 'user' ? 'User Mode' : 'Admin Mode'}</span>
        <button 
          onClick={toggleMode}
          style={{ padding: '2px 8px', cursor: 'pointer', borderRadius: '4px' }}
        >
          {mode === 'user' ? 'Admin' : 'User'}
        </button>
      </div>

      <h3 style={{ marginTop: 0, marginBottom: '16px' }}>Our Menu</h3>

      {/* ส่ง mode ไปยัง FoodList */}
      <FoodList food={food} deleteItem={deleteItem} mode={mode} />

      {/* แสดง FoodForm เฉพาะใน Admin Mode */}
      {mode === 'admin' && (
        <>
          <hr style={{ borderColor: '#7a9a60', margin: '16px 0' }} />
          <FoodForm addItem={addItem} />
        </>
      )}
    </div>
  );
};

export default FoodContainer;
