import FoodItem from './FoodItem';

const FoodList = ({ food, deleteItem, mode }) => {
  return (
    <div>
      <ul style={{ paddingLeft: '20px', margin: 0 }}>
        {food.map((item, index) => (
          <FoodItem
            key={index}
            index={index}
            name={item.name}
            price={item.price}
            isBestSeller={item.isBestSeller}
            deleteItem={deleteItem}
            mode={mode}
          />
        ))}
      </ul>
    </div>
  );
};

export default FoodList;
