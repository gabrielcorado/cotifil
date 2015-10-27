// Dependencies
import m from 'mithril';

/**
 *
 */
export class Component {
  /**
   * The Component entry point
   */
  static controller(args) {
    // Default return
    return {};
  }

  /**
   * View
   */
  static view(data) {
    throw 'Render method should be implemented by the component';
  }
}
