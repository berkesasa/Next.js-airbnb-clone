/** @type {import('next').NextConfig} */

require('dotenv').config()

const nextConfig = {
    images: {
        domains: ["upload.wikimedia.org", "https://a0.muscache.com", "links.papareact.com"]
    },
    env:{
        maplibre_key: process.env.MAPLIBRE_KEY
    }
}

module.exports = nextConfig
