$(document).ready(function(){

$('body *').each(function(){
		var Top = Math.floor(Math.random()* 500) ;
		var Left = Math.floor(Math.random()*500);
		console.log(Top);
		console.log(Left);
	
		// $(this).css(
		// {
		// 	"position":"absolute",
		// 	"top": "Top",
		// 	"left": "Left"
		// })
		// console.log($(this));
});
})