type Movie = {
    readonly title: string;
    originalTitle?: string;
    director: string;
    releaseYear: number;
    boxOffice: {
        budget: number;
        grossUs: number;
        grossWorldwide: number
    }
}


const cats: Movie = {
    title: 'Cats',
    director: 'Tom Hooper',
    releaseYear: 2022,
    boxOffice: {
        budget: 50000,
        grossUs: 40000,
        grossWorldwide: 70000
    }

}

// function getProfit(movie: Movie): number {
//     return movie.boxOffice.grossWorldwide - movie.boxOffice.budget
// }

// function getProfit(movie: Movie): number {
//     const { grossWorldwide, budget } = movie.boxOffice
//     return grossWorldwide - budget
// }

function getProfit({boxOffice: { grossWorldwide, budget}}: Movie): number {
    return grossWorldwide - budget
}

console.log(getProfit(cats))