// function square(num) {
//     num.toupperCase()
//     num()
//     return num * num
// }

// square(3)
// square(true)
// square('test')

function square(num: number) {
    return num * num
}

square(3)
square('User')

function greet(person: string) {
    return `Hi there, ${person}`
}

greet(3)
greet('User')


function userGreet(person: string = 'user') {
    return `Hi there, ${person}`
}

userGreet()
userGreet('John')