
var bio = {
	"name" : "Elisa Mazzola",
	"role" : "Student", 
	"contacts" : {
		"mobile" : "+393284028199", 
	    "email": "mazzola.elisa@hotmail.it",
	    "skype": "elisa-mazzola",
		"gitHub": "elimazz89",
		"location": "Palermo"
	},
	"welcomeMessage": "L’unico modo di fare un ottimo lavoro è amare quello che fai. Se non hai ancora trovato ciò che fa per te, continua a cercare, non fermarti. [..] Non accontentarti. Sii affamato. Sii folle. - S. Jobs",
	"skills" : ["German language (level A1)","English language (level B1)","Arabic language(level A1)","Recruitment and Selection of HR","Learning Object","JS","Git and GitHub"],
	"picture": "images/me.jpg"
}



var work = {
	"jobs": [
	{
		"employer": "Municipality of Palermo and University of Palermo",
		"title": "Partner for the Community profile",
		"location": "Palermo",
		"dates": "from October 2013 to November 2014",
		"description": "Identifying problems and resources of a local community from the point of view of social actors and stakeholders to promote trasformation and chancing. My tasks have consisted of conducting focus groups, thematic forums, photovoice, set-up exhibitions."
	},
	{
		"employer": "Es - Empowerment sociale",
		"title": "Educator",
		"location": "Via Tunisi, 2, Palermo",
		"dates": "June 2013",
		"description": "Planning, implementation and evaluation of a project of social intervention, aimed at about 20 children of the primary school."
	},
	{
		"employer": "Coop. Soc. Sefora",
		"title": "Educator",
		"location": "Via Sciuti, 180, Palermo",
		"dates": "from April to May",
		"description": "Internship within a community for minors from 0 to 7 years. My tasks have consisted of painting and drawing activities, helping to do homework, viewing cartoons, helping during lunch, structured and free play, walking and playing in recreation grounds"
	}
		]
}



var education = {
	"schools": [
	{
		"name" : "German language - level A1",
		"location" : "VHS - Paderborn, Germany",
		"degree" : "non provided",
		"dates": "from Genuary 2015 at today",
		"majors": [],
		"url": "http://www.paderborn.de/microsite/vhs/index.php"
	},
	{
		"name" : "Education and Life-long learning",
		"location" : "University - Viale delle scienze, Palermo, Italy",
		"degree" : "Masters",
		"dates": "2013-2014",
		"majors": [],
		"url": "http://portale.unipa.it/dipartimenti/dipsicologia/cds/scienzedellaformazionecontinua2054"
	},
	{
		"name" : "HR - Recruitment and Selection",
		"location" : "Bachelor - Viale Andrea Doria, 35, Milan, Italy",
		"degree" : "ICC",
		"dates": "2014",
		"majors": [],
		"url": "http://www.asfm.it/corso-in-hr-management-e-in-ricerca-e-selezione-del-personale/"
	},
	{
		"name" : "Social actions expert and planning of work of community",
		"location" : "Es - Empowerment sociale - Via Tunisi, 2, Palermo, Italy",
		"degree" : "Master's programme",
		"dates": "2012-2013",
		"majors": [],
		"url": ""
	},
	{
		"name" : "English language - level B1",
		"location" : "British Institute - Via Re Federico, 18/B, Palermo, Italy",
		"degree" : "ICC",
		"dates": "2012-2013",
		"majors": [],
		"url": "http://www.britishinstitutes.it/palermo-centro"
	},
	{
		"name" : "Arabic language - level A1",
		"location" : "University, Viale delle scienze, Palermo, Italy",
		"degree" : "not provided",
		"dates": "2011-2012 and 2012-2013",
		"majors": [],
		"url": ""
	},
	{
		"name" : "Science of education",
		"location" : "University - Viale delle scienze, Palermo, Italy",
		"degree" : "BA",
		"dates" : "2009-2013",
		"majors": [],
		"url": "http://portale.unipa.it/dipartimenti/dipsicologia/cds/educazionedicomunita2082"
	}
    	],

    "onlineCourses": [
    {
    	"title": "How to Use Git and GitHub",
    	"school": "Udacity",
    	"dates": 2015,
    	"url": "https://www.udacity.com/course/javascript-basics--ud804"
    },
    {
    	"title": "JavaScripts Basics",
    	"school": "Udacity",
    	"dates": 2015,
    	"url": "https://www.udacity.com/course/viewer#!/c-ud775/l-2980038599/e-2960778944/m-2960778945"
    }
    ]
}



var projects = {
	"projects": [
	{
		"title": "Show Photovoice for the Community Profile",
		"dates": "November 2014",
		"description": "set-up exhibition for the conference of the project PartINComune",
		"images": ["images/photovoice.jpg"]
	},
	{
		"title": "Thesis",
		"dates": "2014",
		"description": "I've wrote my tesis of degree relating to E-learning, in particolar the Webinars",
		"images": []
	},
	{
		"title": "Learning Object",
		"dates": "2013",
		"description": "I've created a Learning Object for children of a lower secondary school",
		"images": []	
	},
	{
		"title": "Creating static pages HTMLS and CSS",
		"dates": "2010",
		"description": "I've created a project consisting of 10 static pages with HTML and CSS with images, text, hyperlinks for the informatic exam at the Univesity",
		"images": []
	}
	]
}




bio.display = function () {

  var formattedName = HTMLheaderName.replace("%data%",bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
  var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
  var formattedPicture = HTMLbioPic.replace("%data%",bio.picture);

  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  $("#header").append(formattedWelcomeMessage);
  $("#header").append(formattedPicture);

  var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
  var formattedSkype = HTMLskype.replace("%data%",bio.contacts.skype);
  var formattedGitHub = HTMLgithub.replace("%data%",bio.contacts.gitHub);
  var formattedLocationBio = HTMLlocation.replace("%data%",bio.contacts.location);

  $("#topContacts").append(formattedMobile);
  $("#topContacts").append(formattedEmail);
  $("#topContacts").append(formattedSkype);
  $("#topContacts").append(formattedGitHub);
  $("#topContacts").append(formattedLocationBio);

  $("#footerContacts").append(formattedMobile);
  $("#footerContacts").append(formattedEmail);
  $("#footerContacts").append(formattedSkype);
  $("#footerContacts").append(formattedGitHub);
  $("#footerContacts").append(formattedLocationBio);
	

  if (bio.skills.length > 0) {

	$("#header").append(HTMLskillsStart);

	var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkills);
	formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkills);
	formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkills);
	formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkills);
	formattedSkills = HTMLskills.replace("%data%", bio.skills[4]);
	$("#skills").append(formattedSkills);
	formattedSkills = HTMLskills.replace("%data%", bio.skills[5]);
	$("#skills").append(formattedSkills);
	formattedSkills = HTMLskills.replace("%data%", bio.skills[6]);
	$("#skills").append(formattedSkills);
  }

}

bio.display();



work.display = function () {

 for (job in work.jobs) {
	//create new div for work experience
	$("#workExperience").append(HTMLworkStart);
	//concat employer and title
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmplowerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmplowerTitle);

	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);

	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	$(".work-entry:last").append(formattedLocation);

	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
	}

	//$("#topContacts .flex-item").removeClass("flex-item").addClass("flex-box");
}

work.display();



projects.display = function () {   //gli objects posso incapsulare funzioni e display è un metodo dell'oggetto projects. La funzione all'interno ci aiuterà a visualizzare tutti i dati contenuti nell'oggetto.
	for (project in projects.projects) {   //il punto aggiunge una nuova proprietà all'oggetto (chiamata display)

  	 	$("#projects").append(HTMLprojectStart);

   		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
   		$(".project-entry:last").append(formattedTitle);

   		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
   		$(".project-entry:last").append(formattedDates);

   		var formattedDescriptionProject = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    	$(".project-entry:last").append(formattedDescriptionProject);

    if (projects.projects[project].images.length > 0) {
    	for (image in projects.projects[project].images) {
    		var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
   			$(".project-entry:last").append(formattedImage);
   		}
   	}
  }
}  	

projects.display();



education.display = function () {

	for (school in education.schools) {

		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry:last").append(formattedName);

		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedDegree);

		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedLocationSchool = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocationSchool);

		if (education.schools[school].majors.length > 0) {
    		for (major in education.schools[school].majors) {
    			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
				$(".education-entry:last").append(formattedMajor);
				}
			}

   		var formattedURLschool = HTMLschoolURL.replace("%data%", education.schools[school].url);
		$(".education-entry:last").append(formattedURLschool);
    }

	for (elearning in education.onlineCourses) {

		$(".education-entry:last").append(HTMLonlineClasses);
		
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[elearning].title);
		$(".education-entry:last").append(formattedTitle);

		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[elearning].school);
		$(".education-entry:last").append(formattedSchool);

		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[elearning].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[elearning].url);4
		$(".education-entry:last").append(formattedURL);
	}
}

education.display();



$(document).click(function(loc) {
  // your code goes here
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y); 
});



function inName() {
	bio.name = bio.name.trim().split(" ");
	console.log(name);
	bio.name[1] = bio.name[1].toUpperCase(); 
	bio.name[0] = bio.name[0].slice(0,1).toUpperCase() + bio.name[0].slice(1).toLowerCase();
	
	return bio.name[0] +" "+ bio.name[1];
}



$("#header").prepend(internationalizeButton);
$("#mapDiv").append(googleMap);


$("[href=#]").each(function(){
	var link = $(this).html();
	$(this).attr("href",link);

})



 