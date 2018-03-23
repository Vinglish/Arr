


/*function arrFibb(){
	var num = Number(prompt("input number"));
	var arr = [];
	var	a = 0;
	var	b = 1;
	for(var i=1; i<=num; i++){
		var c = a + b;
		a=b;
		b=c;
		arr.push(a);
	}
  alert(arr);
}
arrFibb();*/


/*var matr = [
["r", 4, "ar", true, 8, "bn"],
["q", 7, "ar", {name:'Jon'}, 8, "bn"],
["r", 35, "ar", true, 8, "bn"],
["r", 87, "ar", true, 21, "bn"],
["m", false, "ar", true, 90, "bn"],
["r", {age:25}, "ar", true, 84, "bn"]
]
var arr =[];
for(var i=0; i<matr.length; i++){
	for(var j=0; j<matr[i].length; j++){
		if(typeof(matr[i][j])=="number"){
			arr.push(matr[i][j]);
		}
	}
}
alert(arr);
*/


var matr = [
[1, 5, 7],
[3, 8, 9],
[10, 15, 4]
]

function diagonal(mass){
	var arr = [];
	var pos = 1;
	for(var i=0; i<mass.length; i++){
		arr.push(mass[i][mass.length-pos]);
		pos++;
	}
	alert(arr);
}

diagonal(matr);








