//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


export const decodedValue = (list) => {
    const colors = ["Black", "Brown", "Red", "Orange", "Yellow", "Green", "Blue", "Violet", "Grey", "White"].map(items => items.toLowerCase())
    let colorCode = Number(list.slice(0, 2).map(value => colors.indexOf(value)).join(''))
    return colorCode
};