import { NextApiResponse, NextApiRequest } from "next";
import Publisher from "../../../models/publisher";
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
      const publisher = await Publisher.find();
      res.status(200).json(publisher);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  if (method === "POST") {
    try {
      const publisher = await Publisher.create(req.body);
      res.status(201).json(publisher);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
