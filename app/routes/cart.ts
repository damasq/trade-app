import express from 'express';
import { getCartBooksList, removeBook, removeAllBooks, buyBooks } from '../controllers/cartController';

const cartRouter = express.Router();

cartRouter.get('/', (req, res) => {
	getCartBooksList()
	res.send()
})

cartRouter.delete('/remove', (req, res) => {
	removeBook()
	res.send()
})

cartRouter.delete('/removeAll', (req, res) => {
	removeAllBooks()
	res.send()
})

cartRouter.post('/buy', (req, res) => {
	buyBooks()
	res.send()
})

export default cartRouter;