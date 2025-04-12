interface Person{
    name: string;
    age:number;
    isActive:boolean;
}

let fernando:Person ={
    age:36,
    isActive:true,
    name:'fernando'
}

let melisa:Person ={
    age: 26,
    isActive: false,
    name: 'melisa'
}

let juan: Person ={
    age:42,
    isActive:false,
    name:'juan'

}

let peopleArray = [fernando,melisa,juan];

for(let i = 0;i<peopleArray.length;i++){
    console.log(peopleArray[i].name + ' '+peopleArray[i].age);
}