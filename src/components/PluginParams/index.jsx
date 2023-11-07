import React, { Fragment } from 'react';
import clsx from 'clsx';
import { useDoc } from '@docusaurus/theme-common/internal';
import styles from './index.module.css';

export default function PluginParams() {
  const { frontMatter } = useDoc();
  const { parameters } = frontMatter.svgo;

  const paramDefinitions = Object.keys(parameters)
    .filter((key) => parameters[key]?.description)
    .map((key) => ({
      name: key,
      ...parameters[key]
    }));

  return (
    <>
      <dl>
        {paramDefinitions.map(param => (
          <Fragment key={param.name}>
            <dt>
              <code>{param.name}</code>
            </dt>
            <dd className={clsx(styles.leftMargin)}>
              <p dangerouslySetInnerHTML={{__html: param.description}}></p>
            </dd>
          </Fragment>
        ))}
      </dl>
    </>
  );
}
