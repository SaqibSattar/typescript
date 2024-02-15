let age: number | string = 11
age = 23;
age = '23'


type Point = {
    x: number,
    y: number
}

type Loc = {
    lat: number,
    long: number
}

let coordinates: Loc | Point = {x:1, y: 3}
coordinates = {lat:343.34, long: 234.343}