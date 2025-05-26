const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Products = require("../models/Product");

router.get("/", async (req,res) => {
    try {
        const users = await User.find();
        res.status(201).json(users);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
})

router.post("/add-user", async (req, res) => {
    try {
        const user = await new User(req.body);
        const saved = await user.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
})

router.get("/fetch-product", async (req,res) => {
    try {
        const products = await Products.find({});
        res.status(201).json(products);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
})

router.put("/update-cart/:id", async (req, res) => {
    const productId = req.params.id;
    const { newId } = req.body;

    try {
        const updateCart = await User.findByIdAndUpdate(
            productId,
            { $addToSet: { Cart: newId } },
            { new: true }
        );
        res.status(201).json(updateCart);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
})

router.put("/update-orders/:id", async (req, res) => {
    const productId = req.params.id;
    const { newId } = req.body;

    try {
        const updateOrder = await User.findByIdAndUpdate(
            productId,
            { $addToSet: { Orders: newId } },
            { new: true }
        );
        res.status(201).json(updateOrder);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
})

router.delete("/delete-user/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const deleteUser = await User.findByIdAndDelete(id);
        if (!deleteUser) {
            res.status(401).json(err);
        } else {
            res.status(201).json(deleteUser);
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
})

router.delete("/delete-product/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const deleteProduct = await Products.findByIdAndDelete(id);
        if (!deleteProduct) {
            res.status(401).json(err);
        } else {
            res.status(201).json(deleteProduct);
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
})

router.post("/add-product", async (req, res) => {
    try {
        const addProduct = await new Products(req.body);
        const saved = await addProduct.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
})

module.exports = router;