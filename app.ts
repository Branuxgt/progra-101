
function max(valor1:number,valor2:number,valor3:number){
    const mayor = Math.max(valor1,valor2,valor3);
    return mayor;
}

console.log(max(111,22,3));



function maxMine(v1:number,v2:number,v3:number){
   
    let numberToValidate:number[]=[v1,v2,v3];
    let maxNumber = numberToValidate[0];
    for(let i =0;i<numberToValidate.length;i++){
        if(numberToValidate[i]>=maxNumber){
            maxNumber=numberToValidate[i];
        }
    }
    return maxNumber;

}

console.log(maxMine(25,24,3));

