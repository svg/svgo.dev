import React from 'react';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
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
      <h2>
        <Translate id="svgo.components.CookieConsentC.title">
          Cookie Preferences
        </Translate>
      </h2>
      <p>
        <Translate
          id="svgo.components.CookieConsentC.message"
          values={{
            privacyPolicy: (
              <Link href="/privacy/">
                <Translate id="svgo.components.CookieConsentC.privacyPolicy">
                  Privacy&nbsp;Policy
                </Translate>
              </Link>
            )}
          }
        >
          {'We use Plausible Analytics to analyze site traffic. If you agree, cookies are also used to deliver and enhance the quality of our content. You can read more about it on our {privacyPolicy}.'}
        </Translate>
      </p>
      <div className={styles.buttonContainer}>
        <button className="button" type="button" onClick={() => onAnswerWrapper('accepted')}>
          <Translate id="svgo.components.CookieConsentC.accept">
            Accept
          </Translate>
        </button>
        <button className="button" type="button" onClick={() => onAnswerWrapper('rejected')}>
          <Translate id="svgo.components.CookieConsentC.reject">
            Reject
          </Translate>
        </button>
      </div>
    </div>
  );
}
