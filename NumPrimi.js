var i;
var isNumeroPrimo = function(n){
  var i;
  if(n <= 0){
    return false;
  }
  for(i = 2; i < n; i++){
   if(n % i === 0){
    return false;
   }
  }
  return true;
};
var numeriPrimiIntervallo = function (inizio,fine){
  var toReturn = [];
  for(i=inizio; i <= fine; i++){
    if(isNumeroPrimo(i)){
      toReturn[toReturn.length]=i;
    }
  }
  return toReturn;
}
console.log(numeriPrimiIntervallo(1000,5000));
/*var cazzo = false;
for (i = 0; !cazzo; i++){
  if (i <= 100 && isNumeroPrimo(i)) {
    console.log(i);}
    else {
      cazzo a= true;
    }
}
var trovati = 0;
var i=0;
do {
  if(isNumeroPrimo(i)){
    console.log(i);
    trovati++;
  }
  i++;
}while(trovati <= 100 )
*/
