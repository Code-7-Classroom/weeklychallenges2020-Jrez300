const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000

const userdata = require('./hard.json')

// app.get('/', function (req, res){
//     return res.sendFile(__dirname + '/public/hard.json');
// });
app.use(express.static('public'))

app.get('/employees', (req, res) =>{
    

    if (!userdata){
         return res.status(404).send("Users were not found")
    }

    res.send(userdata)
})

app.get('/employees/:employeeID', (req, res) => {

    
    const idData = userdata.employees.find(function(employees){
        return parseInt(req.params.employeeID) === employees.employeeID
    })
    if (!idData){
        return res.status(404).send("User ID was not found")
    }

    res.send(idData)
})



app.listen(PORT, () =>{
    console.log(`Server is running on ${PORT}`)
})