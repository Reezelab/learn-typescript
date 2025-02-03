// fungsi every digunakan untuk memriksa apakah semua element array memenuhi kondisi yang ditentukan oleh callback function
// fungsi ini akan mengembalikan true jika semua element memenuhi kondisi
// fungsi ini akan mengembalikan false jika salah satu element tidak memenuhi kondisi

const arraySatu: Array<number> = [10, 20, 30, 40, 50]
const result: boolean = arraySatu.every((num) => {
    return num % 2 === 0
})

console.log(result)