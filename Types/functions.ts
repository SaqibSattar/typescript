// function square(num) {
//     num.toupperCase()
//     num()
//     return num * num
// }

// square(3)
// square(true)
// square('test')

// function square(num: number) {
//     return num * num
// }

// square(3)
// square('User')

// function greet(person: string) {
//     return `Hi there, ${person}`
// }

// greet(3)
// greet('User')


// function userGreet(person: string = 'user') {
//     return `Hi there, ${person}`
// }

// userGreet()
// userGreet('John')


// function add(num1: number, num2: number) {
//     return num1 + num2
// }

// function multiply(num1: number, num2: number): number {
//     return num1 * num2
// }


// const nums = [1, 2, 3];
// nums.map((num) => {
//     return num.toUpperCase()
// })

// function printTwice(msg: string): void {
//     console.log(msg)
//     console.log(msg)
// }

function neverStop(): never {
    while(true) {
        console.log('never ending loop')
    }
}

function makeError(msg: string): never {
    throw new Error(msg)
}
