import { NextApiRequest, NextApiResponse } from "next";
import Publisher from "../../../models/publisher";
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
      const publisher = await Publisher.findById(id);
      res.status(200).json(publisher);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === "POST") {
    try {
      const publisher = await Publisher.create(req.body);
      res.status(201).json(publisher);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
