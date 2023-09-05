import { one } from "./One.js";
import StateManager from "./StateManager.js";
import { two } from "./Two.js";

one();
two();

let n = 0;
setInterval(() => {
  StateManager.state = {n};
  ++n;
}, 1000);