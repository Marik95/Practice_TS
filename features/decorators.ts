class DecoratedCar {
    color: string = 'white';

    get formattedColor(): string{
        return `This car color id ${this.color}`;
    }

    @logError    
    drive(): void {
        throw new Error();
        console.log('I am driving');
    }
}

function logError(target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function() {
        try{
            method();
        } catch (e) {
            console.log('Darn! The car crashed!');
        }
    }
}

new DecoratedCar().drive();