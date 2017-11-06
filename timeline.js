// JavaScript Document
function switchDate(date) {
	var clicked = "time"+date;
    var dateChosen = document.getElementById(clicked).value;
	//console.log(dateChosen);
	for(var i=1; i<=9; i++){
		var idNum = "time"+(i);
		//console.log(idNum);
		var val = Number(dateChosen)+Number(i-5);
		if (val > 11 && val < 17){
			document.getElementById(idNum).value=val;
			document.getElementById(idNum).style.visibility = "visible";
		}else{
			document.getElementById(idNum).style.visibility = "hidden";
		}
	}
}
