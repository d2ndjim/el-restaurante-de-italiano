const productsArray = [
  {
    id: 1,
    name: 'White Sauce Pasta Chicken',
    category: 'Non-Vegetarian',
    price: '30.0',
    description: 'Sauce, Chicken, Toamtoes',
    image:
      'https://5.imimg.com/data5/NN/FK/GLADMIN-37906587/chicken-stroganoff-500x500.png',
    created_at: '2022-10-08T17:54:01.112Z',
  },
  {
    id: 2,
    name: 'Vegetarian Lasagna',
    category: 'Vegetarian',
    price: '50.0',
    description: 'Onion, lasagna noodles, Fresh Mushrooms, zucchini',
    image:
      'https://images-gmi-pmc.edge-generalmills.com/afab085f-35c7-4d7a-9704-ba315297310a.jpg',
    created_at: '2022-10-08T17:59:20.694Z',
  },
  {
    id: 3,
    name: 'Stofgliatelle',
    category: 'Dessert',
    price: '20.0',
    description: 'Water , Honey, Milk ',
    image: 'https://www.nonnabox.com/wp-content/uploads/sfogliatelle-01.jpg',
    created_at: '2022-10-08T18:02:19.238Z',
  },
  {
    id: 4,
    name: 'Strawberry Water',
    category: 'Drinks',
    price: '15.0',
    description: 'Strawberry, Lime, Sugar',
    image:
      'https://www.acouplecooks.com/wp-content/uploads/2021/06/Strawberry-Water-006.jpg',
    created_at: '2022-10-08T18:19:57.740Z',
  },
  {
    id: 7,
    name: 'Salad',
    category: 'Vegetarian',
    price: '50.0',
    description: 'Healhy Italian Salad',
    image:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmVnYW58ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
    created_at: '2022-11-19T15:28:57.080Z',
  },
  {
    id: 8,
    name: 'Fruit Veggie',
    category: 'Vegetarian',
    price: '38.0',
    description: 'Vegetables, fruits, and yoghurt',
    image:
      'https://plus.unsplash.com/premium_photo-1664640733984-cbee33873783?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmVnZXRhcmlhbnxlbnwwfHwwfHw=&auto=format&fit=crop&w=600&q=60',
    created_at: '2022-11-19T15:32:08.792Z',
  },
  {
    id: 9,
    name: 'Assorted Fruits',
    category: 'Vegetarian',
    price: '48.0',
    description: 'Assorted fruits, and vegetables',
    image:
      'https://images.unsplash.com/photo-1540914124281-342587941389?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dmVnYW58ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
    created_at: '2022-11-19T15:34:37.364Z',
  },
  {
    id: 10,
    name: 'Pizza',
    category: 'Vegetarian',
    price: '65.0',
    description: 'ChickPea, Blue vegetables',
    image:
      'https://images.unsplash.com/photo-1532768778661-1b347c5f02ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHZlZ2FufGVufDB8fDB8fA==&auto=format&fit=crop&w=600&q=60',
    created_at: '2022-11-19T15:37:34.162Z',
  },
  {
    id: 11,
    name: 'Vegetable Salad',
    category: 'Vegetarian',
    price: '47.0',
    description: 'Vegetables, cream toppings',
    image:
      'https://images.unsplash.com/photo-1543353071-087092ec393a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGxhbnQlMjBiYXNlZHxlbnwwfHwwfHw=&auto=format&fit=crop&w=600&q=60',
    created_at: '2022-11-19T15:40:28.628Z',
  },
  {
    id: 12,
    name: 'Spaghetti',
    category: 'Non-Vegetarian',
    price: '66.0',
    description: 'Meatballs, Ravioli, Fettucine Siciliano',
    image:
      'https://www.deepalisawant.com/courses/culinary/assets/img/culinary/IMG_1328.JPG',
    created_at: '2022-11-19T15:48:16.104Z',
  },
  {
    id: 13,
    name: 'Grilled Jerk Chicken with Mango Cucumber Salad',
    category: 'Non-Vegetarian',
    price: '72.0',
    description: 'Chicken Breasts, Mango, Cucumber, ',
    image:
      'https://hips.hearstapps.com/hmg-prod/images/grilled-jerk-chicken-mango-cucumber-salad-wdy-1527881689.jpg?crop=1xw:0.99975xh',
    created_at: '2022-11-19T15:51:47.589Z',
  },
  {
    id: 14,
    name: 'Peanut Noodles with Chicken',
    category: 'Non-Vegetarian',
    price: '42.0',
    description:
      'Thin rice noodles, shredded white-meat chicken, Peanut butter',
    image:
      'https://hips.hearstapps.com/hmg-prod/images/peanut-noodles-with-chicken-1532548205.jpg?crop=1xw:1xh',
    created_at: '2022-11-19T15:55:33.347Z',
  },
  {
    id: 15,
    name: 'Classic tiramisu',
    category: 'Dessert',
    price: '55.0',
    description: 'Mascarpone, Marsala and Savoiardi biscuits',
    image:
      'https://images.immediate.co.uk/production/volatile/sites/2/2019/07/Tiramisu-d68a628.jpg?quality=90&webp=true&resize=1300,866',
    created_at: '2022-11-20T12:59:11.444Z',
  },
  {
    id: 16,
    name: 'Butterscotch budino',
    category: 'Dessert',
    price: '25.0',
    description: 'Budino, Butterscotch, Whisky and Salted caramel topping',
    image:
      'https://images.immediate.co.uk/production/volatile/sites/2/2022/01/Pizzeria-Mozza-029-2cf2924.jpg?quality=90&webp=true&crop=23px,2912px,5428px,3616px&resize=1300,866',
    created_at: '2022-11-20T13:01:34.293Z',
  },
  {
    id: 17,
    name: 'Panna cotta with cherry and ginger sauce',
    category: 'Dessert',
    price: '33.0',
    description: 'Panna cotta, Gelatine',
    image:
      'https://images.immediate.co.uk/production/volatile/sites/2/2019/08/Pannacotta_Cherry-2322e67.jpg?quality=90&webp=true&resize=1300,866',
    created_at: '2022-11-20T13:03:56.402Z',
  },
  {
    id: 18,
    name: 'Italian lemon cake',
    category: 'Dessert',
    price: '42.0',
    description: 'Italian almond, Amalfi lemon',
    image:
      'https://images.immediate.co.uk/production/volatile/sites/2/2017/07/Lemon-Cake.jpg?quality=90&webp=true&resize=1300,866',
    created_at: '2022-11-20T13:05:52.865Z',
  },
  {
    id: 19,
    name: 'Sicilian ricotta cake',
    category: 'Dessert',
    price: '22.0',
    description: 'Creamy baked Ricotta, Chocolate chunks',
    image:
      'https://images.immediate.co.uk/production/volatile/sites/2/2022/03/Ricotta-Cake--0e5c9b8.jpg?quality=90&webp=true&resize=1300,866',
    created_at: '2022-11-20T13:08:04.342Z',
  },
  {
    id: 20,
    name: 'Bellini',
    category: 'Drinks',
    price: '20.0',
    description: 'Italian Prosecco wine and Peach Purée.',
    image:
      'https://travel2next.com/wp-content/uploads/non-alcoholic-italian-drinks.jpg',
    created_at: '2022-11-20T13:13:09.960Z',
  },
  {
    id: 21,
    name: 'Bombardino',
    category: 'Drinks',
    price: '21.0',
    description: 'Fresh egg yolks, Brandy, Whipped cream, and Cinnamon.',
    image:
      'https://travel2next.com/wp-content/uploads/classic-italian-drinks-Bombardino.jpg',
    created_at: '2022-11-20T13:15:16.068Z',
  },
  {
    id: 22,
    name: 'Hugo Spritz',
    category: 'Drinks',
    price: '23.0',
    description: 'Prosecco, Elderflower syrup and Club soda with mint leaves',
    image:
      'https://travel2next.com/wp-content/uploads/popular-italian-drinks-Hugo-Spritz.jpg',
    created_at: '2022-11-20T13:17:28.494Z',
  },
  {
    id: 23,
    name: 'Garibaldi',
    category: 'Drinks',
    price: '25.0',
    description: 'Sicilian and Calabrian oranges',
    image:
      'https://travel2next.com/wp-content/uploads/traditional-italian-drinks-garibaldi.jpg',
    created_at: '2022-11-20T13:19:03.260Z',
  },
  {
    id: 24,
    name: 'Negroni',
    category: 'Drinks',
    price: '27.0',
    description: 'Red vermouth, Gin, Campari, Peel of Orange',
    image:
      'https://travel2next.com/wp-content/uploads/traditional-italian-drinks-non-alcoholic-1.jpg',
    created_at: '2022-11-20T13:23:17.057Z',
  },
  {
    id: 30,
    name: 'Tarpon Cellars 2021 Cambaro Red',
    category: 'Wines',
    price: '28.0',
    description: 'Nebbiolo, Primitivo, Syrah, Tempranillo, and more',
    image:
      'https://preview.colorlib.com/theme/feliciano/images/wine-1.jpg.webp',
    created_at: '2022-11-20T13:52:48.065Z',
  },
  {
    id: 31,
    name: 'Altocedro Malbec Reserva 2018',
    category: 'Wines',
    price: '30.0',
    description: 'Nebbiolo, Primitivo, Syrah, Tempranillo, and more',
    image:
      'https://preview.colorlib.com/theme/feliciano/images/wine-2.jpg.webp',
    created_at: '2022-11-20T13:55:13.044Z',
  },
  {
    id: 32,
    name: 'Grape Wine',
    category: 'Wines',
    price: '26.0',
    description: 'Nebbiolo, Primitivo, Syrah, Tempranillo, and more',
    image:
      'https://preview.colorlib.com/theme/feliciano/images/wine-5.jpg.webp',
    created_at: '2022-11-20T13:56:07.842Z',
  },
  {
    id: 33,
    name: 'Sojourn Cabernet Sauvignon 2019 ',
    category: 'Wines',
    price: '85.0',
    description:
      'An Oakville, Calif, with concentrated fruit and pronounced tannins',
    image:
      'https://preview.colorlib.com/theme/feliciano/images/wine-8.jpg.webp',
    created_at: '2022-11-20T13:58:27.743Z',
  },
];

function getProductData(id) {
  const productData = productsArray.find((product) => product.id === id);

  if (productData === undefined) {
    // console.log(`Product data does not exist for ID: ${id}`);
    return undefined;
  }

  return productData;
}

export { productsArray, getProductData };
