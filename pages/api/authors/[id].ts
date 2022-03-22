import { NextApiRequest, NextApiResponse } from "next";
import Author from "../../../models/author";
import dbConnect from "../../../utils/dbConnect";

dbConnect().then((result) => {
  return console.log(result);
});

export default async function getSingleProduct(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    method,
    query: { id },
  } = req;
  if (method === "GET") {
    try {
      const author = await Author.findById(id);
      res.status(200).json(author);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === "POST") {
    try {
      const author = await Author.create(req.body);
      res.status(201).json(author);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
