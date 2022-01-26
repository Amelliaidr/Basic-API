//load library express
let express = require("express")

// inisiasi object baru dari express
let app = express()

//endpoint pertama --> Hitung Kubus
//setting agar dapat membaca data request dg format json
app.use(express.json())
//app.use digunakan untuk komentar diatas

app.get("/convert/celcius/:c", (request, response) => {
    // c = derajat celcius

    let c = request.params.c

    let reamur = (4 * c /5)
    let fahrenheit = (9 * c /5) + 32
    let kelvin = c + 273

    return response.json({
        luas: luas,
        volume: volume
    })
})

app.listen(8000, () => {
    console.log('Server run on port 8000');
})