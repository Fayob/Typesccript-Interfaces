interface NewName {
    readonly names: string;
    output?: string  // the question mark (?) signals an optional parameter here
}

interface NewGreetable extends NewName {
   greet(phrase: string): void
}

class NewUsers implements NewGreetable {
   names: string
   age?: number  // the question mark (?) signals an optional parameter here

   constructor(n: string){
       this.names = n
   }

   greet(phrase: string){
       console.log(phrase + this.names);
       
   }
}

let user2: NewGreetable

 user2 = new NewUsers("Fayob")
user2.greet("Welcome Mr ")
console.log(user2);