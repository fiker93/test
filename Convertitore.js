var _= require("underscore");
var conversioneUnita= ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
var conversioneDecine= ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
var conversioneCentinaia= ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
var conversioneMigliaia= ["M", "MM", "MMM", "MMMM"];
/*var convertiUnita= function(n){
  if (n <= 0){
    return null;
  }
  return conversioneUnita[n-1];
};*/
var padLeft = function(n){
  var s = n.toString();
  while(s.length < 4){
    s = '0' + s;
  }
  return s;
}
var converti= function(n){
  if (n <= 0 || n >= 5000){
    return null;
  }
  var valori = padLeft(n).split('');
  var migliaia = valori[0];
  var centinaia = valori[1];
  var decine = valori[2];
  var unita = valori[3];
  /*var resto = n;
  var migliaia = Math.floor(n / 1000);
  resto = resto - migliaia * 1000;
  var centinaia= Math.floor(resto / 100);
  resto = resto - centinaia * 100;
  var decine=  Math.floor(resto / 10);
  resto = resto - decine * 10;*/
  return  (conversioneMigliaia[migliaia - 1] || '') + (conversioneCentinaia[centinaia - 1] || '') + (conversioneDecine[decine - 1] || '') + (conversioneUnita[unita - 1] || '');
}
  var i;
    for(i = 0; i <= 4999; i++){
      console.log(i,converti(i));
    }
