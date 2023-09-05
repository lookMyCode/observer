import StateManager from "./StateManager.js";


export function two() {
  const s$ = StateManager.state$
    .subscribe(state => {
      console.log('Two', state);
    });

  setTimeout(() => {
    s$.unsubscribe();
  }, 5000);
}
