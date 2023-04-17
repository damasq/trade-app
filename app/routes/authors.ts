import express from "express";
import { getAuthor, getAuthorsList } from "../controllers/authorController";

const authorsRouter = express.Router();

authorsRouter.get('/', async (req, res) => {
  const authors = await getAuthorsList();
  res.send(authors);
});

authorsRouter.get('/:id',async (req, res) => {
  const author = await getAuthor(req.params.id);
  res.send(author);
})

authorsRouter.get('/:id/books', async (req, res) => {
  const author = await getAuthor(req.params.id);
  res.send(author?.books);
});

export default authorsRouter;