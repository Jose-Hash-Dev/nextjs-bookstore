import { NextApiRequest, NextApiResponse } from "next";
import Cover from "../../../models/cover";
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
      const cover = await Cover.findById(id);
      res.status(200).json(cover);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === "POST") {
    try {
      const cover = await Cover.create(req.body);
      res.status(201).json(cover);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
