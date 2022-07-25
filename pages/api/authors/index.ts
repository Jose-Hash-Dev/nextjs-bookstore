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
      const authors = await prisma.author.findMany();
      res.status(200).json(authors);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
