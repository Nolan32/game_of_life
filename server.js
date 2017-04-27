var express=require('express');
var app=express();
app.listen(3300,function(){
	console.log('run on port 3300')
});

app.use(express.static('public'));


app.get('/',function(req,res){
	res.send()
})

var vegetal = {};
var herbivore = {};
var carnivore = {};
var cailloux = {};