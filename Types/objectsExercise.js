var cats = {
    title: 'Cats',
    director: 'Tom Hooper',
    releaseYear: 2022,
    boxOffice: {
        budget: 50000,
        grossUs: 40000,
        grossWorldwide: 70000
    }
};
// function getProfit(movie: Movie): number {
//     return movie.boxOffice.grossWorldwide - movie.boxOffice.budget
// }
// function getProfit(movie: Movie): number {
//     const { grossWorldwide, budget } = movie.boxOffice
//     return grossWorldwide - budget
// }
function getProfit(_a) {
    var _b = _a.boxOffice, grossWorldwide = _b.grossWorldwide, budget = _b.budget;
    return grossWorldwide - budget;
}
console.log(getProfit(cats));
