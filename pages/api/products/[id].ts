import { NextApiRequest, NextApiResponse } from "next";
import Product from "../../../models/product";
import dbConnect from "../../../utils/dbConnect";
import mongoose from "mongoose";

dbConnect().then(() => {
  console.log("Connection");
});

mongoose.set("debug", (collectionName, method, query, doc) => {
  console.log(`${collectionName}.${method}`, JSON.stringify(query), doc);
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    method,
    query: { id },
  } = req;
  if (method === "GET") {
    try {
      const book = await Product.findById(id)
        .populate("covers", "name")
        .populate("publishers", "name").exec();
      res.status(200).json(book);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
