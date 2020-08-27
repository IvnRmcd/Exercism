//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

let names = {
    AUG: "Methionine",
    UUU: "Phenylalanine",
    UUC: "Phenylalanine",
    UUA: "Leucine",
    UUG: "Leucine",
    UCU: "Serine",
    UCC: "Serine",
    UCA: "Serine",
    UCG: "Serine",
    UAU: "Tyrosine",
    UAC: "Tyrosine",
    UGU: "Cysteine",
    UGC: "Cysteine",
    UGG: "Tryptophan",
    UAA: "STOP",
    UAG: "STOP",
    UGA: "STOP"
}


export const translate = (value) => {
    let proteins = [];

    if (!value) {
        return proteins
    } else if (value.length % 3 !== 0) {
        throw "Invalid codon"
    }
    let codon = value.match(/.{1,3}/g);



    let namesLemgth = Object.keys(names).length;
    let listLength = codon.length;

    for (let index = 0; index < namesLemgth; index++) {
        for (let item = 0; item < listLength; item++) {
            if (codon[item] === Object.keys(names)[index]) {
                proteins.push(Object.values(names)[index])
            }
        }
    }
    if (proteins.includes("STOP")) {
        proteins = []
    }

    return proteins

};