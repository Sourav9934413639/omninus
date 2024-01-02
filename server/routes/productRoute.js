import express from 'express'
import { products } from '../model/product.js';
import { getProducts } from '../controllers/product.js';
const router=express.Router();
router.route("/products").post(products).get(getProducts);

export default router;