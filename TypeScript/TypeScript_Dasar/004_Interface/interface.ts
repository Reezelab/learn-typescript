// interface digunakan untuk membuat struktur tipe data pada object (blueprint) dan kemudian struktur tersebut harus di implementasikan kedalam object
// namun, kita juga bisa membuat optional properti dengan menambahkan ? pada akhir nama property

interface PenggunaInterface{
    nama: string,
    umur: number
    // optional property  (tidak wajib)
    hobi?: string,
    alamat?: string
};

let individuA: PenggunaInterface = {
    nama: "Gojo Satoru",
    umur: 30
};

let individuB: PenggunaInterface = {
    nama: "Shoko",
    umur: 20,
    hobi: "Nyembuhin orang"
}




// indexable interface untuk object
interface StringIndexable {
    [key: string]: any;
};

let personal: StringIndexable = {
    nama: "Kenjaku",
    umur: "1000"
};

// indexable interface untuk array
interface NumberIndexable {
    [index: number]: string;
}

let animals = ["Burung", "Buaya", "Singa", "Kucing"];
