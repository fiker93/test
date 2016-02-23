var array = [1,57,44,101,379];
var i;
var max = 0;
var isNumeroPari = function(n){
  return n % 2 === 0;
};
var isNumeroPrimo = function(n){
  var i;
  for(i = 2; i < n; i++){
   if(n % i === 0){
    return false;
   }
  }
  return true;
};

for(i = 0; i < array.length; i++) {
  if(isNumeroPrimo(array[i])){
    console.log(array[i]);
  }
}
/*for(i = 0; i < array.length; i++){
  if(array[i] > max && isNumeroPari(array[i]) ){
    max = array[i];
  }
}

console.log(max);
*/
