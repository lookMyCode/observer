import StateManager from "./StateManager.js";


export function one() {
  const s$ = StateManager.state$
    .subscribe(state => {
      console.log('One', state);
    });

  setTimeout(() => {
    s$.unsubscribe();
  }, 3000);
}
