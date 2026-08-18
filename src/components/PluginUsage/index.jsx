import React from 'react';
import { translate } from '@docusaurus/Translate';
import CodeBlock from '@theme/CodeBlock';
import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';

/**
 * @typedef {object} BasicPluginUsageProps
 * @property {string} pluginId
 *
 * @param {BasicPluginUsageProps} props
 * @returns {React.JSX.Element}
 */
function BasicPluginUsage(props) {
  return (
    <CodeBlock
      language="js"
      title="svgo.config.js">
      {`module.exports = {\n  plugins: [\n    "${props.pluginId}"\n  ]\n}`}
    </CodeBlock>
  );
};

/**
 * @typedef {object} PluginUsageProps
 * @property {string} pluginId
 * @property {Record<string, import('../../docs').SvgoFrontMatterParameter>} [parameters]
 * @param {PluginUsageProps} props
 * @returns {React.JSX.Element}
 */
export default function PluginUsage({ pluginId, parameters }) {
  if (!parameters) {
    return <BasicPluginUsage pluginId={pluginId}/>;
  }

  let paramsTemplate = Object.keys(parameters)
    .filter((key) => parameters[key] && parameters[key].default !== undefined)
    .map((param) => `        ${param}: ${JSON.stringify(parameters[param].default)}`)
    .join(',\n');

  return (
    <Tabs>
      <TabItem
        value="basic"
        label={
          translate({
            id: 'svgo.components.PluginUsage.basic',
            message: 'Basic'
          })
        }
        default
      >
        <BasicPluginUsage pluginId={pluginId}/>
      </TabItem>
      {parameters && (
        <TabItem
          value="params"
          label={
            translate({
              id: 'svgo.components.PluginUsage.parameters',
              message: 'Parameters'
            })
          }
        >
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
