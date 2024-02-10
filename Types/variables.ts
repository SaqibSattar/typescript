let movieTitle: string = 'john wick'
movieTitle = 'Thor'
movieTitle = 5
movieTitle.name = 'X-men'
movieTitle.toupperCase

let numCat: number = 7;
numCat += 1
numCat = 'test'
numCat.name = 'X-men'
numCat.toupperCase


let gameOver: boolean = false;
gameOver = true
gameOver = 'test'
gameOver.name = 'X-men'
gameOver.toupperCase


// type inference
let tvShow = 'Hatim'
tvShow = 3
tvShow = true

let isFunny = false
isFunny = 4
isFunny = true


// any type
let userName: any = 'User'
userName = 4
userName = true
userName.toupperCase()


let movies = ['X-men','John Wick','Matrix','X-men 2']
let foundMovie
// let foundMovie: string

for (let movie of movies) {
    if (movie == 'Matrix') {
        foundMovie = movie
    }
}

foundMovie.name = 'test'
foundMovie.call()
