require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors())
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api/products', (req, res) => {
    const prod = [
        {
            "id": 1,
            "name": "Smartphone",
            "brand": "Samsung",
            "model": "Galaxy S24 Ultra",
            "price": 1299.99,
            "features": ["200MP Camera", "Snapdragon 8 Gen 3", "5000mAh Battery"],
            "picture": "https://cdn.hukut.com/samsung-s25-ultra-price-in-nepal.png1738228459554"
        },
        {
            "id": 2,
            "name": "Laptop",
            "brand": "Apple",
            "model": "MacBook Air M3",
            "price": 1499.99,
            "features": ["M3 Chip", "16GB RAM", "512GB SSD"],
            "picture": "https://cdn.hukut.com/samsung-s25-ultra-price-in-nepal.png1738228459554"
        },
        {
            "id": 3,
            "name": "Smartwatch",
            "brand": "Garmin",
            "model": "Fenix 7",
            "price": 699.99,
            "features": ["GPS Tracking", "Heart Rate Monitor", "AMOLED Display"],
            "picture": "https://cdn.hukut.com/samsung-s25-ultra-price-in-nepal.png1738228459554"
        },
        {
            "id": 4,
            "name": "Tablet",
            "brand": "Apple",
            "model": "iPad Pro 12.9",
            "price": 1099.99,
            "features": ["M2 Chip", "120Hz Display", "Face ID"],
            "picture": "https://cdn.hukut.com/samsung-s25-ultra-price-in-nepal.png1738228459554"
        },
        {
            "id": 5,
            "name": "Wireless Earbuds",
            "brand": "Sony",
            "model": "WF-1000XM5",
            "price": 299.99,
            "features": ["Noise Cancelling", "Hi-Res Audio", "Long Battery Life"],
            "picture": "https://cdn.hukut.com/samsung-s25-ultra-price-in-nepal.png1738228459554"
        },
        {
            "id": 6,
            "name": "Gaming Console",
            "brand": "Sony",
            "model": "PlayStation 5",
            "price": 499.99,
            "features": ["8K Support", "Ultra-fast SSD", "DualSense Controller"],
            "picture": "https://cdn.hukut.com/samsung-s25-ultra-price-in-nepal.png1738228459554"
        },
        {
            "id": 7,
            "name": "Monitor",
            "brand": "LG",
            "model": "UltraGear 27GN950",
            "price": 899.99,
            "features": ["4K UHD", "144Hz Refresh Rate", "HDR 600"],
            "picture": "https://cdn.hukut.com/samsung-s25-ultra-price-in-nepal.png1738228459554"
        },
        {
            "id": 8,
            "name": "Mechanical Keyboard",
            "brand": "Keychron",
            "model": "K8 Pro",
            "price": 129.99,
            "features": ["Hot-swappable Keys", "Wireless/Bluetooth", "RGB Lighting"],
            "picture": "https://cdn.hukut.com/samsung-s25-ultra-price-in-nepal.png1738228459554"
        },
        {
            "id": 9,
            "name": "External SSD",
            "brand": "Samsung",
            "model": "T7 Shield",
            "price": 159.99,
            "features": ["2TB Storage", "USB 3.2", "Shock-resistant"],
            "picture": "https://cdn.hukut.com/samsung-s25-ultra-price-in-nepal.png1738228459554"
        },
        {
            "id": 10,
            "name": "Smart Speaker",
            "brand": "Amazon",
            "model": "Echo Dot 5th Gen",
            "price": 49.99,
            "features": ["Alexa Built-in", "Compact Design", "Improved Bass"],
            "picture": "https://cdn.hukut.com/samsung-s25-ultra-price-in-nepal.png1738228459554"
        }
    ]

    res.send(prod);
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});