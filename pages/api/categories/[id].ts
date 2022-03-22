import { NextApiRequest, NextApiResponse } from "next";
import Category from "../../../models/category";
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
      const category = await Category.findById(id);
      res.status(200).json(category);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === "POST") {
    try {
      const category = await Category.create(req.body);
      res.status(201).json(category);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
