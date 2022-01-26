//load library express
let express = require("express")

// inisiasi object baru dari express
let app = express()

//endpoint pertama --> Hitung Kubus
//setting agar dapat membaca data request dg format json
app.use(express.json())
//app.use digunakan untuk komentar diatas

app.post("/kubus", (request, response) => {
    //tampung tinggi dan berat
    let sisi = request.body.sisi

    let luas = 6 * (sisi*sisi)
    let volume = sisi*sisi*sisi

    return response.json({
        luas: luas,
        volume: volume
    })
})

//endpoint kedua --> Hitung Balok
app.get("/balok/:panjang/:lebar/:tinggi", (request, response) => {
    let panjang = request.params.panjang
    let lebar = request.params.lebar
    let tinggi = request.params.tinggi

    let luas = 2 * (panjang * lebar + panjang * tinggi + lebar * tinggi)
    let volume = panjang * lebar * tinggi

    return response.json({
        luas: luas,
        volume: volume
    })
})

//endpoint ketiga -->hitung Limas Segitiga Sama Sisi
app.get("/limas/:a/:tl/:ts", (request, response) => {
    // tl = tinggi limas
    //ts = tinggi segitiga
    //a = alas
    let a = request.params.a
    let tl = request.params.tl
    let ts = request.params.ts

    let la = 1* (a * ts) /2
    //la --> Luas Alas segitiga
    let luas = la + la + la + la
    let volume = 1 * la * tl / 3

    return response.json({
        luas: luas,
        volume: volume
    })
})

// endpoint keempat --> Hitung tabung
app.get("/tabung/:r/:t", (request, response) => {
    // t = tinggi tabung
    // r = jari-jari
    let r = request.params.r
    let t = request.params.t

    let phi = 3.14
    let luas = 2 * phi * r * (r + t)
    let volume = phi * r * r * t

    return response.json({
        luas: luas,
        volume: volume
    })
})

app.listen(4000, () => {
    console.log('Server run on port 4000');
})