class ArrayOfNumbers {
    constructor(public colection: number[]) {}

    get(index: number): number {
        return this.colection[index]
    }
}

class ArrayOfStrings {
    constructor(public colection: string[]) {}

    get(index: number): string {
        return this.colection[index]
    }
}

class ArrayOfAnything<T> {
    constructor(public colection: T[]) {}

    get(index: number): T {
        return this.colection[index]
    }
}