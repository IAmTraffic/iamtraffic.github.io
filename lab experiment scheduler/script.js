var daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];$(document).ready(function(){

$("#calculateButton").click(function(){
		var dayOfWeekNum = daysOfWeek.findIndex(findDayOfWeekIndex);
		console.log(dayOfWeekNum);
	});
});

function findDayOfWeekIndex(day){
	return day.equals($("#dayInput").val());
}