const colors = ["Black", "Brown", "Red", "Orange", "Yellow", "Green", "Blue", "Violet", "Grey", "White"].map(items => items.toLowerCase())

const getIndex = (arrayList) => {
    return arrayList.slice(0, 2)
}

export const decodedValue = (list) => {
    return Number(getIndex(list)
        .map(value => colors.indexOf(value))
        .join(''))
};