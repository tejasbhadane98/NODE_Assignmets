const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.set('views', '../views');    // Here Template Engine is used and path is imp to set
app.set('view engine', 'ejs');

app.use(bodyParser.json())
// your code goes here

// app.get("/", (req,res)=>{           // By Using get method
//     res.send("Hello World !!!!");     
// })

app.get("/", (req, res) => {
    res.render("index.ejs");
})

// Add Method
app.post("/add", (req, res) => {
    console.log(req.body);
    // res.send("Are you ok??");
    if ((isNaN(req.body.num1)) || (isNaN(req.body.num2))) {
        return res.json({
            "status": "Failure",
            "message": `Invalid Data Types`
        })
    }
    else {
        let sum = Number(req.body.num1) + Number(req.body.num2);
        // res.setHeader({"Content-type":"application/json"});
        if (sum < Number( -1000000) || (Number(req.body.num1) < Number(-1000000) && Number(req.body.num2) < Number(-1000000))) {
            res.json({
                "status": "Success",
                "message": `The sum of given two numbers is ${sum} and it is Underflow`

            })
        }
        else if( (sum > Number(1000000)) && (Number(req.body.num1) > Number(1000000) && Number(req.body.num2) > Number(1000000)))
        {
            res.json({
                "status": "Success",
                "message": `The sum of given two numbers is ${sum} and it is Overflow`

            })
        }
        else
        {
            res.json({
                "status": "Success",
                "message": `The sum of given two numbers is ${sum} and it is Overflow`

            })
        }

        }

    }
)


// Subtraction
app.post("/sub", (req, res) => {
    console.log(req.body);
    // res.send("Are you ok??");
    if ((isNaN(req.body.num1)) || (isNaN(req.body.num2))) {
        return res.json({
            "status": "Failure",
            "message": `Invalid Data Types`
        })
    }
    let minus = Number(req.body.num1) - Number(req.body.num2);
    // res.setHeader({"Content-type":"application/json"});
    res.json({
        "status": "Success",
        "message": `The Subtraction of given two numbers is ${minus}`

    })
})


// Multiplication
app.post("/multiply", (req, res) => {
    console.log(req.body);
    // res.send("Are you ok??");
    if ((isNaN(req.body.num1)) || (isNaN(req.body.num2))) {
        return res.json({
            "status": "Failure",
            "message": `Invalid Data Types`
        })
    }
    let multiply = Number(req.body.num1) * Number(req.body.num2);
    // res.setHeader({"Content-type":"application/json"});
    res.json({
        "status": "Success",
        "message": `The Multiplicatin of given two numbers is ${multiply}`

    })
})


// Division
app.post("/divide", (req, res) => {
    console.log(req.body);
    // res.send("Are you ok??");
    if ((isNaN(req.body.num1)) || (isNaN(req.body.num2))) {
        return res.json({
            "status": "Failure",
            "message": `Invalid Data Types`
        })
    }
    else {
        if (Number(req.body.num2) === 0) {
            return res.json({
                "status": "Error",
                "messge": "Cannot divide by zero"
            })
        }
    }
    let divide = Number(req.body.num1) / Number(req.body.num2);
    // res.setHeader({"Content-type":"application/json"});
    res.json({
        "status": "Success",
        "message": `The Division of given two numbers is ${divide}`

    })
})


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;