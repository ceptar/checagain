import createSanityClient from '@sanity/client'
import sanityImage from '@sanity/image-url'

const options = {
  dataset: process.env.SANITY_PROJECT_DATASET,
  projectId: process.env.SANITY_PROJECT_ID,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2021-11-08',
  useCdn: false,
}

export const sanityClient = createSanityClient(options)
export const imageBuilder = sanityImage(sanityClient)

export function createPreviewClient(token) {
  return createSanityClient({
    ...options,
    useCdn: false,
    token,
  })
}

export function getSanityClient(preview) {
  if (preview?.active) {
    return createPreviewClient(preview.token)
  } else {
    return sanityClient
  }
}
