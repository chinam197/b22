Number.prototype.getCurrency = function(curency){
   if (isNaN(this)){
    return "Invalid input";
   }
   return this.toLocaleString() + " " + curency;
};

String.prototype.getCurrency = function(curency){
var numericValue = parseInt(this);
if(isNaN(numericValue)){
    return "Invalid input";
}
return numericValue.getCurrency(curency);
}

var money=100000;
var mone = "100000";
console.log(mone.getCurrency("s"));
console.log(money.getCurrency("vnd"));