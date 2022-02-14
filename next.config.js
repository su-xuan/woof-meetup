/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'image.shutterstock.com',
      'www.tagesspiegel.de',
      'media.istockphoto.com',
      'www.businesslocationcenter.de'
    ]
  }
}

module.exports = nextConfig
