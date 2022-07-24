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
      const orders = await prisma.order.findMany({
        include: {
          user: {
            select: {
              id: true,
              name: true,
              surname: true,
            },
          },
          orderStatus: {
            select: {
              id: true,
              name: true,
            },
          },
          deliveryMethod: {
            select: {
              id: true,
              name: true,
            },
          },
          paymentMethod: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      });
      res.status(200).json(orders);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
