import React from 'react';
import LinkItem from '@theme/Footer/LinkItem';
import clsx from 'clsx';
import styles from './index.module.css';

function ColumnLinkItem({item}) {
  return item.html ? (
    <li
      className="footer__item"
      dangerouslySetInnerHTML={{__html: item.html}}
    />
  ) : (
    <li key={item.href ?? item.to} className="footer__item">
      <LinkItem item={item} />
    </li>
  );
}

function Column({column}) {
  return (
    <div className={clsx('col footer__col', styles.footerList)}>
      <div className="footer__title">{column.title}</div>
      <ul className="footer__items clean-list">
        {column.items.map((item, i) => (
          <ColumnLinkItem key={i} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default function FooterLinksMultiColumn({columns}) {
  return (
    <div className="row footer__links">
      {columns.map((column, i) => (
        <Column key={i} column={column} />
      ))}
    </div>
  );
}
