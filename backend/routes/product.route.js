import express from "express";
import { getProducts, createProdcuts, updateProducts, deleteProducts} from "../controllers/product.controller.js";

const router = express.Router();

router.get('/', getProducts);

router.post('/', createProdcuts);

router.put('/:id', updateProducts);

router.delete("/:id", deleteProducts);

export default router;