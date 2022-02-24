import { NextApiRequest, NextApiResponse } from "next";
import Book from "../../../models/Book";
import dbConnect from "../../../lib/dbConnect";
dbConnect().then((result) => {
  console.log("Connection in [id].ts");
});

export default async function getAllProducts(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    method,
    query: { id },
  } = req;

  if (method === "GET") {
    try {
      const book = await Book.findById(id);
      res.status(200).json(book);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === "POST") {
    try {
      const books = await Book.create(req.body);
      res.status(201).json(books);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
