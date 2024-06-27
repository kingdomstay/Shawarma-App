const foodCatalog = [
    {
        id: '1',
        name: 'Шаурма',
        image: require('./images/shawerma.png'),
        category: 'shawerma',
        items: [
            { id: '1-1', name: 'Классическая шаурма', price: '200 руб' },
            { id: '1-2', name: 'Шаурма с курицей', price: '220 руб' },
            { id: '1-3', name: 'Шаурма с говядиной', price: '250 руб' },
        ],
    },
    {
        id: '2',
        name: 'Кебаб',
        image: require('./images/kebab.png'),
        category: 'kebab',
        items: [
            { id: '2-1', name: 'Классический кебаб', price: '300 руб' },
            { id: '2-2', name: 'Кебаб из баранины', price: '350 руб' },
        ],
    },
    {
        id: '3',
        name: 'Тандыр',
        image: require('./images/tandyr.png'),
        category: 'tandyr',
        items: [
            { id: '3-1', name: 'Тандырная лепешка', price: '50 руб' },
            { id: '3-2', name: 'Тандырный шашлык', price: '400 руб' },
        ],
    },
    {
        id: '4',
        name: 'Напитки',
        image: require('./images/drinks.png'),
        category: 'drinks',
        items: [
            { id: '4-1', name: 'Чай', price: '100 руб' },
            { id: '4-2', name: 'Кофе', price: '150 руб' },
        ],
    },
];

export default foodCatalog;
