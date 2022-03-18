import { NextApiRequest, NextApiResponse } from "next";
import Language from "../../../models/language";
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
      const language = await Language.findById(id);
      res.status(200).json(language);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === "POST") {
    try {
      const language = await Language.create(req.body);
      res.status(201).json(language);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
