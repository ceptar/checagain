const sanityClient = require('@sanity/client')
const client = sanityClient({
  dataset: 'discobabes',
  projectId: 'm5wobbf1',
  token: 'sktWw8G9iPkIfIhLGEQ9kMo7zRwfUnvSyb5SSGZWfTmuSeMTAfioLvlmHusKHtDxTG2f5OirvZcz80qZwzigH4dQWdRoWOEUGHWjWvxAR0uDUHjEFPO0MbCl9G3StpzlFrxRMtuZn2M8LWW3y1gZmTADaKaWYxAGJHRdFNnSrfZjI2T2Tj2j',
  useCdn: false,
  apiVersion: '2021-03-25',
})

// see breakdown of code bloat
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

// get redirects from Sanity for Vercel
async function fetchSanityRedirects() {
  const data = await client.fetch(
    `*[_type == "redirect"]{ from, to, isPermanent }`
  )

  const redirects = data.map((redirect) => {
    return {
      source: `/${redirect.from}`,
      destination: `/${redirect.to}`,
      permanent: redirect.isPermanent,
    }
  })

  return redirects
}

module.exports = withBundleAnalyzer({
  env: {
    // Needed for Sanity powered data
    SANITY_PROJECT_DATASET: process.env.SANITY_PROJECT_DATASET,
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
    SANITY_API_TOKEN: process.env.SANITY_API_TOKEN,

    // Needed for Klaviyo forms
    KLAVIYO_API_KEY: process.env.KLAVIYO_API_KEY,

    // Needed for Mailchimp forms
    MAILCHIMP_API_KEY: process.env.MAILCHIMP_API_KEY,
    MAILCHIMP_SERVER: process.env.MAILCHIMP_SERVER,

    // Needed for SendGrid forms
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  },
  async redirects() {
    const sanityRedirects = await fetchSanityRedirects()
    return sanityRedirects
  },
})
