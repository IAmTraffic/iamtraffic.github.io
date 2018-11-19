$(document).ready(function(){
	var date = new Date();
	var currentDate = date.getDate();
	var currentMonth = date.getMonth();
	var currentYear = date.getYear();

	var display = $("#countdown");

	if(currentDate == 31 && currentMonth == 9){	//It is halloween!
		display.text("It is halloween!");
	}else{
		display.text("IT is not halloween");
		console.log(display);
		//Is it before Halloween of this year?

			//Get halloween of this year date

		//If no, get halloween of next year
	}
});