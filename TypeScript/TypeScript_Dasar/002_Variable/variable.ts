// variabel yang mengambil referensi tipe data dari isi datanya
// jika tidak ada inisialisasi pada variable typescript otomatis membuatkan inisialisasinya

var namaDepan = "Karina";
let namaTengah = "Elfira";
const namaAkhir = "Putri";

console.log(`Hello nama saya ${namaDepan} ${namaTengah} ${namaAkhir}`)





console.log("")




// variable yang di inisialisasikan tipe data di awal
let namaLengkap: string = "Karina Elfira Putri";
let umur: number = 19;
let married: boolean = false;
let hobby: Array<string> = ["Bernyayi", "Bermain Game"];

console.log(`Perkenalkan saya ${namaLengkap}, umur saya ${umur} saya ${married ? 'sudah menikah' : 'belum menikah'}, saya hobi sekali ${hobby[0]} dan ${hobby[1]}`);




console.log("")




// variable yang dapat menampung tipe data apa saja
let biodata: any = "Karina Elfira";
biodata = 18;
biodata = false;


// bisa juga pada array atau object
let anythings: Array<any> = ["ABC", 123, 1.23, false, [], {}];
let anythings2: any = {
    nama: "Acumalaka",
    umur: 19,
    married: false
}
