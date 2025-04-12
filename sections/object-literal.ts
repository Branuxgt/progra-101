export let person = {

    name: 'melisa',
    age: 30,
    isActive: true,
    hobbies: ['soccer', 'baseball'],
    toString(printAll:boolean){
        let objectString = this.name + ' '+ this.age + ' '+ this.hobbies[0];
        console.log(objectString);
    }
}

// console.log (person.name.toUpperCase());

// person.toString(true);

let car ={
    color: 'red',
    brand:'Toyota',
    wheels:4
}

let smartTv={
    screenSize: 43,
    hdmiPorts:3,
    panelTecnology:'IPS'
}

let youtuveVideo={
    videoDuration:23,
    videoResolution:'1080',
    hasSubtitels:true
    
}
console.log(car);
console.log(smartTv);
console.log(youtuveVideo);
