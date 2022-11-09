import prisma from 'lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // if (!process.env.REVUE_API_KEY) {
  //   return res.status(200).json({ error: 'getrevue.co was not configured' });
  // }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }


  if (req.method === 'POST') {
    const newEntry = await prisma.subscribers.create({
      data: {
        email,
      }
    });

    return res.status(200).json({
      id: newEntry.id.toString(),
      updated_at: newEntry.updated_at
    });
  }

  // TODO: Waiting for getrevue api key
  // const result = await fetch('https://www.getrevue.co/api/v2/subscribers', {
  //   method: 'POST',
  //   headers: {
  //     Authorization: `Token ${process.env.REVUE_API_KEY}`,
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({ email })
  // });
  // const data = await result.json();

  // if (!result.ok) {
  //   return res.status(500).json({ error: data.error.email[0] });
  // }

  // return res.status(201).json({ error: '' });
}
