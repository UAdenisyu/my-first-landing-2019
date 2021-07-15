	var mass_pics, button_active, button_usual, tim, d;
	d=document;
	mass_pics_values=["url(pics/slide1_background.png)", "url(pics/slide2_background.png)", "url(pics/slide3_background.png)"];
	mass_buttons_ids=["#control_1", "#control_2", "#control_3"];
	mass_buttons_values=["url(pics/listing_point_empty.png)", "url(pics/listing_point_filled.png)"];
	tim=1000;
 
 
 
	onload = function(){
		start();
	};

	function change_pic(number){
		for(var i = 0; i < mass_buttons_ids.length; i++){
			$(mass_buttons_ids[i]).css("background", mass_buttons_values[0]);
			$(mass_buttons_ids[i]).css("background-repeat", "no-repeat");
		}	
		$(mass_buttons_ids[number]).css("background", mass_buttons_values[1]);
		$(mass_buttons_ids[number]).css("background-repeat", "no-repeat");
		$("#slider_picture").css("background", mass_pics_values[number]);
		$("#slider_picture").css("background-repeat", "no-repeat");
		$("#slider_picture").css("background-position", "center");
	};

	function start(){
		$("#slider_picture").css("background", mass_pics_values[0]);
		$("#slider_picture").css("background-repeat", "no-repeat");
		$("#slider_picture").css("background-position", "center");
		for(var i = 0; i < mass_buttons_ids.length; i++){
			$(mass_buttons_ids[i]).css("background", mass_buttons_values[0]);
			$(mass_buttons_ids[i]).css("background-repeat", "no-repeat");
		}
		$(mass_buttons_ids[0]).css("background", mass_buttons_values[1]);
		$(mass_buttons_ids[0]).css("background-repeat", "no-repeat");
	};