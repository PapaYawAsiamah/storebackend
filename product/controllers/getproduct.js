const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const app = express();


app.use(express.json());

// Fetch all products
exports.getProducts = async (req, res) => {
    try {
        const products = await prisma.Product.findMany();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};