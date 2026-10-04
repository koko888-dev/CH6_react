const FoodItem = ({ index, name, price, isBestSeller, deleteItem, mode }) => {
  return (
    <li className="food-item">
      <span className="food-item-info">
        • {name} - {price} baht {isBestSeller && <span className="badge-bestseller">🏵️</span>}
      </span>
      {mode === 'admin' && (
        <button onClick={() => deleteItem(index)} className="btn-del">
          Del
        </button>
      )}
    </li>
  );
};

export default FoodItem;
