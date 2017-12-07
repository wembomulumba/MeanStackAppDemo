var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));

app.get('/contactlist', function(req,res){
    
    console.log('I received a GET request');
    
               person1 = {            
                    name: 'Tim',
                    email : 'tim2@yahoo.fr',
                    number : '111-433-847'
                
                };              
                person2 = {               
                    name: 'EmiluTim',
                    email : 'Emilytim2@yahoo.fr',
                    number : '131-433-847'
                
                };  
                person3 = {               
                    name: 'reEmiluTim',
                    email : 'erEmilytim2@yahoo.fr',
                    number : '431-433-847'              
                };
    
    var contactlist = [person1, person2, person3];
    res.json(contactlist);
});

app.listen(5454);
console.log('Serve is running on localhost port 3000');