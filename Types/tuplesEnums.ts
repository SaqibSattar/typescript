const color: [number, number, number] = [255, 0, 255]

type HTTPResponse = [number, string];

// const goodRes: HTTPResponse = ['Ok', 3]
const goodRes: HTTPResponse = [2, 'Ok']
// goodRes[0] = 'test'
// goodRes.push(3)
// goodRes.pop()
// goodRes.pop()
// goodRes.pop()


enum OrderStatus {
    PENDING,
    SHIPPED,
    DELIVERED,
    RETURNED
}

const myStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus): boolean {
    return status === OrderStatus.DELIVERED
}

isDelivered(OrderStatus.RETURNED)

enum ArrowKeys {
    UP = 'up',
    DOWN = 'down',
    LEFT = 'left',
    RIGHT = 'right'
}
