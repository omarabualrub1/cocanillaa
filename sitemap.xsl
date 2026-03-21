<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
<xsl:template match="/">
<html>
<head>
<title>Cocanilla Sitemap</title>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<style>
body {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  margin: 20px;
}
.container {
  max-width: 900px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  padding: 30px;
}
h1 {
  color: #333;
  border-bottom: 3px solid #8B6F47;
  padding-bottom: 10px;
}
.sitemap-info {
  background-color: #f9f9f9;
  border-left: 4px solid #8B6F47;
  padding: 15px;
  margin: 20px 0;
  border-radius: 4px;
  font-size: 14px;
  color: #666;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}
th {
  background-color: #8B6F47;
  color: white;
  padding: 12px;
  text-align: left;
  font-weight: bold;
}
td {
  padding: 12px;
  border-bottom: 1px solid #ddd;
}
tr:hover {
  background-color: #f5f5f5;
}
a {
  color: #8B6F47;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
.url {
  color: #0066cc;
  word-break: break-all;
}
.lastmod {
  color: #666;
  font-size: 14px;
}
.freq {
  background-color: #E8C4D0;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  display: inline-block;
}
.priority {
  background-color: #D4E8DC;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  display: inline-block;
}
.footer {
  margin-top: 30px;
  border-top: 1px solid #ddd;
  padding-top: 20px;
  color: #666;
  font-size: 12px;
  text-align: center;
}
</style>
</head>
<body>
<div class="container">
<h1>🍰 Cocanilla Sitemap</h1>
<div class="sitemap-info">
  <strong>Sitemap for:</strong> https://omarabualrub1.github.io/cocanillaa/<br/>
  <strong>Total URLs:</strong> <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/><br/>
  <strong>Last Generated:</strong> <xsl:value-of select="sitemap:urlset/sitemap:url[1]/sitemap:lastmod"/>
</div>

<table>
<thead>
<tr>
<th>URL</th>
<th>Last Modified</th>
<th>Change Frequency</th>
<th>Priority</th>
</tr>
</thead>
<tbody>
<xsl:for-each select="sitemap:urlset/sitemap:url">
<tr>
<td>
<a href="{sitemap:loc}" class="url"><xsl:value-of select="sitemap:loc"/></a>
</td>
<td class="lastmod"><xsl:value-of select="sitemap:lastmod"/></td>
<td>
<span class="freq"><xsl:value-of select="sitemap:changefreq"/></span>
</td>
<td>
<span class="priority"><xsl:value-of select="sitemap:priority"/></span>
</td>
</tr>
</xsl:for-each>
</tbody>
</table>

<div class="footer">
<p>This sitemap helps search engines discover and crawl all pages on your website.</p>
<p>For more information about sitemaps, visit: <a href="https://www.sitemaps.org/" target="_blank">sitemaps.org</a></p>
<p>© 2026 Cocanilla - Premium Handcrafted Desserts</p>
</div>
</div>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
