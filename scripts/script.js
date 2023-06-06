class PubSub {
  subscribers = {};

  subscribe(event, listener) {
    const subscribers = this.subscribers;

    if (!subscribers[event]) {
      subscribers[event] = [listener];
    } else {
      subscribers[event].push(listener);
    }
  }

  unsubscribe(event, listener) {
    const subscribers = this.subscribers[event];

    if (subscribers && subscribers.length) {
      this.subscribers[event] = subscribers.filter((sub) => sub !== listener);
    }
  }

  /*unsubscribe(event, listener) {
    const subscribers = this.subscribers[event];
  
    if (subscribers && subscribers.length) {
      const index = subscribers.indexOf(listener);
  
      if (index !== -1) {
        subscribers.splice(index, 1);
      }
    }
  }*

  publish(event, ...args) {
    const listeners = this.subscribers[event];

    if (!listeners || !listeners.length) {
      return;
    }

    listeners.forEach((listener) => listener.apply(null, args));
  }
}

console.log('---starting module PubSub -----');

export default new PubSub();