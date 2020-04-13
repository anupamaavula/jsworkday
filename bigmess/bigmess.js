// This is the code tried by me
$(document).ready(function(){

$('body *').each(function(){
		var Top = Math.floor(Math.random()* 500) +'px';
		var Left = Math.floor(Math.random()*500)+'px';;
		console.log(Top);
		console.log(Left);
	
		$(this).css(
		{
			"position":"absolute",
			"top": Top,
			"left": Left
		})
		console.log($(this));
});
})


// This is the code by explained by Chris in class

// $(document).ready(function () {
//       let randomValue = function () {
//         return Math.random() * 500
//       }
//       let body = $("body *")
//       body.each(function () {
//         $(this).css({
//           "position": "absolute",
//           "top": randomValue(),
//           "left": randomValue()
//         })
//       })
//     });
