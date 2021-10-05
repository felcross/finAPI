const express = require('express')
const {v4} = require('uuid')

const app = express()

app.use(express.json())

const customers = []

app.post('/account',(req,res)=>{
const {cpf,name} = req.body;
const id = v4

const validCpf = customers.some((customer)=> customer.cpf === cpf)
if(validCpf){
    return res.status(401).json({error:'já existe'})
}

customers.push({
    cpf,
    name,
    id,
    statement:[]
})

return res.status(201).send()

});




app.listen(3333,()=>{
    console.log('Rodando porta 3333')
})