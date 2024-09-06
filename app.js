const express = require('express');
const app = express();
const path = require('path');

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Middleware to serve static files (e.g., CSS)
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Home Route
app.get('/', (req, res) => {
  res.render('home', { title: 'Onzengko Clothing' });
});

// Products Route
app.get('/products', (req, res) => {
  // A list of sample products for simplicity
  const products = [
    { name: 'T-shirt', price: 20 },
    { name: 'Jeans', price: 50 },
    { name: 'Jacket', price: 80 }
  ];
  res.render('products', { title: 'Products', products });
});

// Contact Route (GET and POST)
app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Us' });
});

app.post('/contact', (req, res) => {
  const { name, message } = req.body;
  res.send(`Thanks for contacting us, ${name}! Your message: "${message}" has been received.`);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
