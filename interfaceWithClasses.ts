// type Greetable = {
//     name: string;
//     age: number;

//     greet(phrase: string): void
// } // I commented this out just to know that interface and type are similar. 

interface Greetables {
    name: string;

    greet(phrase: string): void
}

class Persons implements Greetables {
    name: string
    age = 30

    constructor(n: string){
        this.name = n
    }

    greet(phrase: string){
        console.log(phrase + this.name);
        
    }
}


const newPerson = new Persons("Fayob")
newPerson.greet("Welcome Mr ")
console.log(newPerson);


