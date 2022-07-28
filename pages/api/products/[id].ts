import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type UpdateBookType = {
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
  if (method === "PUT") { 
    const {image, title, description, pages, price, stock, authorIds, languageIds, categoryIds, }: UpdateBookType = req.body;
    console.log(req.body)
    const result = await prisma.book.update({
      where: {
        id: Number(id),
      },
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
      }
    });
    res.json(result);
  }
}
