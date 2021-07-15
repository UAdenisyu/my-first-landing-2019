$("#s3").css("height", "300px");//Задание 1

(function(){

	var mass, ind, len, tim, d, transparent_cur, current_item, next_item, change;
	d=document;
	mass=["pics/slide1_background.png", "pics/slide2_background.png", "pics/slide3_background.png"];
	len=mass.length;
	ind=0;
	tim=10;//5сек = 5000
	transp_var = 0.01;
	transparent_cur = -0.1;
	change = 0;
 
 
onload=function(){
	start();
};


function start(){
	current_item = mass[ind];
	next_item = mass[ind];
	d.getElementById("slider").style.backgroundImage='url("'+next_item+'")';

	if(transparent_cur >= 4){
		transp_var = -0.01;
	}
	setTimeout(function(){
		d.getElementById("slider").style.opacity = Math.round((transparent_cur+=transp_var) * 100) / 100;
	}, tim);
	if(transparent_cur <= 0){
		ind=ind+1==len?0:ind+1;
		transp_var = 0.01;
	}
	//if(confirm(ind+' '+len)){return;};
	setTimeout(function(){start();}, tim);
};



})();