class MyArray {
  constructor() {
    (this.length = 0), (this.data = {});
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
  }
  shiftItems(index) {
    for (let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}
const newArray = new MyArray();
console.log(newArray.push('hi'));
console.log(newArray.push('hello'));
console.log(newArray.push('adios'));
console.log(newArray);
console.log(newArray.delete(1));
console.log(newArray);
