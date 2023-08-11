const express = require('express');
const app = express();
app.use(express.json())
const courses = [
    {
        id: 1,
        name: "OOP",
        chapter:31,
        publisher: "Hamza Khan",
        price: 300,
        publicationData: new Date("2022-03-25")
    },
    {
        id: 2,
        name: "DSA",
        chapter:22,
        publisher: "Hamza",
        price: 360,
        publicationData: new Date("2022-03-25")
    },
    {
        id: 3,
        name: "Calculas",
        chapter:43,
        publisher: "Hamza Miraj",
        price: 320,
        publicationData: new Date("2022-03-25")
    },
    {
        id: 4,
        name: "LA",
        chapter:23,
        publisher: "Hamza Khan Pathan",
        price: 500,
        publicationData: new Date("2022-03-25")
    }

]

app.get('/', (req, res)=>{
    res.send('Hello World');
})

app.get('/api/courses',(req, res)=>{//
    res.send({
        error: "false",
        message: "success",
        data: courses
    })
})

// app.get('/api/:month/:year',(req, res)=>{
//     if(req.params.month <=12 && req.params.month>=1){
//         res.send({
//             error:"false",
//             message: "success",
//             result: req.params
//         })
//     }else{
//         res.send({
//             error:"true",
//             message: "invalid month",
//         })
//     }
// })

app.get('/api/searchcourses/:name',(req, res)=>{

    console.log(req.query);
    var newCourses = [];
    for(var i=0; i<courses.length;i++){
        if(req.params.name == courses[i].name){
            newCourses.push(courses[i]);
        }
    }
    if(newCourses.length == 0){
        res.send({
            error: "false",
            message: "No data found",
        })
    }else{
        res.send({
            error: "false",
            message: "success",
            data: newCourses
        })
    }
})

app.post('/api/addCourse',(req,res)=>{
    console.log(req.body);
    const course = {
        id: courses.length+1,
        name: req.body.name,
        chapter:req.body.chapter,
        publisher: req.body.publisher,
        price: req.body.price,
        publicationData: req.body.publicationData
    };
    courses.push(course);
    res.send(course);
})

const port = 3000;

app.listen(port, ()=> console.log(`Listening on port ${port} .... `))