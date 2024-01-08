import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { useDoc } from '@docusaurus/theme-common/internal';

function BasicPluginUsage(props) {
  return (
    <CodeBlock
      language="js"
      title="svgo.config.js">
      {`module.exports = {\n  plugins: [\n    "${props.pluginId}"\n  ]\n}`}
    </CodeBlock>
  );
};

export default function PluginUsage() {
  const { frontMatter } = useDoc();
  const { pluginId, parameters } = frontMatter.svgo;

  if (!parameters) {
    return <BasicPluginUsage pluginId={pluginId}/>;
  }

  let paramsTemplate = Object.keys(parameters)
    .filter((key) => parameters[key] && parameters[key].default !== undefined)
    .map((param) => `        ${param}: ${JSON.stringify(parameters[param].default)}`)
    .join(",\n");

  return (
    <Tabs>
      <TabItem value="basic" label="Basic" default>
        <BasicPluginUsage pluginId={pluginId}/>
      </TabItem>
      {parameters && (
        <TabItem value="params" label="Parameters">
          <CodeBlock
            language="js"
            title="svgo.config.js">
            {`module.exports = {\n  plugins: [\n    {\n      name: "${pluginId}",\n      params: {\n${paramsTemplate}\n      }\n    }\n  ]\n}`}
          </CodeBlock>
        </TabItem>
      )}
    </Tabs>
  );
}
