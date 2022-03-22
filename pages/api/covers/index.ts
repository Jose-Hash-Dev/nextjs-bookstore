import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../utils/dbConnect";
import Cover from "../../../models/cover";
import mongoose from "mongoose";

dbConnect();

mongoose.set("debug", (collectionName, method, query, doc) => {
  console.log(`${collectionName}.${method}`, JSON.stringify(query), doc);
});

export default async function getAllCover(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  if (method === "GET") {
    try {
      const covers = await Cover.find();
      res.status(200).json(covers);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === "POST") {
    try {
      const cover = await Cover.create(req.body);
      res.status(201).json(cover);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
