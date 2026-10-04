import { useState } from 'react';
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

  const deleteItem = (index) => {
    setFood(food.filter((_, i) => i !== index));
  };

  const addItem = (item) => {
    setFood([...food, item]);
  };

  return (
    <div style={{ border: '1px solid #a8c39e', padding: '16px', width: '320px', fontFamily: 'serif', background: '#fff' }}>
      <h3 style={{ marginTop: 0, marginBottom: '16px' }}>Our Menu</h3>
      <FoodList food={food} deleteItem={deleteItem} />
      <hr style={{ borderColor: '#a8c39e', margin: '16px 0' }} />
      <FoodForm addItem={addItem} />
    </div>
  );
};

export default FoodContainer;
