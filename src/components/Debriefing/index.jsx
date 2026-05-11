import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './index.module.css';

/**
 * @typedef {object} Props
 * @property {string} variant
 * @property {(temp: boolean, answer: import('../CookieConsentWrapper').DebriefingAnswer) => void} onAnswer
 * @property {() => void} onDone
 */

const FORM_URL = 'https://survey.vukory.art';

/**
 * @param {Props} props
 */
export default function Debriefing({ variant, onAnswer, onDone }) {
  const [closing, setClosing] = useState(false);
  const formUrl = `${FORM_URL}/?utm_content=${variant}`;

  /** Opens form in a new tab. */
  function onYes() {
    window.open(formUrl, '_blank', 'noopener');
    setClosing(true);
    onAnswer(false, 'yes');
  }

  /** Closes modal and saves to local storage to not show this again. */
  function onNo() {
    setClosing(true);
    onAnswer(false, 'no');
  }

  /**
   * Copies form URL to clipboard, and saves to session storage to not show this
   * again. Conveys to the user that the link is in their clipboard.
   */
  function onLater() {
    // Optional chain as `clipboard#writeText` isn't available in insecure
    // contexts, i.e. HTTP development environments.
    navigator.clipboard?.writeText(formUrl);
    setClosing(true);
    onAnswer(true, 'later');
  }

  return (
    <div className={clsx(styles.bannerContainer, closing && styles.close)} onAnimationEnd={closing ? onDone : undefined}>
      <div className={styles.copy}>
        <p>
          Hi! I&apos;m the designer for SVGO.dev. That cookie banner is a part
          of my master&apos;s research.
        </p>
        <p>
          Want to help me out by taking a short survey about your experience?
        </p>
        <p className={styles.reward}>
          Psst… I&apos;ll send you a free sticker pack as a thanks if you&apos;d
          like 🎁
        </p>
      </div>
      <div className={styles.buttonContainer}>
        <button className="button" onClick={onYes}>
          Sure
        </button>
        <button className="button" onClick={onLater}>
          Maybe later
        </button>
        <button className="button" onClick={onNo}>
          No thanks
        </button>
      </div>
    </div>
  );
}
