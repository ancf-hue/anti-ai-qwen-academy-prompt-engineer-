// scripts/update-sitemap.js
const fs = require('fs');
const path = require('path');

const sitemapPath = path.join(__dirname, '..', 'sitemap.xml');
let content = fs.readFileSync(sitemapPath, 'utf8');

// Заменяем дату на сегодняшнюю (формат ГГГГ-ММ-ДД)
const today = new Date().toISOString().slice(0, 10);
content = content.replace(/<lastmod>[\d-]+<\/lastmod>/g, `<lastmod>${today}</lastmod>`);

fs.writeFileSync(sitemapPath, content, 'utf8');
console.log(`✅ sitemap.xml updated: lastmod=${today}`);