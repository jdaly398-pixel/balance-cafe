import React, { useState } from 'react';
import '../styles/Menu.css'
import menuData from '../data/cafe_menu.json';

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('');

  // Object mapping JSON keys to display names
  const categoryNames = {
    'breakfast_classics': 'Breakfast Classics',
    'sandwiches_and_wraps': 'Sandwiches/Wraps',
    'salads': 'Salads',
    'baked_goods': 'Baked Goods'
  };

  return (
    <div>
      <select 
        value={selectedCategory} 
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">Select a category</option>
        {Object.entries(categoryNames).map(([key, name]) => (
          <option key={key} value={key}>
            {name}
          </option>
        ))}
      </select>

      <div className="menu-items">
        {selectedCategory && menuData.all_day_menu[selectedCategory].map((item, index) => (
          <div key={index} className="menu-item">
            <h3>{item.name}</h3>
            {item.description && <p>{item.description}</p>}
            <p>€{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;