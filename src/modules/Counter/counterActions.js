import { COUNTER_INCREMENT } from './counterConstants';
// ------------------------------------
// Actions
// ------------------------------------
export function increment(value = 1) {
  return {
    type: COUNTER_INCREMENT,
    payload: value,
  };
}

export default {
  increment,
};
