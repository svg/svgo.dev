import React, { useState } from 'react';
import Translate from '@docusaurus/Translate';
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

  /** Closes modal and saves to session storage to show it again later. */
  function onLater() {
    setClosing(true);
    onAnswer(true, 'later');
  }

  return (
    <div className={clsx(styles.bannerContainer, closing && styles.close)} onAnimationEnd={closing ? onDone : undefined}>
      <div className={styles.copy}>
        <p>
          <Translate id="svgo.components.Debriefing.intro">
            Hi! I&apos;m the designer for SVGO.dev. That cookie banner is a part
            of my master&apos;s research.
          </Translate>
        </p>
        <p>
          <Translate id="svgo.components.Debriefing.callToAction">
            Want to help me out by taking a short survey about your experience?
          </Translate>
        </p>
      </div>
      <div className={styles.buttonContainer}>
        <button className="button" type="button" onClick={onYes}>
          <Translate id="svgo.components.Debriefing.sure">
            Sure
          </Translate>
        </button>
        <button className="button" type="button" onClick={onLater}>
          <Translate id="svgo.components.Debriefing.maybeLater">
            Maybe later
          </Translate>
        </button>
        <button className="button" type="button" onClick={onNo}>
          <Translate id="svgo.components.Debriefing.noThanks">
            No thanks
          </Translate>
        </button>
      </div>
    </div>
  );
}
