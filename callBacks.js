var sum = new Function("n1","n2", "return n1+n2;");
var diff = new Function("n1","n2", "return n1-n2;");

perform = function( num1, num2, callback){
return callback(num1,num2);
}

document.writeln(perform(3,2,sum));
alert(perform(3,2,diff));
