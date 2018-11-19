$(document).ready(function(){
	var date = new Date();
	var currentDate = date.getDate();
	var currentMonth = date.getMonth();
	var currentYear = date.getYear();

	var display = $("#countdown");

	console.log(currentDate + ", " + currentMonth + ", " + currentYear);

	if(currentDate == 31 && currentMonth == 9){	//It is halloween!
		display.innerHTML = "It is halloween!";
	}else{
		display.innerHTML = "IT is not halloween";
		//Is it before Halloween of this year?

			//Get halloween of this year date

		//If no, get halloween of next year
	}
});