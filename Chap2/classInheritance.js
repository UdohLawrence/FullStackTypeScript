class Vehicle {
    wheelCount;
    constructor(wheelCount) {
        this.wheelCount = wheelCount;
    }
    showNumberOfWheels() {
        console.log(`Number of wheels: ${this.wheelCount}`);
    }
}
class MotorCycle extends Vehicle {
    constructor() {
        super(2);
    }
    updateWheelCount(newWheelCount) {
        this.wheelCount = newWheelCount;
    }
}
class Automobile extends Vehicle {
    constructor() {
        super(4);
    }
}
const motorcycle = new MotorCycle();
motorcycle.showNumberOfWheels();
const automobile = new Automobile();
automobile.showNumberOfWheels();
export {};
