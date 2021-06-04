import client from 'prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const job = await client.job.findMany({
      include: { company: true, tag: true, salary: true },
    });
    res.send(job);
  } catch (error) {
    throw new Error(error);
  }
};
