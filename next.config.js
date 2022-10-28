/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		domains: ['cdn2.thedogapi.com'],
	},
};

module.exports = nextConfig;
