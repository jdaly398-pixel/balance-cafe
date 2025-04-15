// dropdown.js

// Function to toggle dropdown
export const openFilterOptions = (isOpen, setIsOpen) => {
    setIsOpen(!isOpen);
};

// Function to handle option selection
export const handleOptionSelect = (optionValue, setSelectedFilter, setIsOpen) => {
    setSelectedFilter(optionValue);
    setIsOpen(false);
};

// Function to get filtered menu items
export const getFilteredMenuItems = (selectedFilter, menuData) => {
    // Access the all_day_menu object from your JSON
    const menu = menuData.all_day_menu;
    
    // Return different sections based on the selected filter
    switch(selectedFilter) {
        case 'Breakfast Options':
            return menu.breakfast_classics;
        case 'Sandwiches and Wraps':
            return menu.sandwiches_and_wraps;
        case 'Salads':
            return menu.salads;
        case 'Baked Goods':
            return menu.baked_goods;
        default:
            return menu.breakfast_classics; // Default to breakfast
    }
};

// Function to render price
export const renderPrice = (item) => {
    if (item.base_price) {
        return {
            mainPrice: item.base_price.toFixed(2),
            additionalPrice: item.with_salads_price ? item.with_salads_price.toFixed(2) : null
        };
    }
    return {
        mainPrice: item.price.toFixed(2),
        additionalPrice: null
    };
};