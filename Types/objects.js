// function printName(person: {first: string, last: string}): void {
//     console.log(`${person.first} ${person.last}`)
// }
var coordinate = { x: 34, y: 2 };
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
function doublePoint(point) {
    return { x: point.x * 2, y: point.y * 2 };
}
function calculatePayout(song) {
    return song.numStreams * 0.0045;
}
function printSong(song) {
    console.log("".concat(song.title, " - ").concat(song.artist));
}
var mySong = {
    title: 'title',
    artist: 'artist',
    numStreams: 343,
    // credits: 'sdlfj',
    credits: {
        producer: 'producer',
        writer: 'writer'
    }
};
var earnings = calculatePayout(mySong);
console.log(earnings);
printSong(mySong);
