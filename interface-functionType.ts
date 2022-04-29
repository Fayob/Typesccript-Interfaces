// type AddFn = (a: number, b: number) => number

// let addition: AddFn

// addition = (n1: number, n2: number) => {
// return n1 + n2
// }

interface AddFn {
    (n1: number, n2: number): number
}

let addition: AddFn

addition = (n1: number, n2: number) => {
return n1 + n2
}

let ans = addition(2, 2)
let ans1 = addition(50, 70)
console.log(ans);
console.log(ans1);
