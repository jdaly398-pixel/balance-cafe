import React, { useState } from "react";
import "../styles/Menu.css";
import menuData from "../data/cafe_menu.json";
import { 
    openFilterOptions, 
    handleOptionSelect, 
    getFilteredMenuItems,
    renderPrice 
} from '../helpers/dropdown';

function Menu() {
    // Initialize state variables
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState('Breakfast Options');

    // Get the filtered items using the imported function
    const filteredItems = getFilteredMenuItems(selectedFilter, menuData);

    return (
        <div className="mainContainer">
            {/* Title Section */}
            <div className="title">
                <h1>{selectedFilter}</h1>
            </div>

            {/* Buttons Section */}
            <div className="buttonContainer">
                <div className="filter">
                    <button 
                        onClick={() => openFilterOptions(isFilterOpen, setIsFilterOpen)} 
                        className="filterButton"
                    >
                        Filter
                    </button>
                    <div className={`filterOptions ${isFilterOpen ? 'show' : ''}`}>
                        <div 
                            className="select-option" 
                            onClick={() => handleOptionSelect('Breakfast Options', setSelectedFilter, setIsFilterOpen)}
                        >
                            Breakfast Options
                        </div>
                        <div 
                            className="select-option" 
                            onClick={() => handleOptionSelect('Sandwiches and Wraps', setSelectedFilter, setIsFilterOpen)}
                        >
                            Sandwiches and Wraps
                        </div>
                        <div 
                            className="select-option" 
                            onClick={() => handleOptionSelect('Salads', setSelectedFilter, setIsFilterOpen)}
                        >
                            Salads
                        </div>
                        <div 
                            className="select-option" 
                            onClick={() => handleOptionSelect('Baked Goods', setSelectedFilter, setIsFilterOpen)}
                        >
                            Baked Goods
                        </div>
                    </div>
                </div>
                <div className="sort">
                    <button className="sortButton">Sort</button>
                </div>
            </div>

            {/* Menu Items Display */}
            <div className="menuArea">
                {filteredItems.map((item, index) => (
                    <div key={index} className="menuItem">
                        <h3>{item.name}</h3>
                        {item.description && (
                            <p className="description">{item.description}</p>
                        )}
                        {item.options && (
                            <p className="options">Options: {item.options}</p>
                        )}
                        <p className="price">
                            €{renderPrice(item).mainPrice}
                            {renderPrice(item).additionalPrice && 
                                ` / €${renderPrice(item).additionalPrice} with salads`
                            }
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Menu;