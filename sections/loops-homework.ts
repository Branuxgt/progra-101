console.log('holi')

export let base:number = 10;
let limit:number = 50

// for(let i = 1; i <= limit; i++){
//     console.log(base ,' x ' ,i, ' = ' , base*i);
// }

// let i:number = 1;
// while(i <= limit){
//     console.log(base ,' x ' ,i, ' = ' , base*i);
//     i++;
// }


let i:number = 1;

do{
    console.log(base ,' x ' ,i, ' = ' , base*i);
    i++;
}while(i <= limit)