import Observable from "./Observable.js";

interface IState {
  [k: string]: any,
}

export default class StateManager {
  private static _state: IState = {};
  private static _state$ = new Observable(this._state);

  static set state(s) {
    this._state = s;
    this._state$.next(this._state);
  }

  static get state() {
    return this._state;
  }

  static get state$() {
    return this._state$;
  }
}
