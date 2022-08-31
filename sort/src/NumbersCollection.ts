export class NumbersCollection{
    constructor(public data: number[]) {}

    get length(): number{
        return this.data.length;
    }

    compare(leftIndex: number, rigthIndex: number): boolean {
        return this.data[leftIndex]>this.data[rigthIndex];
    }

    swap(leftIndex: number, rightIndex: number): void{
        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    }
}