const FoodItem = ({ index, name, price, isBestSeller, deleteItem, mode }) => {
  return (
    <li style={{ marginBottom: '6px' }}>
      {name} - {price} baht {isBestSeller && '🏵️'}{' '}
      {/* แสดงปุ่ม Del เฉพาะใน Admin Mode */}
      {mode === 'admin' && (
        <button 
          onClick={() => deleteItem(index)}
          style={{ padding: '0 4px', fontSize: '12px', cursor: 'pointer', marginLeft: '4px' }}
        >
          Del
        </button>
      )}
    </li>
  );
};

export default FoodItem;
