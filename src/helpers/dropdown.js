// dropdown.js

export const openFilterOptions = (isOpen, setIsOpen) => {
    setIsOpen(!isOpen);
};

export const openSortOptions = (isOpen, setIsOpen) => {
    setIsOpen(!isOpen);
};

export const handleOptionSelect = (optionValue, setSelectedFilter, setIsOpen) => {
    setSelectedFilter(optionValue);
    setIsOpen(false);
};

export const handleSortOptionSelect = (type, direction, currentSort, setSelectedSort, setIsOpen) => {
    // If clicking the same sort type, toggle direction
    if (currentSort.type === type) {
        setSelectedSort({
            type,
            direction: currentSort.direction === 'asc' ? 'desc' : 'asc'
        });
    } else {
        // If new sort type, use the provided direction
        setSelectedSort({ type, direction });
    }
    setIsOpen(false);
};

export const getFilteredMenuItems = (selectedFilter, menuData) => {
    const menu = menuData.all_day_menu;
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
            return menu.breakfast_classics;
    }
};

export const getSortedItems = (items, sortConfig) => {
    const { type, direction } = sortConfig;
    
    if (type === 'none') return items;

    return [...items].sort((a, b) => {
        let compareValueA, compareValueB;

        switch(type) {
            case 'price':
                compareValueA = a.price || a.base_price || 0;
                compareValueB = b.price || b.base_price || 0;
                break;
            case 'calories':
                compareValueA = a.nutrition.calories;
                compareValueB = b.nutrition.calories;
                break;
            case 'protein':
                compareValueA = a.nutrition.protein;
                compareValueB = b.nutrition.protein;
                break;
            default:
                return 0;
        }

        if (direction === 'asc') {
            return compareValueA - compareValueB;
        } else {
            return compareValueB - compareValueA;
        }
    });
};

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