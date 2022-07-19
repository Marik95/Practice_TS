class Vehicle{
    color: string;

    constructor(color: string) {
        this.color = color;
    }
    /** 
     * the same as code before
     * constructor(public color: string) {
       }
     */

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

    constructor(public wheels: number, color: string){
        super(color)
    }

    private drive_car(): void{
        console.log(`I'm car and i'm driving`);
    }
    startDrivingProces(): void {
        this.drive_car();
        this.beep();
    }
} //modifiers

const vehicle = new Vehicle('black');
console.log(vehicle.color);
// vehicle.drive();
// vehicle.stop();
const car = new Car(4, 'green');
console.log(car.color);
console.log(car.wheels);

// car.startDrivingProces();



