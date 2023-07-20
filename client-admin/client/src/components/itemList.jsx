import { useState, useEffect } from 'react';

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch('http://localhost:3000/items');
      const data = await response.json();
      setItems(data);
    };

    fetchItems();
  }, []);


  return (
    <div>
      <h1>Items</h1>
      {items.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <p>{item.price}</p>
          <img src={item.imgUrl} alt={item.name} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
