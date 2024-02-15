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
thomas.id = 23


