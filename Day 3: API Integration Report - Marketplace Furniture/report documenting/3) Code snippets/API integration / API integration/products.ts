import { NextApiRequest, NextApiResponse } from 'next';
import sanityClient from '@sanity/client';

// Set up the Sanity client
const client = sanityClient({
  projectId: 'yourProjectId',
  dataset: 'yourDataset',
  useCdn: true,
  apiVersion: '2023-01-01',
});

const fetchProducts = async () => {
  const query = '*[_type == "product"]';
  return await client.fetch(query);
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const products = await fetchProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
}
