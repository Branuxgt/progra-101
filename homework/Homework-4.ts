export let numbers = [1, 6, 8, 14, 2, 7, 10, 3, 5,22 ];

for(let i = 0; i <numbers.length;i++){
    let contadorMayor = 0;
    let checkNumber = numbers[i];;
    for(let ii = 0; ii<numbers.length;ii++){
        if(checkNumber > numbers[ii]){
            contadorMayor++;
        }
    }
    if(contadorMayor == numbers.length-1){
        console.log("-----El número mayor es: ", numbers[i],"valor del contador: ", contadorMayor,"------");
    }
}

let maxNumber = numbers[0];

for(let a =0;a < numbers.length;a++){
    if (numbers[a]>=maxNumber){
        maxNumber=numbers[a];
    }
}
console.log("el valor maximo es: ",maxNumber);