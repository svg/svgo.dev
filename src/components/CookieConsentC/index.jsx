import React from 'react';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

/**
 * @typedef {object} Props
 * @property {(answer: import('../CookieConsentWrapper').CookieConsentAnswer) => void} onAnswer
 * @property {() => void} onDone
 */

/**
 * Basically the most lame ass corporate cookie consent banner in existence.
 *
 * @param {Props} props
 */
export default function CookieConsentC({ onAnswer, onDone }) {
  /**
   * @param {import('../CookieConsentWrapper').CookieConsentAnswer} answer
   */
  function onAnswerWrapper(answer) {
    onAnswer(answer);
    onDone();
  }

  return (
    <div className={styles.bannerContainer}>
      <h2>Cookie Preferences</h2>
      <p>
        We use Plausible Analytics to analyze site traffic. If you agree,
        cookies are also used to deliver and enhance the quality of our content.
        You can read more about it on our <Link href="/privacy/">Privacy&nbsp;Policy</Link>.
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
