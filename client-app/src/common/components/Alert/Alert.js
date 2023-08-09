import "./alert.scss";
import Component from "@/plugins/component";
import { AsNode, BindEvent, SaveContainer } from "@/common/decorators";
import { mutation_types, store } from "@/store/store";

export default class Alert extends Component {
  queue = [];
  inWork = false;
  generator = null;

  alert = {
      time: 3500,
      close: true,
      maxWidth: '400px',
      maxLength: '30'
  }

  constructor(...props) {
      super(...props)

      store.subscribe(
          mutation_types.SET_SHOW_ALERT,
          this.addToQueue.bind(this)
      )
  }

  alertMessageConditions(message, maxLength) {
      if (message.length > maxLength) {
          return message.slice(0, maxLength) + '...';
      } else if (maxLength == Infinity) {
          return message;
      } else return message;
  }

  addToQueue({ showAlert }) {
      this.queue.push(showAlert);

      if (!this.inWork) {
          this.start();
      }
  }

  start() {
      this.inWork = true;
      this.generator = this.process();
      this.generator.next();
  }

  finish() {
      this.inWork = false;
      this.generator = null;
  }

  
  * process() {
      while(this.queue.length !== 0) {
          const alert = this.queue.shift();
          this.alertUpdate(alert);
          yield;
      }

      this.finish();
  }

  alertUpdate(showAlert) {
      const alertNode = this.$container.querySelector('.alert');
      alertNode.classList.add(showAlert.type);
      this.$container.classList.remove('hide');

      const resultMessage = this.alertMessageConditions(showAlert.message, this.alert.maxLength || Infinity);
      const closeButton = this.alert.close ? '<button type="button" class="close" data-dismiss="alert" aria-label="Close">&times;</button>' : '';

      alertNode.innerHTML = `
          ${resultMessage}
          ${closeButton}
      `;

      this.onCloseHandler(alertNode);

      setTimeout(() => {
          this.$container.classList.add('hide');
          alertNode.classList.remove(showAlert.type);
          alertNode.innerHTML = '';
          this.generator.next();
      }, this.alert.time || 3500);
  }

  get showAlert() {
      return store.state.showAlert;
  }

  @AsFragment
  getTemplate() {
      return `
          <div class="wrapper-alert hide" style="max-width: ${this.alert.maxWidth ? this.alert.maxWidth : ''}"> 
              <div class="alert" role="alert"></div>
          </div>
      `;
  }


  @SaveContainer
  render() {
      return this.getTemplate();
  }

  onCloseHandler(node) {
      const closeElement = node.querySelector('.close');
      if (closeElement) {
          closeElement.addEventListener('click', () => {
              this.closeAlert(node);
          })
      }
  }

  closeAlert() {
      this.$container.classList.add('hide');
  }
}