//load library express
let express = require("express")

// inisiasi object baru dari express
let app = express()

//endpoint pertama --> Hitung Kubus
//setting agar dapat membaca data request dg format json
app.use(express.json())
//app.use digunakan untuk komentar diatas

//endpoint pertama --> decimal to --> hexa, biner, dan octal
app.post("/decimal", (request, response) => {
    let angka = request.body.angka

    let hexa = angka.toString(16);
    let biner = angka.toString(2);
    let octal = angka.toString(8);

    return response.json({
        decimal: angka,
        result : {
            hexa: hexa,
            biner: biner,
            octal: octal
        }
    })
})

//endpoint kedua --> biner to --> decimal, hexadec, dan octal 
app.get("/biner/:angka", (request, response) => {
    let angka = request.params.angka

    let decimal = parseInt(angka, 2);
    let hexa = parseInt(angka, 2).toString(16);
    let octal = parseInt(angka, 2).toString(8);

    return response.json({
        binary: angka,
        result : {
            decimal: decimal,
            hexa: hexa,
            octal: octal
        }
    })
})

//endpoint ketiga --> octal to --> decimal, hexadec, dan biner 
app.get("/octal/:angka", (request, response) => {
    let angka = request.params.angka

    let decimal = parseInt(angka, 8);
    let hexa = decimal.toString(16);
    let biner = decimal.toString(2);

    return response.json({
        octal: angka,
        result : {
            decimal: decimal,
            hexa: hexa,
            biner: biner
        }
    })
})

//endpoint keempat --> hexadecimal to --> decimal, binary, dan biner 
app.get("/hexa/:angka", (request, response) => {
    let angka = request.params.angka

    let decimal = parseInt(angka, 8);
    let biner = decimal.toString(16);
    let octal = decimal.toString(2);

    return response.json({
        octal: angka,
        result : {
            decimal: decimal,
            hexa: octal,
            binary: biner
        }
    })
})

app.listen(8000, () => {
    console.log('Server run on port 8000');
})