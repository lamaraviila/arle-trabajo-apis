import { Router } from 'express'
import { getProducto, createProducto, getProductos, deleteProducto, updateProducto } from '../controllers/producto.controller'


const router = Router();

router.route('/')
    .get(getProductos)
    .post( createProducto);

router.route('/:productoId')
    .get(getProducto)
    .delete(deleteProducto)
    .put(updateProducto);

export default router;