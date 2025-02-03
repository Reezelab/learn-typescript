// find index digunakan untuk mencari index pertama yang memenuhi kondisi callback function
// jika tidak ada kondisi yang terpenuhi maka akan mengembalikan index -1

const lists: Array<number> = [10, 15, 20, 25, 30]
const findIndex: number = lists.findIndex((num) => {
    return num > 15
})

console.log(findIndex)