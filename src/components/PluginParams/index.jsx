import React, { Fragment } from 'react';
import styles from './index.module.css';

/**
 * @typedef {object} PluginParamsProps
 * @property {Record<string, import('../../docs').SvgoFrontMatterParameter>} parameters
 * @param {PluginParamsProps} props
 * @returns {React.JSX.Element}
 */
export default function PluginParams({ parameters }) {
  const paramDefinitions = Object.keys(parameters)
    .filter((key) => parameters[key]?.description)
    .map((key) => ({
      name: key,
      ...parameters[key]
    }));

  return (
    <dl>
      {paramDefinitions.map(param => (
        <Fragment key={param.name}>
          <dt>
            <code>{param.name}</code>
          </dt>
          <dd
            className={styles.leftMargin}
            dangerouslySetInnerHTML={{ __html: /** @type {string} */ (param.description) }}>
          </dd>
        </Fragment>
      ))}
    </dl>
  );
}
