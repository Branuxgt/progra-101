export let limits = [1,6];

let contadorV = limits[0];

for(let i = limits[0]; i <= limits[1]; i++){
    let resultLine:Number[]=[]
    for(let a = limits[0]; a <= limits[1]; a++){
        let newValue = a*i;
        resultLine.push(newValue);
    }
    console.log(resultLine);
}