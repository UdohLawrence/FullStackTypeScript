"use strict";
class Encapsulator {
    constructor(name) {
        this.name = name;
    }
    name;
    get getName() {
        return this.name;
    }
    set setName(name) {
        this.name = name;
    }
}
const encapsulator = new Encapsulator('Ekomobong');
console.log(encapsulator.getName);
//console.log(encapsulator.name)
