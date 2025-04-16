import React, { useState, useEffect, useRef } from "react";
import "../styles/Menu.css";
import menuData from "../data/cafe_menu.json";
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { 
    handleOptionSelect,
    handleSortOptionSelect, 
    getFilteredMenuItems,
    renderPrice,
    getSortedItems,
    handleFilterClick,
    handleSortClick
} from '../helpers/dropdown';

function Menu() {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [isSortOpen, setIsSortOpen] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState('Breakfast Options');
    const [selectedSort, setSelectedSort] = useState({ type: 'none', direction: 'asc' });
    const [viewMode, setViewMode] = useState('card');

    const filterRef = useRef(null);
    const sortRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (filterRef.current && !filterRef.current.contains(event.target)) {
                setIsFilterOpen(false);
            }
            if (sortRef.current && !sortRef.current.contains(event.target)) {
                setIsSortOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const filteredItems = getFilteredMenuItems(selectedFilter, menuData);
    const sortedItems = getSortedItems(filteredItems, selectedSort);

    const toggleViewMode = () => {
        setViewMode(viewMode === 'card' ? 'list' : 'card');
    };

    const getSortButtonText = () => {
        switch(selectedSort.type) {
            case 'price':
                return `Price (${selectedSort.direction === 'asc' ? '↑' : '↓'})`;
            case 'calories':
                return `Calories (${selectedSort.direction === 'asc' ? '↑' : '↓'})`;
            case 'protein':
                return `Protein (${selectedSort.direction === 'asc' ? '↑' : '↓'})`;
            default:
                return 'Sort';
        }
    };

    return (
        <div className="mainContainer">
            <div className="title">
                <h1>{selectedFilter}</h1>
            </div>

            <div className="buttonContainer">
                <div className="filter" ref={filterRef}>
                    <button 
                        onClick={() => handleFilterClick(isFilterOpen, setIsFilterOpen, setIsSortOpen)}
                        className="filterButton"
                    >
                        Select Menu
                        <KeyboardArrowDownIcon />
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
                <div className="sort" ref={sortRef}>
                    <button 
                        onClick={() => handleSortClick(isSortOpen, setIsSortOpen, setIsFilterOpen)}
                        className="sortButton"
                    >
                        {getSortButtonText()}
                        <KeyboardArrowDownIcon />
                    </button>
                    <div className={`sortOptions ${isSortOpen ? 'show' : ''}`}>
                        <div 
                            className="select-option"
                            onClick={() => handleSortOptionSelect('price', 'asc', selectedSort, setSelectedSort, setIsSortOpen)}
                        >
                            Price (Low to High)
                        </div>
                        <div 
                            className="select-option"
                            onClick={() => handleSortOptionSelect('price', 'desc', selectedSort, setSelectedSort, setIsSortOpen)}
                        >
                            Price (High to Low)
                        </div>
                        <div 
                            className="select-option"
                            onClick={() => handleSortOptionSelect('calories', 'asc', selectedSort, setSelectedSort, setIsSortOpen)}
                        >
                            Calories (Low to High)
                        </div>
                        <div 
                            className="select-option"
                            onClick={() => handleSortOptionSelect('calories', 'desc', selectedSort, setSelectedSort, setIsSortOpen)}
                        >
                            Calories (High to Low)
                        </div>
                        <div 
                            className="select-option"
                            onClick={() => handleSortOptionSelect('protein', 'asc', selectedSort, setSelectedSort, setIsSortOpen)}
                        >
                            Protein (Low to High)
                        </div>
                        <div 
                            className="select-option"
                            onClick={() => handleSortOptionSelect('protein', 'desc', selectedSort, setSelectedSort, setIsSortOpen)}
                        >
                            Protein (High to Low)
                        </div>
                    </div>
                </div>
            </div>

            <div className="viewToggle">
                <button onClick={toggleViewMode}>
                    {viewMode === 'card' ? (
                        <>
                            <ViewListIcon /> Text Only
                        </>
                    ) : (
                        <>
                            <ViewModuleIcon /> Show Images
                        </>
                    )}
                </button>
            </div>

            <div className={`menuArea ${viewMode}`}>
                {sortedItems.map((item, index) => (
                    <div key={index} className={`menuItem ${viewMode}`}>
                        {viewMode === 'card' && (
                            <div className="menuItemImage">
                                <img src={item.image} alt={item.name} />
                            </div>
                        )}
                        <div className="menuItemContent">
                            <h3>{item.name}</h3>
                            {item.description && (
                                <p className="description">{item.description}</p>
                            )}
                            {item.options && (
                                <p className="options">Options: {item.options}</p>
                            )}
                            <div className="nutritionInfo">
                                <div className="nutritionItem">
                                    <LocalFireDepartmentIcon className="nutritionIcon" />
                                    <span>{item.nutrition.calories} kcal</span>
                                </div>
                                <div className="nutritionItem">
                                    <FitnessCenterIcon className="nutritionIcon" />
                                    <span>{item.nutrition.protein}g protein</span>
                                </div>
                            </div>
                            <p className="price">
                                €{renderPrice(item).mainPrice}
                                {renderPrice(item).additionalPrice && 
                                    ` / €${renderPrice(item).additionalPrice} with salads`
                                }
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Menu;