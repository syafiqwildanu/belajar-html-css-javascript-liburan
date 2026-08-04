var noAngkot = 1;
var jmlAngkot = 10;
var angkotBeroperasi = 6;

for(noAngkot;noAngkot <= jmlAngkot;noAngkot++) {
    if (noAngkot == 8 || noAngkot ==10 || noAngkot == 5 ) {
        console.log('angkot No.' + noAngkot + ' sedang lembur');
    } else if (noAngkot <= angkotBeroperasi) {
        console.log('angkot No.'+ noAngkot +' beroperasi dengan baik');
    }  else {
        console.log('angkot no' + noAngkot +' sedang tidak beroperasi');
    }
}