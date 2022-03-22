import { NextApiRequest, NextApiResponse } from "next";
import Author from "../../../models/author";
import dbConnect from "../../../utils/dbConnect";

dbConnect().then(() => {
  console.log("Connected");
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  if (method === "GET") {
    try {
      const author = await Author.find();
      res.status(200).json(author);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  if (method === "POST") {
    try {
      const author = await Author.create(req.body);
      res.status(201).json(author);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
