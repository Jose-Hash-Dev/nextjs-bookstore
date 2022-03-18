import { NextApiRequest, NextApiResponse } from "next";
import Product from "../../../models/product";
import dbConnect from "../../../utils/dbConnect";
import mongoose from "mongoose";

dbConnect().then((result) => {
  console.log(result);
});

mongoose.set("debug", (collectionName, method, query, doc) => {
  console.log(`${collectionName}.${method}`, JSON.stringify(query), doc);
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  if (method === "GET") {
    try {
      const book = await Product.find();
      res.status(200).json(book);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === "POST") {
    try {
      const book = await Product.create(req.body);
      res.status(201).json(book);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
