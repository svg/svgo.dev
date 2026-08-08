import fs from 'node:fs/promises';
import path from 'node:path';

/**
 * If using a custom domain, write a CNAME file for GitHub Pages deployment.
 *
 * @see https://docusaurus.io/docs/deployment#github-pages-overview
 * @returns {import('@docusaurus/types').Plugin}
 */
export default function prepareGitHubPagesDeployment() {
  return {
    name: 'prepare-github-pages-deployment',
    async postBuild({ siteConfig, outDir }) {
      const hostname = new URL(siteConfig.url).hostname;

      if (hostname.endsWith('.github.io')) {
        return;
      }

      await fs.writeFile(path.join(outDir, 'CNAME'), `${hostname}\n`);
    },
  };
}
