// Dependencies

/**
 * Page Class
 */
export class Page {
  /**
   *
   */
  constructor(options = {}) {
    // Set the options
    this._options = options;
  }

  /**
   * Basic controller for the page
   */
  controller() {
    // Default return
    return {};
  }

  /**
   * The view of the page ;D
   * @param {Any} ctrl The controller results
   */
  view(ctrl) {
    throw 'Render method should be implemented by the view';
  }
}
