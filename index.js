
const express = require('express');
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');
const app = express();
const cors = require('cors');


app.use(express.json());
app.use(cors({
    origin: [
        "http://localhost:3000",
        "https://chatbackend-teal.vercel.app"
    ]
}));

app.use('/api/auth', authRoutes);
app.use('/api', productRoutes);

app.get("/", (req, res) => {
    res.status(200).send("Welcome to the christian shop");
});





const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
