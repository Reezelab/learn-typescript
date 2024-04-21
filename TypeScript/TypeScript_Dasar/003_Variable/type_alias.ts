// kita bisa menggunakan tipe alias untuk memberi ulang tipe data yang sudah ada atau membuat baru berdasarkan tipe data yang sudah ada

type TIPE_DATA = string | number;

let dataPerson: TIPE_DATA = "John Doe";
console.log(dataPerson);

// atau bisa juga seperti ini
let animal: TIPE_DATA | boolean = true;
console.log(animal);


// atau bisa juga dalam bentuk object
type USER = {
    name: string,
    age: number
};

let user = {
    name: "Jane Doe",
    age: 20
};

console.log(user.name);