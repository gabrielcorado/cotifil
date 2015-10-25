// Dependencies


/**
 * Middleware Class
 */
export class Middleware {
  /**
   * Constructor
   */
  constructor() {

  }

  /**
   * Call method
   * @param {Function} next Middleware callback. It will recive as unique argument an error, if this argument is undefined this means that there is no error.
   */
  call(options, next) {
    // Error!!!
    throw 'The call method should be implemented by the middleware class.';
  }
}
