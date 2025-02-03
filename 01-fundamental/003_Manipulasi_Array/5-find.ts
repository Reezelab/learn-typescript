// fungsi find digunakan untuk mencari satu element array dengan berdasarkan kondisi callback functionnya
// ini akan mengembalikan satu data

const numbers: Array<number> = [10, 20, 30, 40, 50]
const find: number = numbers.find((item) => item === 50)
console.log(find)