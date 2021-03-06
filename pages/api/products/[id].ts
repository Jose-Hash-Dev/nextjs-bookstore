import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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
      const book = await prisma.book
        .findUnique({
          where: {
            id: Number(id),
          },
          include: {
            languages: true,
            categories: true,
            authors: true,
          },
        })
        .catch((err) => console.log(err));

      res.status(200).json(book);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === "DELETE") {
    try {
      const book = await prisma.book
        .delete({
          where: {
            id: Number(id),
          },
        })
        .catch((err) => console.log(err));
      res.status(200).json(book);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
