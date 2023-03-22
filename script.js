function hitung() {
    // Mengambil nilai input harga, jumlah, dan diskon
    var harga = parseFloat(document.getElementById("harga").value);
    var jumlah = parseInt(document.getElementById("jumlah").value);
    var diskon = parseFloat(document.getElementById("diskon").value);

    // Menghitung total harga dengan diskon
    var total = harga * jumlah * (1 - diskon/100);
    total = isNaN(total) ? 0 : total;

    // Menampilkan hasil pada elemen dengan id "total"
    document.getElementById("hasil").innerHTML = "Harga: " + total.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' }).replace(/\s/g, '');
}