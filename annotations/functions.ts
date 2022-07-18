//functions annotations

const logNumber: (i: number) => void = (i: number) =>{
    console.log(i);
}

//annotation type for functions return #mustHave (type "number" at the example below)
const add = (a: number, b: number): number =>{
    return a + b;
};


function divide(a:number, b:number): number{
    return a/b;
}

const multiply = function(a: number, b: number): number{
    return a*b;
}


// void type has no return
const logger = (message: string): void =>{
    console.log(message);
    //void function can return null or undefiend, another data will have false meaning
}

const throwError = (message: string): string => {
    if(!message){
        throw new Error(message);
    }
    return message;
}
const throwError2 = (message: string): never => {
    throw new Error(message);
}
const throwError3 = (message: string): void => {
    if(!message){
        throw new Error(message);
    }
}

//Destructorization in Type Script

const todayWeathe = {
    date: new Date(),
    weather: "sunny"
}


const logWeather = (forecast: {date: Date, weather: string}): void => {
    console.log(forecast.date);
    console.log(forecast.weather);
}

//ES2015 examp. with destructorization
const logWeather2 = ({date, weather}: {date: Date, weather: string}): void => {
    console.log(date);
    console.log(weather);
}




