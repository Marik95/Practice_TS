class Vehicle{
    public drive(): void{
        console.log(`I'm driving`);
    };
    public stop(): void{
        console.log(`I'm stopped`);
    };
    protected beep(): void{
        console.log(`Beep!`);
    }
}

/*  Inheritance  */
class Car extends Vehicle {
    private drive_car(): void{
        console.log(`I'm car and i'm driving`);
    }
    startDrivingProces(): void {
        this.drive_car();
        this.beep();
    }
} //modifiers

const vehicle = new Vehicle();
vehicle.drive();
vehicle.stop();
const car = new Car();
car.startDrivingProces();



