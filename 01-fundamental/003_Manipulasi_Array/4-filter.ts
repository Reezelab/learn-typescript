// fungsi filter digunakan untuk menyaring element array yang sesuai dengan callback function

const numbers: Array<number> = [10, 20, 30, 40, 50]
const filtered: Array<number> = numbers.filter((item) => item % 2 === 0)
console.log(filtered)