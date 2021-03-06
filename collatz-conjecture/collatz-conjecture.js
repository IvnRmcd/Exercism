//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (n) => {
    let steps = 0
    if (n <= 0)
        throw Error('Only positive numbers are allowed')

    while (n !== 1) {
        steps++
        n = (n % 2 === 0) ? n / 2 : 3 * n + 1
    }
    return steps
};