// Basic Types

let id: number = 5
let company: string = "KiziCorp"
let isPublished: Boolean = true
let x: any = "Hello"

let ids: number[] = [1,2,3,4,5]
let arr: any[] = [1, true, "Hello"]

//Tuple : for type specification of arrays
let person: [number, string, boolean] = [1, "Two", true]
//Tuple Array
let employee: [number, string][]

employee = [
    [1, "Brad"],
    [2, "John"],
    [3, "Jill"],
]

// Union
let pid: string | number = 22
pid = "22"

// Emum
enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right
}

enum Direction2 {
    Up = "Up",
    Down = "Down",
    Left = "Left",
    Right = "Right"
}

// Objects
type User = {
    id: number,
    name: string
}
const user: User = {
    id: 1,
    name: "John"
}

// Type Assertion
let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number

// Functions
function addNum(x: number, y: number): number {
    return x + y
}

// Void
function log(message: string | number): void {
    console.log(message)
}

// Interfaces