import { createClient } from '@sanity/client';
import axios from 'axios';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

// Load environment variables from .env.local
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

// Create Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2021-08-31',
});

async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`);
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const buffer = Buffer.from(response.data);
    const asset = await client.assets.upload('image', buffer, {
      filename: imageUrl.split('/').pop(),
    });
    console.log(`Image uploaded successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error('Failed to upload image:', imageUrl, error);
    return null;
  }
}

async function deleteExistingProducts() {
  try {
    console.log('Deleting existing products from Sanity...');
    const existingProducts = await client.fetch('*[_type == "product"]{_id}');
    for (const product of existingProducts) {
      await client.delete(product._id);
    }
    console.log('Existing products deleted successfully.');
  } catch (error) {
    console.error('Failed to delete existing products:', error);
  }
}

async function importData() {
  try {
    await deleteExistingProducts();

    console.log('Fetching products from API...');
    const response = await axios.get('https://677fe1b50476123f76a88eea.mockapi.io/FurnitureWebsite');
    const products = response.data.slice(0, 16); // Limiting to 16 products
    console.log(`Fetched ${products.length} products`);

    for (const product of products) {
      console.log(`Processing product: ${product.title}`);
      let imageRef = null;

      if (product.image) {
        imageRef = await uploadImageToSanity(product.image);
      }

      const sanityProduct = {
        _id: `product-${product.id}`, // Unique identifier to prevent duplicates
        _type: 'product',
        id :Number(product.id),
        title: product.title,
        price: product.price,
        image: imageRef
          ? {
              _type: 'image',
              asset: {
                _type: 'reference',
                _ref: imageRef,
              },
            }
          : undefined,
      };

      console.log('Uploading product to Sanity:', sanityProduct.title);
      const result = await client.createOrReplace(sanityProduct);
      console.log(`Product uploaded successfully: ${result._id}`);
    }
    console.log('Data import completed successfully!');
  } catch (error) {
    console.error('Error importing data:', error);
  }
}

importData();
