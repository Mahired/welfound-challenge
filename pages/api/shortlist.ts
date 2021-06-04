import client from 'prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const shortlist = await client.shortlist.findMany();
    res.send(shortlist);
  } catch (error) {
    throw new Error(error);
  }
};
