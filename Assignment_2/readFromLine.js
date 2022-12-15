const readline = require("readline");

const read = readline.createInterface({
    input : process.stdin,
    output : process.stdout

});

read.question("Please Enter your Name: ", (ans)=>{
    console.log("Hello ", ans);
    read.close();
});