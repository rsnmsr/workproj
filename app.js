const express = require('express')
var bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({extended:true}));

const path = require('path');

 app.use(express.static('public'));



app.get('/',function(req,res){

 res.sendFile(path.join(__dirname+'/index.html'));


});

app.post('/',function(req,res){
    const {name,email,phnNo}=req.body;
console.log(name,email,phnNo)
res.send('Forms received')
})


app.listen(3000,function(){
    console.log('Listening on port 3000')
})
