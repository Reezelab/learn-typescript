type TIPE_DATA = string | number;

let random1: TIPE_DATA = "Ini adalah string";
let random2: TIPE_DATA = 19;


// penggunakan untuk object
type USER = {
    nama: string,
    role: Array<string>
    isActive: boolean
};

let bioKarina: USER = {
    nama: "Karina Elfira",
    role: ["Super Admin"],
    isActive: true
}