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
      const languages = await prisma.language.findMany();
      res.status(200).json(languages);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
