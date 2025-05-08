export class Car{

    static className = 'Carro';
    public readonly brand:      string;
    public doors:      number;
    public fuelTank:   number;
    public isRunning:  boolean;
    public type:       string;
    private readonly createdAt:  number;

    constructor(brand:string , type:string){
        this.brand=brand;
        this.doors = 0;
        this.fuelTank = 0;
        this.isRunning=false;
        this.type=type;

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

    fillTank(gas:number){

        if(gas<0){
            throw new Error("valor ingresado no permitido")
        }

        let totalGas: number =0;
        
        totalGas = this.fuelTank + gas;
        
        if(totalGas >= 100){
            this.fuelTank=100;
            console.log("gas lleno " + this.fuelTank);
            return;
        }

        if(totalGas < 100){
            this.fuelTank = totalGas;
            console.log("Valor actual de gas " + this.fuelTank)
            return;
        }

    }

    

}

let myMazda = new Car('Mazda', 'Sedan');
myMazda.turnOn();
console.log(myMazda);
myMazda.fillTank(3);
myMazda.fillTank(25);
console.log(myMazda);
myMazda.turnOn();
myMazda.fillTank(50);
console.log(myMazda);
myMazda.fillTank(75);
console.log(myMazda);


/*
console.log(myMazda);

myMazda.turnOn();

console.log(myMazda);
*/