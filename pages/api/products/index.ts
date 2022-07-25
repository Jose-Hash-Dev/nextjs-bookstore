import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type BodyType = {
  image: string;
  title: string;
  description: string;
  pages: string;
  price: string;
  stock: string;
  authorIds: number[];
  languageIds: number[];
  categoryIds: number[];
  id: string;
};

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
  if (method === "POST") {
    const {
      image,
      title,
      description,
      pages,
      price,
      stock,
      authorIds,
      languageIds,
      categoryIds,
    }: BodyType = req.body;
    const result = await prisma.book.create({
      data: {
        image: image,
        title: title,
        description: description,
        pages: pages,
        price: price,
        stock: stock,
        authors: { connect: authorIds.map((item) => ({ id: item })) },
        languages: { connect: languageIds.map((item) => ({ id: item })) },
        categories: { connect: categoryIds.map((item) => ({ id: item })) },
      },
    });

    res.json(result);
  }
}
