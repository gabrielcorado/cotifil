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
    // The mapped routes
    let mappedRoutes = {};

    // Store the app context
    let appContext = this;

    // Each the routes to change it handler
    for( let route in routes ) {
      // Create an route
      mappedRoutes[route] = {
        controller: () => this._handler.call(appContext, routes[route]),
        view: (ctrl) => this._viewHandler.call(appContext, ctrl)
      }
    }

    // Add the route to the mithril
    m.route(this._root, this._basePath, mappedRoutes);
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
   * All the requests come to here
   * @param {Page} page The route page
   */
  _handler(page) {
    // Render it?
    let render = true;

    // Each the middlewares
    for( let middleware in this._middlewares ) {
      // Get the current one
      let currentMiddleware = this._middlewares[middleware];

      // Call the middleware
      currentMiddleware.call(this, (error) => {
        // Check if there is an error
        if( error !== undefined )
          render = false;
      });

      // Break the middleware for because it already has an error
      if( !render )
        break;
    }

    // Return the controller result
    return {
      page: page,
      // If the page is to be rendered
      render: render,
      ctrlResult: page.controller()
    };
  }

  /**
   * All the view calls come to here
   * @param {Object} ctrl Controller results
   */
  _viewHandler(ctrl) {
    // Get the controller results
    let { page, render, ctrlResult } = ctrl;

    // Should it be rendered?
    if( !render )
      return;

    // Every thing ok, page can render it
    return page.view(ctrlResult);
  }
}
