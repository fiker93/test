var i;
var isNumeroPrimo = function(n){
  var i;
  for(i = 2; i < n; i++){
   if(n % i === 0){
    return false;
   }
  }
  return true;
};
var cazzo = false;
for (i = 0; !cazzo; i++){
  if (i <= 100. && isNumeroPrimo(i)) {
    console.log(i);}
    else {
      bool = true;
    }
}
