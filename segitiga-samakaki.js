let tinggi = 5;
let s = '';


//bagian atas 


//bagian bawah 
for (let i = 1; i <= tinggi; i++) {

    let jumlahSpasi = i - 1;
    let jumlahBintang = (tinggi * 2 - 1) - ((i - 1) * 2);

    for (let j = 1; j <= jumlahSpasi; j++) {
        s += ' ';
    }

    for (let k = 1; k <= jumlahBintang; k++) {
        s += '*';
    }

    s += '\n';
}

console.log(s);