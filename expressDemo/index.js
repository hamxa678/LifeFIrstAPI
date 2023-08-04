const express = require('express');

const app = express();


const courses = [
    {
        id: 1,
        name: "OOP",
        chapter:43,
        publisher: "Hamza Khan",
        price: 300
    },
    {
        id: 2,
        name: "DSA",
        chapter:43,
        publisher: "Hamza Khan",
        price: 300
    },
    {
        id: 3,
        name: "Calculas",
        chapter:43,
        publisher: "Hamza Khan",
        price: 300
    },
    {
        id: 4,
        name: "LA",
        chapter:43,
        publisher: "Hamza Khan",
        price: 300
    }

]

app.get('/', (req, res)=>{
    res.send('Hello World');
})

app.get('/api/courses',(req, res)=>{

    res.send(courses)
})

app.get('/api/:month/:year',(req, res)=>{
    if(req.params.month <=12 && req.params.month>=1){
        res.send({
            error:"false",
            message: "success",
            result: req.params 
        })
    }else{
        res.send({
            error:"true",
            message: "invalid month",
        })
    }

    
})

app.get('/api/courses/:id',(req, res)=>{

    res.send(courses[req.params.id])
})

const port = 3000;

app.listen(port, ()=> console.log(`Listening on port ${port} .... `))