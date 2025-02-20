class Car {
    brand: string;
    doors: number;
    gearbox: string;
    speed: number;
    fuelTank: number;
    isRunning: boolean;

    constructor() {
        this.brand = "Camaro";
        this.doors = 4;
        this.gearbox = "Automatico";
        this.speed = 150;
        this.fuelTank = 50;
        this.isRunning = false;

    }

    turnOn() {
        if (this.isRunning){
           console.log("El carro ya estaba encendido");
           return;
        }

        if(this.fuelTank <=0){
            console.log("El carro no tiene combustible");
            return;
        }

        this.isRunning = true;
        console.log("El carro esta encendido");
        
    }
}

let camaro = new Car();

console.log(camaro);
camaro.turnOn();
camaro.turnOn();