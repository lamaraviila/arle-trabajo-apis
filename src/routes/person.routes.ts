import { Router } from 'express'
import { getPerson, createPerson, getPersons, deletePerson, updatePerson } from '../controllers/person.controller'

const router = Router();

router.route('/')
    .get(getPersons)
    .post(createPerson);

router.route('/:personId')
    .get(getPerson)
    .delete(deletePerson)
    .put(updatePerson);

export default router;