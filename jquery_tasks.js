function close_registration(){
	$("#Registration_table").css("display", "none");
}

$(document).ready(function(){

	function task_2_and_3(){
		$("#head_icon_3").mouseover(function(){
			$("#head_icon_3").css("opacity", "1");
		})
		$("#head_icon_3").mouseout(function(){
			$("#head_icon_3").css("opacity", "0.5");
		})
	}


	function task_5(){
		$("#header_big_pic").wrap("<div></div>");
	}

	function task_6(){
		/*function getXmlHttp(){
			try {
				xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
			} catch (e) {
				try {
   					xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
   				} catch (E) {
   					xmlhttp = false;
   				}
   			}
   			if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
   				xmlhttp = new XMLHttpRequest();
   			}
   			return xmlhttp;
   		}
		var req = getXmlHttp();*/
	}

	function task_7(){
		$("#header_big_pic").draggable();
	}

	task_2_and_3();
	task_5();
	task_6();
	task_7();


});