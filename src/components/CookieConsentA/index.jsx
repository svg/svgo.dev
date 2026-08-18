import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
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
      <h2>
        <Translate id="svgo.components.CookieConsentA.title">
          Cookie Preferences
        </Translate>
      </h2>
      <p>
        <Translate
          id="svgo.components.CookieConsentA.message"
          values={{
            privacyPolicy: (
              <Link href="/privacy/">
                <Translate id="svgo.components.CookieConsentA.privacyPolicy">
                  Privacy&nbsp;Policy
                </Translate>
              </Link>
            )}
          }
        >
          {'We use an optional first‑party cookie to collect anonymous usage and performance metrics. Plausible Analytics remains enabled for cookie‑free analytics. You can read more about it in our {privacyPolicy}.'}
        </Translate>
      </p>
      <div className={styles.buttonContainer}>
        <button className="button" type="button" onClick={() => onAnswerWrapper('accepted')}>
          <Translate id="svgo.components.CookieConsentA.accept">
            Accept
          </Translate>
        </button>
        <button className="button" type="button" onClick={() => onAnswerWrapper('rejected')}>
          <Translate id="svgo.components.CookieConsentA.reject">
            Reject
          </Translate>
        </button>
      </div>
    </div>
  );
}
