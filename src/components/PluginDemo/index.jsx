import React from 'react';
import { useDoc } from '@docusaurus/theme-common/internal';
import CodeBlock from '@theme/CodeBlock';

export default function PluginDemo() {
  const { frontMatter } = useDoc();
  const { pluginId } = frontMatter.svgo;

  const code = `const svg = \`
<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox=" 0 0  150 100 " width="150">
  <!-- Created with love! -->
  <defs>
    <ellipse cx="50" cy="50.0" rx="50.00" ry="auto" fill="black" id="circle"/>
  </defs>
  <g>
    <use href="#circle" transform="skewX(16)"/>
    <rect id="useless" width="0" height="0" fill="#ff0000"/>
  </g>
</svg>
\`;

const svgoConfig = {
  js2svg: { indent: 2, pretty: true },
  plugins: [
    "${pluginId}"
  ]
}

render(<SvgoPreview svg={svg} svgoConfig={svgoConfig}/>);
`;

  return (
    <CodeBlock language="js" live noInline>
      {code}
    </CodeBlock>
  );
}
