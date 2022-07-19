// #1 Interface initializtion, creating a new type
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




// #2 Refactoring
interface Reportable {
    summary(): string;
}

const oldCivic2 = {
    name: 'Civic',
    year: new Date(),
    broken: true,
    summary(): string {
        return `Name: ${this.name}, Year: ${this.year}, Broken: ${this.broken}`;
    }
}

const cola2 = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string{
        return `Cola has ${this.sugar} grams of sugar`;
    },
}


const printSummary = (item: Reportable): void => {
    console.log(item.summary());
}

printSummary(oldCivic2);
printSummary(cola2);
