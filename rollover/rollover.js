$(document).ready(function() {

            $("#myId").hover(function () {
                  $(this).css('cursor','pointer').attr('title','Over');
               },
				function () {
                  $(this).css('cursor','auto');
               }
            );
				
         });