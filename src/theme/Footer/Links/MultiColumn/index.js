import React from 'react';
import LinkItem from '@theme/Footer/LinkItem';
import clsx from 'clsx';
import styles from './index.module.css';

/**
 * @typedef {object} ColumnLinkItemProps
 * @property {import('@docusaurus/theme-common').FooterLinkItem} item
 * @param {ColumnLinkItemProps} props
 * @returns {React.JSX.Element}
 */
function ColumnLinkItem({ item }) {
  return item.html ? (
    <li
      className="footer__item"
      dangerouslySetInnerHTML={{ __html: item.html }}
    />
  ) : (
    <li key={item.href ?? item.to} className="footer__item">
      <LinkItem item={item} />
    </li>
  );
}

/**
 * @typedef {object} ColumnProps
 * @property {import('@docusaurus/theme-common').FooterColumnItem} column
 * @param {ColumnProps} props
 * @returns {React.JSX.Element}
 */
function Column({ column }) {
  return (
    <div className={clsx(styles.footerList, 'col footer__col')}>
      <div className="footer__title">{column.title}</div>
      <ul className="footer__items clean-list">
        {column.items.map((item, i) => (
          <ColumnLinkItem key={i} item={item} />
        ))}
      </ul>
    </div>
  );
}

/**
 * @param {import('@theme/Footer/Links/MultiColumn').Props} props
 * @returns {React.JSX.Element}
 */
export default function FooterLinksMultiColumn({ columns }) {
  return (
    <div className="row footer__links">
      {columns.map((column, i) => (
        <Column key={i} column={column} />
      ))}
    </div>
  );
}
