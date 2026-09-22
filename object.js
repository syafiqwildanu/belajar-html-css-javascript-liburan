//membuat objek
var mhs = {
    // ini disebut property
    nama : "syafiq",
    umur : 31,
    ips : [3.90, 3.80, 4.00],
    alamat : {
        jalan : "jalan raya mtq",
        kota : "jambi",
        provinsi : "jambi juga"
    }
    // sampai sini
};
// methode itu function yang berada di dalam object maka itu disebut dengan 

//object declaration

var mhs1 = {
    nama: "syafiq",
    nim: "09031282429123",
    email: "syafiq@gmail.com",
    jurusan: "sistem informasi"
}

var mhs2 = {
    nama: "Patumaldhan",
    nim: "09031282429101",
    email: "patu@gmail.com",
    jurusan: "manajemen"
}

// Function declaration 

function buatObjectMahasiswa (nama,nim,email,jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nim = nim;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

var mhs3 = buatObjectMahasiswa("syawal","09031282429103","syawal@gmail.com","sistem informasi");

// Constructor 
function Mahasiswa (nama, nrp, email, jurusan) {
    //yang var sama return otomatis dibuatin klo buat object pake metode konstruktor,jadi dak perlu ditulis lagi 
    // var this = {}
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan   
    //return this:
}

var mhs4 = new Mahasiswa(' Syafiq', '09031282429121', 'syafiq@gmail.com' , 'sistem informasi')

// object literal 
var obj = {};
obj.halo = function () {
    console.log('halo')
}

obj.halo();