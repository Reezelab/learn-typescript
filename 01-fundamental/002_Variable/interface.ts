interface Persons {
    nama: string,
    umur: number,
    married: boolean,
    hobby?: Array<string> // opsional
};

let budi: Persons = {
    nama: "Budi Budiman",
    umur: 19,
    married: false,
};

let karina: Persons = {
    nama: "Karina Elfira",
    umur: 25,
    married: true,
    hobby: ["Bernyanyi", "Menari"]
};


// indexable
interface indexableTest {
    [key: string]: any
};

let personal: indexableTest = {
    nama: "Budi",
    umur: 19
};