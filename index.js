// import mongoose from 'mongoose';

// mongoose.connect('mongodb://127.0.0.1:27017/cinema_db')
//   .then(() => console.log('База данных фильмов подключена!'))
//   .catch((err) => console.log('Ошибка подключения:', err));

// const MovieSchema = new mongoose.Schema({
//     title: String,
//     genre: String,
//     rating: Number
// });

// const Movie = mongoose.model("Movie", MovieSchema);

// async function runCinema() {
//     await Movie.deleteMany();

//     await Movie.insertMany([
//         { title: 'Inception', genre: 'Sci-Fi', rating: 8.8 },
//         { title: 'Interstellar', genre: 'Sci-Fi', rating: 8.7},
//         { title: 'The Matrix', genre: 'Action', rating: 8.7 },
//         { title: 'Joker', genre: 'Drama', rating: 8.4 }
//     ]);

//     const movies = await Movie.find();
//     console.log('Список всех фильмов', movies);

//     process.exit();
// }

// runCinema();


import mongoose from "mongoose";

mongoose.connect('mongodb://127.0.0.1:27017/shop_db')
  .then(() => console.log('База данных товаров shop_db подключена!'))
  .catch((err) => console.log('Ошибка подключения:', err));

const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    inStock: Boolean
});

const Product = mongoose.model('Product', ProductSchema);

async function runShop() {
    await Product.deleteMany();
    console.log('Старые данные успешно удалены');

    await Product.insertMany([
        { name: 'Чипсы', price: 27000, inStock: true },
        { name: 'Вафли', price: 36000, inStock: false },
        { name: 'Шоколадный торт', price: 280000, inStock: true },
        { name: 'Бананы', price: 22000, inStock: true },
        { name: 'Арбуз', price: 25000, inStock: false }
    ]);

    const products = await Product.find();
    console.log('Список всех товаров в магазине:', products);

    process.exit();
}

runShop();