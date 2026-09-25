class Vehicle {
  constructor(private wheelCount: number) {}

  showNumberOfWheels() {
    console.log(`Number of wheels: ${this.wheelCount}`);
  }
}

class MotorCycle extends Vehicle {
  constructor() {
    super(2);
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