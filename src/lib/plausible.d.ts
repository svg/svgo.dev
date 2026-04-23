type PlausibleOptions = {
  /**
   * Function that is called for every event after it's logged, ignored or
   * errored.
   */
  callback?: (...unknown) => unknown,
  /**
   * Custom properties.
   *
   * @see https://plausible.io/docs/custom-props/for-custom-events
   */
  props?: Record<string, string>,
  /**
   * Revenue tracking fields.
   *
   * @see https://plausible.io/docs/ecommerce-revenue-tracking
   */
  revenue?: {
    currency?: string,
    amount?: number,
  },
  /**
   * If to include the event in bounce rate calculations.
   * 
   * @see https://plausible.io/docs/metrics-definitions#bounce-rate
   */
  interactive?: boolean,
};

interface Window {
  /**
   * @param name Name of the custom event (i.e. the name of the goal).
   * @param options
   * @see https://plausible.io/docs/custom-event-goals#trigger-custom-events-manually-with-a-javascript-function
   */
  plausible(name: string, options?: PlausibleOptions);
}
