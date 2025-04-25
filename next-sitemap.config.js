/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://parklandguitarlessons.com", // Replace with your real domain
  generateRobotsTxt: true, // Automatically generates robots.txt
  sitemapSize: 5000,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/private-page"],
};
