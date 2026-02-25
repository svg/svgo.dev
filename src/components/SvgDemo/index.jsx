import React, { useState } from 'preact/compat';
import CodeBlock from '@theme/CodeBlock';
import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';
import styles from './index.module.css';

export default function SvgPreview(props) {
  const [ error, setError ] = useState(false);
  const { svg } = props;

  const onError = () => {
    setError(true);
  };

  return (
    <Tabs groupId="preview-mode">
      <TabItem value="svg" label="Markup">
        <div className={styles.fixedHeight}>
          <CodeBlock language="svg">
            {svg}
          </CodeBlock>
        </div>
      </TabItem>
      <TabItem value="preview" label="Render">
        <div className={styles.renderPreview}>
          {!error ? (
            <img
              src={`data:image/svg+xml;utf8,${encodeURIComponent(svg)}`}
              alt="Render of the optimized SVG."
              onError={onError}
            />
          ) : (
            <span className={styles.malformedWarning}>
              SVG can only be rendered inline, not standalone or in an <code>&lt;img&gt;</code> element.
            </span>
          )}
        </div>
      </TabItem>
    </Tabs>
  );
}
