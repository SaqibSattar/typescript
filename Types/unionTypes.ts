// let age: number | string = 11
// age = 23;
// age = '23'


// type Point = {
//     x: number,
//     y: number
// }

// type Loc = {
//     lat: number,
//     long: number
// }

// let coordinates: Loc | Point = {x:1, y: 3}
// coordinates = {lat:343.34, long: 234.343}

// function printAge(age: number | string): void {
//  console.log(`You are ${age} years old`)
// }

// function calculateTax(price: number | string, tax: number): number {
//     if (typeof price === 'string') {
//         price = parseFloat(price.replace('$', ''))
//     }
//     return price * tax
// }

// console.log(calculateTax(23, 4))
// console.log(calculateTax('23', 4))

// const nums: number[] = [1,2,3]
// const stuff: any[] = ['test', 2]

// const stuff: (number | string)[] = [1,2,3,'test']
// const stuff: number | string[] = [1,2,3,'test']
// const stuff: number[] | string[] = [1,2,3,'test']


function giveAnswer(answer: 'No' | 'Yes' | 'Maybe'): void {
    console.log(`Your answer is ${answer}`)
}

giveAnswer('No')
giveAnswer('I am not sure')