$(document).ready(function() {
		
	// header logo
	var $logo = '<div class="logo"><img src="tempsloth.jpg" alt-text="temp logo" title="temp logo"></img></div>';
	
	// right side
	var $rightside = '<div class="rightside"></div>';
	
	// head text
	var $headtext = '<div class="headtext"><h1>.NET</h1></div>';
	
	//nav bar
	var $nav = '<div class="nav"></div>';
	var $home='<a href="index.html"><div class="button"><p>Home</p></div></a>';
	var $programs = '<a><div class="button" id="programs" position="relative"><p>Programs ↓</p></div></a>';
	var $about = '<a href="about.html"><div class="button"><p>About</p></div></a>';
	
	//programs menu
	var $prgmenu = '<div class="popmenu"></div>';
	var $unitconverter = '<a href="unitconverter.html"><div class="popmenuitem">Universal Unit Converter</div></a>';
	var $codesheets = '<a href="codesheets.html"><div class="popmenuitem">Code Reference Sheets</div></a>';
	var $passwordgenerator = '<a href="passwordgenerator.html"><div class="popmenuitem">Password Generator</div></a>';
	
	//footer links
	var $toTop = '<a>To Top</a>';
	var $contact = '<a href="mailto:kevin.mckibben@outlook.com">Contact Me</a>';
	var $resume = '<a href="Files/Kevin_McKibben_Resume_SoftwareDev.pdf">Resume</a>';		
	
	// build the header
	$(".header").append($logo);
	$(".header").append($rightside);
	$(".rightside").append($headtext);
	$(".rightside").append($nav);
	$(".nav").append($home);
	$(".nav").append($programs);
	$(".nav").append($about);
	$(".header").append("<hr>");
		
	//build the programs menu	
	$('#programs').append($prgmenu);
	$(".popmenu").append($unitconverter);
	$(".popmenu").append($codesheets);
	$(".popmenu").append($passwordgenerator);
	
	// build footer
	$(".footer").append("<hr>");
	$(".footer").append($contact);	
	$(".footer").append("|");
	//$(".footer").append($resume);	
		
	//show the programs menu
	$("#programs").mouseenter(function() {
		$('.popmenu').slideDown();
	});
	
	$(".popmenu").mouseleave(function() {
		$('.popmenu').slideUp();
	});
});


