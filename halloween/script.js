$(document).ready(function(){
	var date = new Date();
	var currentDate = date.getDate();
	var currentMonth = date.getMonth();
	var currentYear = date.getYear() + 1900;

	var nextHalloween;

	var display = $("#countdown");

	if(currentDate == 31 && currentMonth == 9){	//It is halloween!
		display.text("It is halloween!");
	}else{
		if(currentMonth < 9 || (currentMonth == 9 && currentDate < 31)){	//It isn't halloween yet
			display.text("Oct 31, " + currentYear);
		}else{
			display.text("Oct 31, " + (currentYear + 1901));
		}
	}
});