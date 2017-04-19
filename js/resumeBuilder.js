var bio = {
	"name": "Bella Chen",
	"role": "Web Developer",
	"contacts": {
		"mobile": "240-803-8716",
		"email": "lucidrain929@gmail.com",
		"github": "lucidrain929",
		"location": "Columbia MD"
	},
	"welcomeMessage": "Welcome to My Resume",
	"skills": ["HTML5", "CSS3", "JavaScript", "JQuery", "JSON", "Git", "GitHub", "Bootstrap", "AJAX", "Responsive Design", "OOP"],
	"biopic": "images/bellachen.jpg"
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);
	$("#footerContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);
    $("#footerContacts").append(formattedEmail);

	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);
	$("#footerContacts").append(formattedGithub);

	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);
    $("#footerContacts").append(formattedLocation);

	var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedMsg);

	var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").append(formattedPic);
	$("#header").append(HTMLskillsStart);

	for (var i = 0; i < bio.skills.length; i++ ) {
		var currSkill = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(currSkill);
	}
};

bio.display();


var work = {
	"jobs": [
		{
			"employer": "Panda Express",
		 	"title": "Shift Manager",
		 	"location": "Melbourne Florida",
		 	"dates": "August 2015-November 2015",
		 	"description": "helped general manager with his duty. Assisted and Supervised coworker"
		 },
		 {
		 	"employer": "Frostburg State University",
	     	"title": "Graduate Assistant",
	     	"location": "Frostburg Maryland",
	     	"dates": "December 2013-May 2014",
	     	"description": "Liason between Frostburg State University and international students"
	     }
		]
};

work.display = function() {
	for (var job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

	  	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	  	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
      	var formattedEmployerTitle = formattedEmployer + formattedTitle;
      	$(".work-entry:last").append(formattedEmployerTitle);

	  	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
      	$(".work-entry:last").append(formattedLocation);

	  	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      	$(".work-entry:last").append(formattedDates);

	  	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
      	$(".work-entry:last").append(formattedDescription);
    }
};

work.display();

var education = {
	"schools":[
		{
			"name": "Hunan Normal University",
            "degree": "Bechalor of Literature",
            "location": "Changsha, China",
            "dates": "Septemnber May-2014",
            "majors":  ["English"],
            "url": "http://www.hunnu.edu.cn/"
		},
		{
			"name": "Hunan Normal University",
            "degree": "Master of Literature",
            "location": "Changsha, China",
            "dates": "June-2013",
            "majors": ["Translation"],
            "url": "http://www.hunnu.edu.cn/"
		},
		{
			"name": "Forstburg State University",
			"degree": "Master of business administration and managment",
			"location": "Forstburg, Maryland",
			"dates": "May-2014",
			"majors": ["business of administration and management"],
			"url": "http://www.hunnu.edu.cn/"
		}
	],
    "onlineCourses": [
        {
        	"title": "front end web developer",
        	"school": "Udacity",
        	"date": "Present",
        	"url": "https://classroom.udacity.com/nanodegrees/nd001/syllabus"
        }
    ]
};
education.display = function() {
	$("#education").append(HTMLschoolStart);

	for (var i=0; i < education.schools.length; i++) {
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
		var formattedDegree =  HTMLschoolDegree.replace("%data%", education.schools[i].degree);
		$(".education-entry:last").append(formattedSchoolName + formattedDegree);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
		$(".education-entry:last").append(formattedLocation);

		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors[0]);
		$(".education-entry:last").append(formattedMajor);
	}

	for (var items in education.onlineCourses) {
		$(".education-entry").append(HTMLonlineClasses);
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[items].title);
	    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[items].school);
		$(".education-entry").append(formattedOnlineTitle+formattedOnlineSchool);

		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[items].date);
		$(".education-entry").append(formattedOnlineDates);

		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[items].url);
		$(".education-entry").append(formattedOnlineURL);
	}
};
education.display();

var project = {
       	"projects":[
	        {
	      	"title": "Online Portfolio",
	        "dates": "March-2016",
	        "description": "a reponsive webpage",
	        "images": ["http://i.imgur.com/TX4LsR6.jpg?1"]
	        }
	    ]
};

projects.display=function() {
	$("#projects").append(HTMLprojectStart);

	for (var things in project.projects) {
	    var formattedTitle = HTMLprojectTitle.replace("%data%", project.projects[things].title);
	    $(".project-entry").append(formattedTitle);
	}

	var formattedDates = HTMLprojectDates.replace("%data%",project.projects[things].dates);
	$(".project-entry").append(formattedDates);
	var formattedDescription = HTMLprojectDescription.replace("%data%", project.projects[things].description);
	$(".project-entry").append(formattedDescription);
	var formattedImage = HTMLprojectImage.replace("%data%",project.projects[things].images[0]);
	$(".project-entry").append(formattedImage);
};

projects.display();

$("#mapDiv").append(googleMap);
$("#lets-connect").append(internationalizeButton);
