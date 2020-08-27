//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (number) => {
    let digits = number.toString().split('');
    const reducer = (accumulator, item) => {
        return accumulator + Math.pow(item, digits.length)
    }
    return digits.reduce(reducer, 0) === number
};