const isProd = process.env.NEXT_PUBLIC_ENV === 'production';
const repoName = process.env.NEXT_PUBLIC_REPO_NAME || '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? `/${repoName}/` : '',
  basePath: isProd ? `/${repoName}` : '',
};

module.exports = nextConfig;
