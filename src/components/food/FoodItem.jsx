const FoodItem = ({ index, name, price, isBestSeller, deleteItem }) => {
  return (
    <li style={{ marginBottom: '6px' }}>
      {name} - {price} baht {isBestSeller && '🏵️'}{' '}
      <button 
        onClick={() => deleteItem(index)}
        style={{ padding: '0 4px', fontSize: '12px', cursor: 'pointer' }}
      >
        Del
      </button>
    </li>
  );
};

export default FoodItem;
