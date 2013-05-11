// JavaScript Document

	
  // index page
  $(".instructions").click(function(){
    $("#instructions").slideToggle();
  });
  
  $(".game_objects").click(function(){
    $("#game_objects").slideToggle();
  });
  
  
  // score page
  $('#animateTest').addClass('animated lightSpeedIn');
  
   // links
  $('.play').on('click', navigate);
	
	function navigate(e) {
		e.preventDefault();
		//var page = $(this).attr('href');
		//alert(page);
		$('#wrapper').load('pages/level1.php');	
	};
  
  
  
  
  
  
 
  
  	
