declare global {
  interface Array<T> {
    lastItem(): T;
  }
}

Array.prototype.lastItem = function lastItem() {
  return this[this.length - 1];
};
  
export default {};