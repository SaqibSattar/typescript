const ages: number[] = []
const agesList: Array<number> = []

const gameBoard: string[][] = [[]]
const gameBoardList: Array<Array<string>> = [[]];

type Product = {
    name: string;
    price: number
}



function getTotal(products: Product[]): number {
    let total = 0;
    for (let product of products) {
        total += product.price;
        
    }
    return total
}