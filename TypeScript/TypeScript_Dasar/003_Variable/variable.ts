// sama seperti di javascript, ada tiga jenis variable di typescript yaitu var, let, const
// di typescript kita direkomendasikan mendefinisikan variable dengan tipe data yang akan di tampungnya (static type)
// namun kita tetap bisa menggnakan variable tanpa mendefinisikan tipe datanya dan nantinya otomatis definisi variablenya mengikuti nilai yang ditampungnya
// atau bisa juga dengan mendefinisikan any yang artinya dapat menampung tipe data apa saja (dynamic type)


// variable nama akan di set otomatis menjadi string dan jika kita menggunakaan var nama untuk menampung tipe data lain misal number, maka akan terjadi error
var nama = "John Doe";
console.log(nama);


// menggunakan variable dengan definisi tipe data
let umur: number = 30;
console.log(umur);

const hobby: string = "Bernyanyi";


// menggunakan any (dapat menampung tipe data apa saja)
let person: any = {
    nama: "Budi Doremi",
    umur: 18,
    alamat: "Jakarta, Indonesia"
};

console.log(person.nama);


// ubah variable person ke tipe data lain
person = ["Dudung", 20, "Surabaya, Indonesia"];
console.log(person[0])




// --- untuk tipe data array ---

// ini artinya harus array berisi number
let angka1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// ini artinya harus array berisi string
let angka2: string[] = ['1', '2', '3', '4', '5'];

// atau bisa seperti ini 
let angka3: Array<boolean> = [true, false];

// jika ingin array dapat menampung apa saja gunakan any
let angka4: any[] = [1, '2', false];
let angka5: Array<any> = [1, '2', true];




