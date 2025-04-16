class Car{
    brand:      string;
    doors:      number;
    fuelTank:   number;
    isRunning:  boolean;
    type:       string;
    createdAt:  number;

    constructor(){
        this.brand='No brand';
        this.doors = 0;
        this.fuelTank = 0;
        this.isRunning=false;
        this.type='No type';

        this.createdAt=12343;
    }

    turnOn(){
        if(this.isRunning){
            console.log('EL carro ya estaba encendido')
            return;
        }

        if(this.fuelTank <=0 ){
            console.log('el carro no tiene gasolina');
            return;
        }

        this.isRunning =true;
        console.log('El carro esta encendido')
        
    }
}

let myMazda = new Car();



console.log(myMazda)

myMazda.turnOn();

console.log(myMazda);