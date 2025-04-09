let people:string[] = ['Fernando','Melissa','Eduardo'];
let salaries:number[] = [1500,2400,3200]
let flowers:string[] = ['Rosa','Girasol','Lirio']

/* if(people[2] !== undefined){
    
    console.log(people[2])
} */

// for(let i = 0; i< flowers.length; i++ ){
//     console.log(flowers[i]);
// }

for(let i=0;i<flowers.length;i++){
    console.log(people[i],'tiene un salario de',salaries[i]);
}