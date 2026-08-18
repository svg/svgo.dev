import React, { useState } from 'react';
import Translate, { translate } from '@docusaurus/Translate';
import CodeBlock from '@theme/CodeBlock';
import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';
import styles from './index.module.css';

/**
 * @typedef {object} SvgPreviewProps
 * @property {string} svg
 *
 * @param {SvgPreviewProps} props
 * @returns {React.JSX.Element}
 */
export default function SvgPreview(props) {
  const [ error, setError ] = useState(false);
  const { svg } = props;

  const onError = () => {
    setError(true);
  };

  return (
    <Tabs groupId="preview-mode">
      <TabItem
        value="svg"
        label={
          translate({
            id: 'svgo.components.SvgDemo.markup',
            message: 'Markup'
          })
        }
      >
        <div className={styles.fixedHeight}>
          <CodeBlock language="svg">
            {svg}
          </CodeBlock>
        </div>
      </TabItem>
      <TabItem
        value="preview"
        label={
          translate({
            id: 'svgo.components.SvgDemo.render',
            message: 'Render'
          })
        }
      >
        <div className={styles.renderPreview}>
          {!error ? (
            <img
              src={`data:image/svg+xml;utf8,${encodeURIComponent(svg)}`}
              alt={
                translate({
                  id: 'svgo.components.SvgDemo.renderAlt',
                  message: 'Render of the optimized SVG.'
                })
              }
              onError={onError}
            />
          ) : (
            <span className={styles.malformedWarning}>
              <Translate
                id="svgo.components.SvgDemo.malformedWarning"
                values={{
                  img: <code>&lt;img&gt;</code>
                }}
              >
                {'SVG can only be rendered inline, not standalone or in an {img} element.'}
              </Translate>
            </span>
          )}
        </div>
      </TabItem>
    </Tabs>
  );
}
