type ObservableRef = {
  unsubscribe: () => void;
}

type SubscribeCallback<T> = (a: T) => void;

export default class Observable<T> {
  private state?: T;
  private subscribers: (SubscribeCallback<T>|undefined)[] = [];

  constructor(state: T) {
    this.state = state;
  }

  subscribe(cb: SubscribeCallback<T>): ObservableRef {
    this.subscribers.push(cb);
    cb(this.state!);

    return {
      unsubscribe: () => {
        this.subscribers = this.subscribers.filter(callback => cb !== callback);
      }
    }
  }

  next(state: T) {
    this.state = state;
    this.subscribers.forEach(cb => {
      cb && cb(this.state!);
    });
  }
}
