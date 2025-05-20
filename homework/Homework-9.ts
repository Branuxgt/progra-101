export function heroesThatStartsWith(nameOfHeroes:string[],startLetter:string){

    startLetter = startLetter.toUpperCase();
    let newListOfHeroes:string[]=[];

    for(let i =0;i<nameOfHeroes.length;i++){

        if(nameOfHeroes[i].startsWith(startLetter)){

            newListOfHeroes.push(nameOfHeroes[i]);
        }

    }

    return newListOfHeroes;

}

let heroes = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel']; 
let herosWithLetterS = heroesThatStartsWith( heroes, 'C' );  
console.log( herosWithLetterS ); // She Hulk, Spiderman