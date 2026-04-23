import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './index.module.css';

/**
 * @typedef {object} Props
 * @property {(answer: import('../CookieConsentWrapper').CookieConsentAnswer) => void} onAnswer
 * @property {() => void} onDone
 */

/**
 * Themed cookie consent banner! More meaningful wording and design ties in with
 * the website.
 *
 * @param {Props} props
 */
export default function CookieConsentA({ onAnswer, onDone }) {
  const [closing, setClosing] = useState(false);

  /**
   * @param {import('../CookieConsentWrapper').CookieConsentAnswer} answer
   */
  function onAnswerWrapper(answer) {
    onAnswer(answer);
    setClosing(true);
  }

  return (
    <div className={clsx(styles.bannerContainer, closing && styles.close)} onAnimationEnd={closing ? onDone : undefined}>
      <h2>Cookie Preferences</h2>
      <p>
        We use an optional first&#8209;party cookie to collect anonymous usage
        and performance metrics. Plausible Analytics remains enabled for
        cookie&#8209;free analytics. You can read more about it in our <Link href="/privacy/">Privacy&nbsp;Policy</Link>.
      </p>
      <div className={styles.buttonContainer}>
        <button className="button" type="button" onClick={() => onAnswerWrapper('accepted')}>
          Accept
        </button>
        <button className="button" type="button" onClick={() => onAnswerWrapper('rejected')}>
          Reject
        </button>
      </div>
    </div>
  );
}
