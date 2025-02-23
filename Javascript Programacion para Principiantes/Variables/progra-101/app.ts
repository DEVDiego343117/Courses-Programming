class Car {
    brand: string;
    doors: number;
    gearbox: string;
    speed: number;
    fuelTank: number;
    isRunning: boolean;
    type: string;

    constructor() {
        this.brand = "No";
        this.doors = 4;
        this.gearbox = "Automatico";
        this.speed = 150;
        this.fuelTank = 0;
        this.isRunning = false;
        this.type = "No tipo";

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

    fillTank (gas: number) {
        if (gas <= 0) {
            ("La gasolina debe ser mayor a 1");
            return;
        }

        let newFuelTank = this.fuelTank + gas;
        if (newFuelTank >= 100) {
            this.fuelTank = 100;
        } else {
            this.fuelTank = newFuelTank;
        }
    }
}

let myHonda = new Car();

myHonda.turnOn();
myHonda.fillTank(100);
console.log(myHonda);
