interface Greet {
    readonly nam: string;

   greet(phrase: string): void
}

class User implements Greet {
   nam: string
   age = 30

   constructor(n: string){
       this.nam = n
   }

   greet(phrase: string){
       console.log(phrase + this.nam);
       
   }
}

let user: Greet

 user = new User("Fayob")
user.greet("Welcome Mr ")
console.log(user);

// user.nam ="FA" // not possible because our Greet Interface nam is readonly
