import React, { Suspense, useEffect, useState } from 'react';
import Debriefing from '../Debriefing';

/**
 * @typedef {'accepted'|'rejected'} CookieConsentAnswer
 * @typedef {'yes'|'no'|'later'} DebriefingAnswer
 */

const COOKIE_CONSENT_MAP = new Map([
  ['a', React.lazy(() => import('../../components/CookieConsentA'))],
  ['b', React.lazy(() => import('../../components/CookieConsentB'))],
  ['c', React.lazy(() => import('../../components/CookieConsentC'))],
]);

export default function CookieConsentWrapper() {
  const [variant, setVariant] = useState(/** @type {string?} */ (null));
  const [answeredCookieConsent, setAnsweredCookieConsent] = useState(
    /** @type {boolean?} */ (null)
  );
  const [answeredDebriefing, setAnsweredDebriefing] = useState(
    /** @type {boolean?} */ (null)
  );

  useEffect(() => {
    const answeredValue = window.localStorage.getItem('answeredCookieConsent');

    if (answeredValue) {
      setAnsweredCookieConsent(true);
    }

    const variantValue = window.localStorage.getItem('variant');
    let variant;

    if (variantValue) {
      variant = variantValue;
    } else {
      variant = String.fromCharCode(
        Math.floor(Math.random() * COOKIE_CONSENT_MAP.size) + 97
      );
      window.localStorage.setItem('variant', variant);
    }

    setVariant(variant);

    if (!answeredValue && COOKIE_CONSENT_MAP.has(variant)) {
      window.plausible?.('cookie-consent-viewed', {
        props: { variant },
        // Must be set to false, otherwise viewing the cookie consent banner
        // would count as an interaction, and skew the bounce rates toward 0%.
        interactive: false,
      });
    }

    if (
      window.localStorage.getItem('answeredDebriefing') ||
      window.sessionStorage.getItem('answeredDebriefing')
    ) {
      setAnsweredDebriefing(true);
    } else {
      setAnsweredDebriefing(false);
    }
  }, []);

  if (variant === null || answeredDebriefing === true) {
    return;
  }

  if (answeredCookieConsent === true) {
    /**
     * @param {boolean} isTemp
     * @param {DebriefingAnswer} answer
     */
    function onDebriefingAnswered(isTemp, answer) {
      window.plausible?.('debriefing-answered', {
        props: {
          variant: /** @type {string} */ (variant),
          'debriefing-answer': answer,
        },
      });

      const storage = isTemp ? window.sessionStorage : window.localStorage;
      storage.setItem('answeredDebriefing', 'true');
    }

    function onDebriefingDone() {
      setAnsweredDebriefing(true);
    }

    return <Debriefing variant={variant} onAnswer={onDebriefingAnswered} onDone={onDebriefingDone} />;
  }

  const CookieConsent = COOKIE_CONSENT_MAP.get(variant);

  if (!CookieConsent) {
    // Occurs if a user messes with localstorage manually.
    return;
  }

  /**
   * @param {CookieConsentAnswer} answer
   */
  function onCookieConsentAnswered(answer) {
    window.plausible?.('cookie-consent-answered', {
      props: {
        variant: /** @type {string} */ (variant),
        'cookie-consent-answer': answer,
      },
    });
    window.localStorage.setItem('answeredCookieConsent', 'true');
  }

  function onCookieConsentDone() {
    setAnsweredCookieConsent(true);
  }

  return (
    <Suspense>
      <CookieConsent onAnswer={onCookieConsentAnswered} onDone={onCookieConsentDone} />
    </Suspense>
  );
}
