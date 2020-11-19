class Car {
    
    static getSpecs(car) {
     return `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`
  }
    constructor(objCar) {
        this.maxSpeed = objCar.maxSpeed;
        this._price = objCar.price;
        this.speed = 0;
        this.distance = 0;
        this.isOn = false;
  }
    get price() {
        return this._price;
  }
    set price(value) {
        this._price = value;
  }
    turnOn() {
        this.isOn = true;
    }    
    turnOff() {
        this.isOn = false;
        this.speed = 0;
  }
    accelerate(value) {
        this.speed += value;
        if (this.speed > this.maxSpeed) {
            this.speed = this.maxSpeed
        }
  }
    decelerate(value) {
        this.speed = this.speed - value;
        if (this.speed < 0) {
            this.speed = 0;
        }

  }
    drive(hours) {
        if (this.isOn === true) {
            this.distance += hours * this.speed;
      }
  }
}
 
const mustang = new Car({ maxSpeed: 200, price: 2000 });
console.log(mustang)
mustang.turnOn();
console.log(mustang)
// mustang.turnOff();

mustang.accelerate(199);
console.log(mustang)

mustang.decelerate(100);
console.log(mustang)



mustang.drive(2);
console.log(mustang)


console.log(Car.getSpecs(mustang));

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

console.log(Car.getSpecs(mustang));

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
