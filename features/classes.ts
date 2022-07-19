class Vehicle{
    drive(): void{
        console.log(`I'm driving`);
    };
    stop(): void{
        console.log(`I'm stopped`);
    };
}

/*  Inheritance  */
class Car extends Vehicle {
    drive(): void{
        console.log(`I'm car and i'm driving`);
    }
}


const vehicle = new Vehicle();
vehicle.drive();
vehicle.stop();
const car = new Car();
car.drive();

