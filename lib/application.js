// Dependencies
import m from 'mithril';

/**
 *
 */
export class Application {
  /**
   * Mithril 'environment'
   * @param {String} basePath The path used by all the app routes
   * @param {DOMElement} root The app root element
   */
  constructor(basePath = '/', root = document.body) {
    // Set the app root element
    this._root = root;

    // Set the app basePath
    this._basePath = basePath;

    // App routes
    this._routes = {};

    // The app middlewares
    this._middlewares = [];

    // Get the parent middlewares
    let middlewares = this.constructor._middlewares;

    // Each the middlewares and initialize it
    for( var name in middlewares ) {
      // Current middleware
      let { klass, opts } = middlewares[name];

      // Add it to the app instance
      this._middlewares.push(new klass(opts));
    }
  }

  /**
   * Add a route to the app
   * @param {Page} routes Same routes as mithril
   * @return {Boolean} true - Everything ok
   *                   false - Ooops
   */
  routes(routes) {
    // Add the route to the mithril
    m.route(this._root, this._basePath, routes);
  }

  /**
   * Class middlewares
   */
  static get _middlewares() {
    // Check if its empty
    if( this.__middlewares === undefined )
      this.__middlewares = {};

    // Return the value
    return this.__middlewares;
  }

  /**
   * Add a middleware
   * @param {Middleware} klass The middleware class
   * @param {Object} options The middleware options
   */
  static addMiddleware(klass, options = {}) {
    // Set it
    this._middlewares[klass.name] = { klass: klass, opts: options };
  }

  /**
   * All the requests came to here
   */
  _handler() {

  }
}
