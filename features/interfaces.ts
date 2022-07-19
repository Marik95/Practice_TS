
// Interface initializtion, creating a new type
interface Vehicle {
    name: string;
    year: Date;
    broken: boolean;
    summary(): string;
}

// Object for type Vehicle
const oldCivic = {
    name: 'Civic',
    year: new Date(),
    broken: true,
    summary(): string {
        return `Name: ${this.name}, Year: ${this.year}, Broken: ${this.broken}`;
    }
}

//function tha use a new type 'Vehicle'
const printVehicle = (vehicle: Vehicle): void => {
    console.log(vehicle.summary());
}

//run function with object in entering data
printVehicle(oldCivic);