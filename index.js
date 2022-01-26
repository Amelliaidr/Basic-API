//load library express
let express = require("express")

// inisiasi object baru dari express
let app = express()

//membuat endpoint pertama
app.get("/test", (request, response) => {
    let kata = 'Love Yourself'
    return response.json({
        message: kata,
        nama: "Amelia",
        number: 03
    })
})

//endpoint kedua : hitung BMI
//request data : tinggi, berat
//response data : nilai BMI dan status

//setting agar dapat membaca data request dg format json
app.use(express.json())
//app.use digunakan untuk komentar diatas

app.post("/bmi", (request, response) => {
    //tampung tinggi dan berat
    let tinggi = request.body.tinggi
    let berat = request.body.berat

    let bmi = berat / (tinggi*tinggi)

    let status = null
    if (bmi < 18.5) {
        status = 'Gizi buruk'
    }else if(bmi >= 18.5 && bmi < 25){
        status = 'Ideal'
    }else if(bmi >= 25 && bmi < 50){
        status = 'Kelebihan berat badan'
    }else if(bmi >= 50){
        status = 'Obesitas'
    }

    return response.json({
        nilai: bmi,
        status: status
    })
})

//endpoint ketiga --> requet with GET method
app.get("/profile/:nama/:usia",(request,response) => {
    //tampung data yang dikirimkan
    let nama = request.params.nama
    let usia = request.params.usia
    
    let status = null

    if(usia < 10){
        status = 'Bocil'
    }else if(usia >=10 && usia <=20){
        status = 'Remaja'
    }else if(usia > 20 && usia < 50){
        status = 'Dewasa'
    }else if(usia >= 50){
        status = 'Tua'
    }

    return response.json({
        message: `Saya ${nama} adalah ${status}`
    })
})

app.listen(8000, () => {
    console.log('Server run on port 8000');
})