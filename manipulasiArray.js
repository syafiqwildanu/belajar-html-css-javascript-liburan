    // 4.splice
// splice(indexAwal,mauDihapusBerapa,elemenBaru1,elemenBaru2,...)

// var arr = ['syafiq','alep perompak','dika',];

// arr.splice(2,0,'zaki dutt','rohim');
 

// arr.splice(1,2,'rohim','husen');
// console.log(arr.join(' - '));

// 5. slice mengiris sebuah array menjadi array yg baru 
// slice(awal,akhir)
// var arr = ['syafiq','alip','rohim','dika','regen'];
// var arr2 = arr.slice(1,3);

// console.log(arr.join('-'));
// console.log(arr2.join('-'));

// 6.foreach
// function(element, index, array) {}
// var angka = [1,2,3,4,5,6,7,8];
// var nama = ['syafiq','farel','zaki'];
// for (var i = 0 ; i < angka.length; i++) {
// console.log(angka[i]);
// }

// angka.forEach(function(e) {
//     console.log(e);
// })

// nama.forEach(function(e,i) {
//     console.log('mahasiswa ke-' + (i+1) + ' adalah ' + e)
// })

// 7.map
//  sama seperti foreach karena mengembalikan array sedangkan foreach enggak
// var angka = [1,2,3,5,6,3,8];
// var angka2 = angka.map(function(e) {
//     return e * 2 ;   
// });

// console.log(angka2.join (' - '))

// 8. Sort
// dipakai untuk mengurutkan nilai yg ad di array

// contoh 1
// var angka = [1,2,3,5,6,9,8];
// angka.sort();
// console.log(angka.join(' - '))

//contoh 2 (yang contoh ini dikasih 10 sama 20 namun tidak bisa terurut jika hanya dikasih methode angka.sort seperti ini saja.perlu dikasih parameter)
// var angka = [1,10,2,20,3,5,6,9,8];
// angka.sort(function(a,b){
//     return a-b
// })

//selanjutnya ada methode filter & find gunanya untuk mencari elemen pada array , klo find mengembalikan SATU NILAI ,sedangkan filter mengembalikan BANYAK NILAI 

// kalo di filter itu bisa menampilkan array/lebih dari satu nilai, sedangkan kalo di find dia hanya bisa kembalikan satu nilai karena cuman bisa hasilin satu nilai dia gabisa pakai join karena join cuman bisa dipakai oleh array 

//9.filter 
// var angka = [1,2,10,5,20,3,6,8,4];
// var angka2 = angka.filter(function (x) {
//     return x > 5 ;
// }
// )
// console.log (angka2.join(' - '));

//10. find

// var angka = [1,2,10,5,20,3,6,8,4];
// var angka2 = angka.find(function (x) {
//     return x > 5 ;
// }
// )
// console.log (angka2);
