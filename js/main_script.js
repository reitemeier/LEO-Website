alert("main_script loaded");

$(document).ready(function(){
    $("#main_content").load("pages/home.php");
	  
	$("ul#nav li a").click(function() {
		var page = $(this).attr("href");
		alert(page);
		$("#main_content").load("pages/" + page + ".php");
		return false;
	});
});

