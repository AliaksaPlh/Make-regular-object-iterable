let myIterable = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (typeof this.from !== "number" || typeof this.to !== "number") {
      throw new Error("All value's type should be a number!");
    }
    if (this.to < this.from) {
      throw new Error("to < from");
    }
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  },
};

for (let item of myIterable) {
  console.log(item);
}
