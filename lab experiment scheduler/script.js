var daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];$(document).ready(function(){

$("#calculateButton").click(function(){
		var dayOfWeekNum = daysOfWeek.findIndex()
		console.log(dayOfWeekNum);
	});
});

function(String day){
	return day.equals($("#dayInput").val());
}