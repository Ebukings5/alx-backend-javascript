export default class Car {
    constructor(brand, motor, color) {
        this.brand = brand;
        this.motor = motor;
        this.color = color;
    }
    cloneCar() {
        return new this.constructor[Symbol.species]();
    }
    static get [Symbol.species]() {
        return this;
    }
}