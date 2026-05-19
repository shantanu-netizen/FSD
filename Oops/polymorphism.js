class parent {
  calculate(a, b) {
    return a + b;
  }
}
class child extends parent {
    //Method Overidding
  calculate(a, b) {
    return a + b;
  }
}
let obj = new parent();
console.log(obj.calculate(2, 2));
let obj1 = new child();
console.log(obj.calculate(2, 2));