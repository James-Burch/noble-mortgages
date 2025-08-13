const fs = require("fs");
const path = require("path");

const baseUrl = "https://noblemortgages.co.uk";

const routes = [
  // Main pages
  { url: "/", priority: "1.0", changefreq: "weekly" },
  { url: "/about", priority: "0.8", changefreq: "monthly" },
  { url: "/contact", priority: "0.9", changefreq: "monthly" },
  { url: "/mortgage-calculator", priority: "0.9", changefreq: "weekly" },

  // Mortgage pages
  { url: "/mortgages", priority: "0.9", changefreq: "weekly" },
  {
    url: "/mortgages/first-time-buyers",
    priority: "0.8",
    changefreq: "weekly",
  },
  { url: "/mortgages/remortgage", priority: "0.8", changefreq: "weekly" },
  { url: "/mortgages/home-mover", priority: "0.8", changefreq: "weekly" },
  { url: "/mortgages/buy-to-let", priority: "0.8", changefreq: "weekly" },
  { url: "/mortgages/new-build", priority: "0.7", changefreq: "monthly" },
  { url: "/mortgages/help-to-buy", priority: "0.7", changefreq: "monthly" },
  {
    url: "/mortgages/limited-companies",
    priority: "0.7",
    changefreq: "monthly",
  },
  { url: "/mortgages/bridging-loans", priority: "0.7", changefreq: "monthly" },

  // Insurance pages
  { url: "/insurance", priority: "0.8", changefreq: "weekly" },
  { url: "/insurance/life-insurance", priority: "0.7", changefreq: "monthly" },
  {
    url: "/insurance/income-protection",
    priority: "0.7",
    changefreq: "monthly",
  },
  {
    url: "/insurance/critical-illness",
    priority: "0.7",
    changefreq: "monthly",
  },
  {
    url: "/insurance/accident-sickness-unemployment",
    priority: "0.6",
    changefreq: "monthly",
  },
  {
    url: "/insurance/home-buildings-contents",
    priority: "0.6",
    changefreq: "monthly",
  },
];

const generateSitemap = () => {
  const currentDate = new Date().toISOString().split("T")[0];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  // Write to public directory
  const publicDir = path.join(__dirname, "..", "public");
  fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemap);
  console.log("Sitemap generated successfully!");
};

generateSitemap();
