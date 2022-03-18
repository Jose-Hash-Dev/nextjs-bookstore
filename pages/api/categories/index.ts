import { NextApiResponse, NextApiRequest } from "next";
import Category from "../../../models/category";
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
      const category = await Category.find();
      res.status(200).json(category);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  if (method === "POST") {
    try {
      const category = await Category.create(req.body);
      res.status(201).json(category);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
