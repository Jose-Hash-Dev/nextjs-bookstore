import { NextApiRequest, NextApiResponse } from "next";
import Book from "../../../models/Book";
import dbConnect from "../../../lib/dbConnect";
dbConnect().then((result) => {
  console.log("Connection in index.tsx");
});

export default async function getAllProducts(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const books = await Book.find();
      res.status(200).json(books);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (req.method === "POST") {
    try {
      const books = await Book.create(req.body);
      res.status(201).json(books);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
