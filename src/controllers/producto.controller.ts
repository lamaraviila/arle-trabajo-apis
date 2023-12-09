import { Request, Response } from 'express'

// DB
import { connect } from '../database'
import { Producto }from '../interface/Productos';
// Interfaces

export async function getProductos(req: Request, res: Response): Promise<Response | void> {
    try {
        const conn = await connect();
        const productos = await conn.query('SELECT * FROM producto');
        return res.json(productos[0]);
    }
    catch (e) {
        console.log(e)
    }
}

export async function createProducto(req: Request, res: Response) {
    const newProducto: Producto = req.body;
    const conn = await connect();
    await conn.query('INSERT INTO producto SET ?', [newProducto]);
    res.json({
        message: 'New producto Created'
    });
}

export async function getProducto(req: Request, res: Response) {
    const id = req.params.ProductoId;
    const conn = await connect();
    const posts = await conn.query('SELECT * FROM producto WHERE id = ?', [id]);
    res.json(posts[0]);
}

export async function deleteProducto(req: Request, res: Response) {
    const id = req.params.productoId;
    const conn = await connect();
    await conn.query('DELETE FROM producto WHERE id = ?', [id]);
    res.json({
        message: 'producto deleted'
    });
}

export async function updateProducto(req: Request, res: Response) {
    const id = req.params.productoId;
    const updateProducto: Producto = req.body;
    const conn = await connect();
    await conn.query('UPDATE producto set ? WHERE id = ?', [updateProducto, id]);
    res.json({
        message: 'producto Updated'
    });
}