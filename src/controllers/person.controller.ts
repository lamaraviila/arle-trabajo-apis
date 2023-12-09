import { Request, Response } from 'express'

// DB
import { connect } from '../database'
import { Person } from '../interface/Person';
// Interfaces

export async function getPersons(req: Request, res: Response): Promise<Response | void> {
    try {
        const conn = await connect();
        const posts = await conn.query('SELECT * FROM person');
        return res.json(posts[0]);
    }
    catch (e) {
        console.log(e)
    }
}

export async function createPerson(req: Request, res: Response) {
    const newPost: Person = req.body;
    const conn = await connect();
    await conn.query('INSERT INTO person SET ?', [newPost]);
    res.json({
        message: 'New Person Created'
    });
}

export async function getPerson(req: Request, res: Response) {
    const id = req.params.postId;
    const conn = await connect();
    const posts = await conn.query('SELECT * FROM person WHERE id = ?', [id]);
    res.json(posts[0]);
}

export async function deletePerson(req: Request, res: Response) {
    const id = req.params.postId;
    const conn = await connect();
    await conn.query('DELETE FROM person WHERE id = ?', [id]);
    res.json({
        message: 'Person deleted'
    });
}

export async function updatePerson(req: Request, res: Response) {
    const id = req.params.postId;
    const updatePost: Person = req.body;
    const conn = await connect();
    await conn.query('UPDATE person set ? WHERE id = ?', [updatePost, id]);
    res.json({
        message: 'Person Updated'
    });
}