var _= require("underscore");
/*var listaToDo = function(){
  var toReturn = [];
  var aggiungiToDo = function(testo){
    var toDo = {
      testo: testo,
      fatto: false
    };
    toReturn.push(toDo);
  };
  aggiungiToDo("ciao");
  return toReturn;
};

console.log(listaToDo());
*/
var nuovoModuloToDo = function(){
  var toDos = [];
  var toReturn = {
    listaToDo: function(){
      return toDos;
    },
    aggiungiToDo: function(testo){
      var toDo = {
        testo: testo,
        fatto: false
      };
      toDos.push(toDo);
    },
    mettiSpunta: function(i){
      toDos[i].fatto = true;
    },
    eliminaToDo: function(i){
      toDos.splice(i,1);
    },
    listaToDoFatti: function(){
      return _.where(toDos,{
        fatto: true
      });
    /*  return _.filter(toDos, function(todo){
        return todo.fatto;
      });*/
    }
  };
  return toReturn;
};
var primaListaTodo = nuovoModuloToDo();
primaListaTodo.aggiungiToDo("cipolle");
primaListaTodo.aggiungiToDo("olio");
primaListaTodo.aggiungiToDo("sale");
primaListaTodo.mettiSpunta(1);
primaListaTodo.eliminaToDo(2);
console.log(primaListaTodo.listaToDo());
console.log(primaListaTodo.listaToDoFatti());
