var penumpang = ['syafiq','zaki','hifzil'];
//function tambah
var tambahPenumpang =  function (namaPenumpang,penumpang) {
    //jika angkotnya kosong
    if (penumpang.length === 0) {
        //tambah penumpang di awal array
       penumpang.push(namaPenumpang);
       // kembalikan isi array 
       return penumpang; 
    } else {
        //telusuri seluruh kursi dari awal
        for (i = 0 ; i < penumpang.length ; i++ ) {
            //jika ada kursi kosong
            if (penumpang[i] == undefined) {
                // tambah penumpang di kursi tersebut
                penumpang[i] = namaPenumpang;
                //kembalikan isi array & keluar funtion 
                return penumpang ;
            }
         // jika sudah ada nama yang sama
         else if (penumpang[i] == namaPenumpang) {
            // tampilkan pesan kesalahannya
            alert(namaPenumpang + ' sudah ada di dalam angkot')
            // kembalikan isi array & keluar dari function
            return penumpang;
            }
        //jika seluruh kursi terisi
        else if (i == penumpang.length - 1) {
            //tambah penumpang di akhir array
            penumpang.push(namaPenumpang);
            //kembalikan isi array & keluar dari function 
            return penumpang ;
            }   
        }
    }
}
//function tambah

//function hapus
 var hapusPenumpang = function (namaPenumpang,penumpang) {
    //jika angkot kosong
    if (penumpang.length === 0) {
        //tampilkan pesan bahwa angkot kosong, dan tidak mungkin ada penumpang turun
        console.log ('maaf angkot kosong jadi gak ada yg bisa turun wok ');

        //kembalikan isi array dan keluar dari function 
    }
    else {
        //telusuri seluruh kursi dari awal 
        for (i = 0 ; i < penumpang.length ; i++) {
            //jika nama penumpang sesuai ,hapus penumpang dengan mengubah namanya dan ubah menjadi undefined 
            if (namaPenumpang ==  penumpang[i]) {
                penumpang[i] = undefined;
            //kembalikan isi array & keluar dari function 
                return penumpang; 
            }
        }
        //KELUAR LOOP
            //jika tidak ada nama yang sesuai ,tampilkan pesan kesalahan 
            console.log(namaPenumpang + ' nya gak ada di angkot wok, coba cek di kopdes');
            //kembalikan isi array & keluar dari function
            return penumpang;
    }
}

 var tampilPenumpang = function () {
    console.log(penumpang);
 }



