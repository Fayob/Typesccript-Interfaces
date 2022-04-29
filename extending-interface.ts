interface Named {
    readonly names: string;
}

interface Greetable extends Named {
   greet(phrase: string): void
}

class Users implements Greetable {
   names: string
   age = 30

   constructor(n: string){
       this.names = n
   }

   greet(phrase: string){
       console.log(phrase + this.names);
       
   }
}

let users: Greetable

 users = new Users("Fayob")
users.greet("Welcome Mr ")
console.log(users);

// user.nam ="FA" // not possible because Greetable now has all properties that Named Interface had so names is readonly and can only take one value.
