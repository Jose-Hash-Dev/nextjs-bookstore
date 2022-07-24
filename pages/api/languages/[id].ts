import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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
      const language = await prisma.language.findUnique({
        where: {
          id: Number(id),
        },
        include: {
          books: true,
        },
      });
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
