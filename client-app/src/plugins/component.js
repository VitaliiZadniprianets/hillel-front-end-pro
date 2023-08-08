export default class Component {

  props = {};

  constructor(...props) {
      if (typeof this.render !== 'function') {
          throw new Error('Render should be present');
      }

      if (props.length) {
          this.setProps(...props);
      }
  }

  setProps(props) {
      this.props = {
          ...this.props,
          ...props
      }
  }

  replaceSlot(template, ...slots) {
      for (const { key, replacer } of slots) {
          template.querySelector(key).replaceWith(replacer());
      }

      return template;
  }

  [Symbol.toPrimitive]() {
      return this.render();
  }
}