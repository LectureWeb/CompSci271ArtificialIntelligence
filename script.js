$(document).ready(function (){
	
	page_name = window.location.pathname;
	switch(page_name)
	{
		case "/~dechter/index.html":
			$("#home_link").addClass("active");
			break;
		case "/~dechter/publications.html":
			$("#pub_link").addClass("active");
			break;
		case "/~dechter/talks.html":
			$("#talks_link").addClass("active");
			break;
		case "/~dechter/research.html":
			$("#research_link").addClass("active");
			break;
		case "/~dechter/talks.html":
			$("#talks_link").addClass("active");
			break;
		case "/~dechter/gradstudents.html":
			$("#grad_link").addClass("active");
			break;
		case "/~dechter/courses.html":
			$("#courses_link").addClass("active");
			break;
		case "/~dechter/biographical.html":
			$("#bio_link").addClass("active");
			break;
		case "/~dechter/awards.html":
			$("#awards_link").addClass("active");
			break;
		}
})