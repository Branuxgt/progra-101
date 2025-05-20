
export function largestNameOfArray(nameArray:string[]){

    let checkHeroe = nameArray[0]

    for(let i = 1; i< nameArray.length;i++){

        if(checkHeroe.length < nameArray[i].length){
            checkHeroe = nameArray[i]
        }

    }

    return checkHeroe;

}

let heroes:string[] = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier']; 
let hero = largestNameOfArray( heroes ); 
console.log( hero ); // Profesor Charles Xavier 

