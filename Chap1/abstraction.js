"use strict";
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    canDrive() {
        console.log(`user is ${this.name}`);
        if (this.age >= 16) {
            console.log('allow to drive');
        }
        else {
            console.log('do not allow to drive');
        }
    }
}
const ekomobong = new Person('Ekomobong', 41);
ekomobong.canDrive();
