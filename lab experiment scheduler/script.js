var daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];$(document).ready(function(){

$("#calculateButton").click(function(){
		var dayOfWeekNum = daysOfWeek.indexOf("Wednesday");
		console.log(dayOfWeekNum);
	});
});