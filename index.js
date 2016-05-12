var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
var logger = function(req, res, next){
  console.log(new Date());
  next();
}
var createLogger = function(prefix){
  return function(req, res, next){
    console.log((prefix || '') + new Date());
    next();
  }
};
app.use(createLogger('ciao: '));
var checkCredentials = function(req, res, next){
  if(req.headers.authorization !== '1234'){
    res.status(401);
    res.end();
  }else {
    next();
  }
}
app.use(checkCredentials);
var moduloToDo = require('./ToDoList');

var todos = moduloToDo();

app.get('/todos', function(req, res){
  res.send(todos.listaToDo());
}) ;
app.post('/todos', function(req, res){
  if(!req.body.testo){
    res.status(400);
    res.send('testo obbligatorio');
  } else{
    todos.aggiungiToDo(req.body.testo);
    res.send(todos.listaToDo());
  }
})
app.patch('/todos/:id', function(req, res){
  var id = parseInt(req.params.id, 10);
  if(isNaN(id)){
    res.status(400);
    res.send('solo numerico');
  }else if(todos.listaToDo()[id]){
    todos.mettiSpunta(id)
    res.send(todos.listaToDo());
  }else{
    res.status(404);
    res.send('oggetto non trovato');
  }
})
app.delete('/todos/:id', function(req, res){
  var id = parseInt(req.params.id, 10);
  if(isNaN(id)){
    res.status(400);
    res.send('solo numerico');
  }else if(todos.listaToDo()[id]){
    todos.eliminaToDo(id)
    res.send(todos.listaToDo());
  }else{
    res.status(404);
    res.send('oggetto non trovato');
  }
})
app.listen(3000, function(){
  console.log('server partito');
})
