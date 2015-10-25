// Dependencies
import m from 'mithril';

/**
 *
 */
export class Component {
  /**
   *
   */
  constructor(root, options) {
    // Set the root
    this._root = root;
  }

  /**
   * The Component entry point
   */
  controller(args) {

  }

  /**
   * View
   */
  view(data) {
    throw 'Render method should be implemented by the component';
  }
}
