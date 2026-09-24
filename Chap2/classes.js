// class Person {
//   constructor() {}
//   msg: string = '';
//   speak() {
//     console.log(this.msg);
//   }
// }
class Person {
    msg;
    constructor(msg) {
        this.msg = msg;
    }
    speak() {
        console.log(this.msg);
    }
}
const tom = new Person("hello");
//tom.msg = "hello"
tom.speak();
export {};
