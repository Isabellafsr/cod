const express = require('express')
const fs = require('fs')
const app = express()

app.use(express.json())

app.post('/criando', (req, res) => {
    const dados = JSON.stringify(req.body)
    fs.writeFile(req.body.email+'.json', dados, err =>{
        if (err) {
            console.log(err);
        }
    })

    res.send({message: "Os dados foram salvos!"})

})
app.get('/mostrar/:name', (req, res)=>{
    fs.readFile(req.params.name +'.json', (err,data)=>{
        const dados = JSON.parse(data)
    if (err){
        console.log(err);
    } 
    res.send({message: "seus dados estão ok", dados})   
    })
})
app.delete('/apagar/:email', (req, res) =>{
    fs.unlinkSync(req.params.email+'.json')
    res.send({message: "dados deletados com sucesso, usuario!"})
})
app.put('/update/:email', (req, res)=>{
    fs.rwriteFileSync(req.body.email +'.json', dados, {flag:'w'})
    res.send({message: "OK, seus dados foram salvos!!", dados})  
})
app.listen(8080, () => console.log('server em rota'))