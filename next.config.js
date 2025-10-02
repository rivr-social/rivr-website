/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export a fully static site (no SSR/ISR)
  output: 'export',
  images: {
    // For static export, disable the Image Optimization API
    unoptimized: true,
    domains: [
      'i.imgur.com',
      'via.placeholder.com',
      'scontent-den2-1.xx.fbcdn.net',
      'private-user-images.githubusercontent.com',
      'publish-01.obsidian.md',
      'cohereboulder.org',
      'boulderriverside.com',
      'i.pravatar.cc'
    ],
  },
}

module.exports = nextConfig