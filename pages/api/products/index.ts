import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  if (method === "GET") {
    try {
      const books = await prisma.book.findMany({
        include: {
          languages: true,
          categories: true,
          authors: true,
        },
      });
      res.status(200).json(books);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
