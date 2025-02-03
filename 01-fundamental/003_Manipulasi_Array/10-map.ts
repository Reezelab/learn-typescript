// map digunakan untuk membuat array baru dari hasil callback function, fungsi ini tidak mengubah array asli melainkan membuat array baru

// pada array string
const nameOfFruits: Array<string> = ['apple', 'banana', 'cherry', 'mango']
const toUpperCase: Array<string> = nameOfFruits.map((str) => str.toUpperCase())
console.log(toUpperCase)

// pada array number
const listOfNumbers: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const multipleTwo: Array<number> = listOfNumbers.map((num) => num * 2)
console.log(multipleTwo)


// bersama dengan index
const withIndex: Array<string> = listOfNumbers.map((num, index) => {
    return `${index}: ${num}`
})
console.log(withIndex)