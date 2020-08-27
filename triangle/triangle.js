//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
    constructor(sideA, sideB, sideC) {
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }



    isEquilateral() {
        let [a, b, c] = [`${this.sideA}`, `${this.sideB}`, `${this.sideC}`].map(value => +value || 0)
        return a === b && a === c && a === b && a === c && a !== 0
    }

    isIsosceles() {
        let [a, b, c] = [`${this.sideA}`, `${this.sideB}`, `${this.sideC}`].map(value => +value || 0)
        if ((a + b <= c) || (b + c <= a) || (a + c <= b)) {
            return false
        }
        return a === b || a === c || b === c && a === b || a === c || b === c && a !== 0
    }

    isScalene() {
        let [a, b, c] = [`${this.sideA}`, `${this.sideB}`, `${this.sideC}`].map(value => +value || 0)
        if ((a + b <= c) || (b + c <= a) || (a + c <= b)) {
            return false
        } else if ((a === b) || (b == a) || (a === c)) {
            return false
        }
        return a !== b || a !== c || b !== c && [a, b, c].map(number => number !== 0)
    }
}