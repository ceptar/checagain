import sanityClient from '@sanity/client';
import sanityImage from '@sanity/image-url';

const clientOptions = {
    dataset: process.env.SANITY_PROJECT_DATASET,
    projectId: process.env.SANITY_PROJECT_ID,
    token: process.env.SANITY_API_TOKEN,
    apiVersion: '2021-11-08', // Adjust as necessary
    useCdn: false, // Use CDN in production
};

// Create a single instance of the Sanity client
const client = sanityClient(clientOptions);

// Create an image builder using the client
const imageBuilder = sanityImage(client);

// Function to create a preview client
function createPreviewClient(token) {
    return sanityClient({
        ...clientOptions,
        token,
        useCdn: false,
    });
}

export { client as sanityClient, imageBuilder, createPreviewClient };