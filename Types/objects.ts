function printName(person: {first: string, last: string}): void {
    console.log(`${person.first} ${person.last}`)
}

printName({first: 'Thomas', last: 'jenkins'})

let coordinate: { x: number, y: number } = { x: 34, y: 2 };

function randomCoordinate(): { x: number, y: number} {
    return { x: Math.random(), y: Math.random() }
}


printName({first: 'Mike', last: 'Wick', age: 233})
const singer = {first: 'Mike', last: 'Wick', age: 233}
printName(singer)