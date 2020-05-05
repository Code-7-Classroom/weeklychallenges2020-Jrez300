
// Get Endpoints = localhost:3000/employees
// Get ID Endpoint = localhost:3000/employees/:employeeID
// Post Endpoint = localhost:3000/employees
// Put Endpoint = localhost:3000/employees/:employeeID
// Delete Endpoint = localhost:3000/employees/:employeeID

const express = require('express');
const app = express();
const Joi = require('joi');
const PORT = process.env.PORT || 3000;
const userdata = require("./public/hard.json");
const employees = userdata.employees;
app.use(express.json());
// app.get('/', function (req, res){
//     return res.sendFile(__dirname + '/public/hard.json');
// });
// app.use(express.static("public"));

app.get('/employees', (req, res) =>{
    if (!employees){
         return res.status(404).send("Users were not found")
    }

    res.send(employees)
})

app.get('/employees/:employeeID', (req, res) => {

    const idData = employees.find(function(employees){
        return parseInt(req.params.employeeID) === employees.employeeID
    })
    if (!idData){
        return res.status(404).send("User ID was not found");
    }

    res.send(idData)
});

app.post('/employees', (req, res) => {
    //Validate
const {error} = validateEmployee(req.body);

//return error if invalid
if (error){
    res.status(400).send(error.details[0].message);
    return;
}
    
const newEmployee = {
    id: employees.length + 1,
    firstName: req.body.firstName,
    salary: req.body.salary,
    departmentName: req.body.departmentName
};
employees.push(newEmployee);
res.send(employees);
});

app.put('/employees/:employeeID', (req, res)=>{
//find ID
    const idData = employees.find(function(employees){
        return parseInt(req.params.employeeID) === employees.employeeID
    })
    if (!idData){
        return res.status(404).send("User ID was not found");
    }
//Validate
const {error} = validateEmployee(req.body);

//return error if invalid
if (error){
    res.status(400).send(error.details[0].message);
    return;
}
//update ID
idData.firstName = req.body.firstName;
idData.salary = req.body.salary;
idData.departmentName = req.body.departmentName;
res.send(idData)
});

app.delete('/employees/:employeeID', (req, res) => {
//Look up employee
const idData = employees.find(function(employees){
    return parseInt(req.params.employeeID) === employees.employeeID
})
//return error if not found
if (!idData){
    return res.status(404).send("User ID was not found");
}
//delete
const index = employees.indexOf(idData);
employees.splice(index, 1);
res.send(employees);

});


function validateEmployee(employees){
    const schema = {
        firstName: Joi.string().min(3).required(),
        salary: Joi.number().required(),
        departmentName: Joi.string().min(3).required()
    };
    return  Joi.validate(employees, schema);
    
}


app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`)
})