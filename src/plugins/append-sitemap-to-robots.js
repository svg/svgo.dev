import fs from 'node:fs/promises';
import path from 'node:path';

/**
 * Appends URL to sitemap.xml to robots.txt since Google recommends this.
 *
 * @see https://www.sitemaps.org/protocol.html#informing
 * @see https://developers.google.com/crawling/docs/robots-txt/create-robots-txt
 * @see https://developers.cloudflare.com/browser-run/reference/robots-txt/
 * @returns {any}
 */
export default function appendSitemapToRobots() {
  return {
    name: 'append-sitemap-to-robots',
    async postBuild({ siteConfig, outDir }) {
      const { url, baseUrl } = siteConfig;
      const sitemapUrl = new URL('sitemap.xml', `${url}${baseUrl}`).href;
      await fs.appendFile(path.join(outDir, 'robots.txt'), `\nSitemap: ${sitemapUrl}\n`)
    },
  };
}
