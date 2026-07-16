import fs from 'node:fs/promises';
import path from 'node:path';

/**
 * Appends URL to sitemap.xml to robots.txt since Google recommends this.
 *
 * See:
 * - https://www.sitemaps.org/protocol.html#informing
 * - https://developers.google.com/crawling/docs/robots-txt/create-robots-txt
 * - https://developers.cloudflare.com/browser-run/reference/robots-txt/
 *
 * @returns {any}
 */
export default function appendSitemapToRobots() {
  return {
    name: 'append-sitemap-to-robots',
    async postBuild({ siteConfig, outDir }) {
      const sitemapUrl = new URL('sitemap.xml', siteConfig.url).href;
      await fs.appendFile(path.join(outDir, 'robots.txt'), `\nSitemap: ${sitemapUrl}\n`)
    },
  };
}
