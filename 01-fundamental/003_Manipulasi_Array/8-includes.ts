// includes digunakan untuk mengetahui apakah array atau string mengandung karakter tertentu

// pada array
const lists: Array<number> = [10, 15, 20, 25, 30]
const result: boolean = lists.includes(25)

console.log(result)

// pada string
const nama: string = 'Budi Gojo Satoru'
const checkName: boolean = nama.includes('Satoru')

console.log(checkName)