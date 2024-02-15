interface Point {
    x: number;
    y: number;
}

const pt: Point = {x: 12, y:34}

interface Person {
    readonly id: number;
    first: string;
    last: string;
    nickname?: string;
    sayHi: () => string
}

const thomas: Person = { 
    first: 'Thomas', 
    last: 'Hardy', 
    id: 12,
    sayHi: () => {
        return 'Hi'
    }
}

thomas.first = 'test';
// thomas.id = 23

interface Product {
    name: string,
    price: number,
    applyDiscount(discount: number): number
}

const shoes: Product = {
    name: 'Nike',
    price: 100,
    applyDiscount(amount: number) {
        const newPrice = this.price * (2 - amount)
        return newPrice
    }
}

console.log(shoes.applyDiscount(1))


interface Dog {
    name: string;
    age: number;
}

interface Dog {
    breed: string;
    bark(): string;
}


const elton: Dog = {
    name: 'Elton',
    age: 2,
    breed: 'German Shepherd',
    bark() {
        return 'Woof Woof!'
    }
}


interface ServiceDog extends Dog {
    job: 'drug sniffer' | 'bomb' | 'guide dog';
}

const chewy: ServiceDog = {
    name: 'Chewy',
    age: 4,
    breed: 'German Shepherd',
    bark() {
        return 'Bark!'
    },
    job: 'guide dog'
}


interface User {
    name: string;
}

interface Employee {
    readonly id: number;
    email: string;
}

interface Engineer extends User, Employee {
    level: string;
    languages: string[]
}

const pierre: Engineer = {
    name: 'Pierre',
    id: 233,
    email: 'test@gmail.com',
    level: 'Beginner',
    languages: ['English', 'Urdu']
}