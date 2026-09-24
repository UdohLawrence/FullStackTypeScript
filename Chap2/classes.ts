// class Person {
//   constructor() {}
//   msg: string = '';

//   speak() {
//     console.log(this.msg);
//   }
// }
class Person {
  constructor(private msg: string) {}

  speak() {
    console.log(this.msg);
  }
}

const tom = new Person("hello");

//tom.msg = "hello"

tom.speak();
