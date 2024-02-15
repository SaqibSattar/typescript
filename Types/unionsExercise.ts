let highScore: number | boolean;

let stuff: number[] | string[] = []

type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'

type SkiSchoolStudent = {
    name: string;
    age: number;
    sport: 'ski' | 'snowboard';
    level: SkillLevel
}

type RGB = {
    r: number;
    g: number;
    b: number;
}

type HSL = {
    h: number;
    s: number;
    l: number;
}

let colors: (RGB | HSL)[] = [] 

function greet(person: string | string[]): void {
    if (typeof person !== 'string') {
        for (const p of person) {
            console.log(`Hello, ${p}`)
        }
    }
    console.log(`Hello, ${person}`)
}