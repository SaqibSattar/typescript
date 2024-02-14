// function printName(person: {first: string, last: string}): void {
//     console.log(`${person.first} ${person.last}`)
// }

// printName({first: 'Thomas', last: 'jenkins'})

// let coordinate: { x: number, y: number } = { x: 34, y: 2 };

// function randomCoordinate(): { x: number, y: number} {
//     return { x: Math.random(), y: Math.random() }
// }


// printName({first: 'Mike', last: 'Wick', age: 233})
// const singer = {first: 'Mike', last: 'Wick', age: 233}
// printName(singer)

type Point = {
    x: number,
    y: number
}

let coordinate: Point = { x: 34, y: 2 };

function randomCoordinate(): Point {
    return { x: Math.random(), y: Math.random() }
}


function doublePoint(point: Point): Point {
    return {x: point.x * 2, y: point.y * 2}
}

type Song = {
    title: string;
    artist: string;
    numStreams: number;
    credits: { producer: string; writer: string}
}

function calculatePayout(song: Song) {
    return song.numStreams * 0.0045
}

function printSong(song: Song) {
    console.log(`${song.title} - ${song.artist}`)
}

const mySong: Song = {
    title: 'title',
    artist: 'artist',
    numStreams: 343,
    // credits: 'sdlfj',
    credits: {
        producer: 'producer',
        writer: 'writer'
    }
}

var earnings = calculatePayout(mySong)
console.log(earnings)
printSong(mySong)