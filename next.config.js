/* eslint-disable */

module.exports = {
  basePath: '/blog', // 子路径配置
  assetPrefix: '/blog/', // 静态资源路径
  reactStrictMode: true, // React 严格模式
  trailingSlash: true, // 确保生成的路径以斜杠结尾
  images: {
    unoptimized: true, // 确保 Next.js 不对图片做特殊优化，适配静态导出
  },
  webpack: (config) => {
    // 确保构建时不会出错
    config.resolve.fallback = { fs: false, path: false };
    return config;
  },
};