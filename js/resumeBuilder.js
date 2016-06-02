var bio = {
	"name": "Bella Chen",
	"role": "web developer",
	"contacts":{
		"mobile": "240-803-8716",
		"email": "lucidrain929@gmail.com",
		"github": "lucidrain929",
		"location": "Austin TX"
	},
	"welcomeMessage": "welcome to my resume",
	"skills": ["CSS","HTML","responsive web design","java","javascript","Jquery","boostrap"],
	"biopic":"http://i.imgur.com/jcoaBqK.jpg"
};

bio.display = function() {
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);

	var formattedName = HTMLheaderName.replace("%data%", bio.name); 
	$("#header").prepend(formattedName);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);

	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);

	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);

	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);

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
            "date": "Septemnber 2016-May 2014",
            "major": "English"
		},
		{
			"name": "Hunan Normal University",
            "degree": "Master of Literature",
            "location": "Changsha, China",
            "date": "September 2010-June 2013",
            "major": "Translation"
		},
		{
			"name": "Forstburg State University",
			"degree": "Master of business administration and managment",
			"location": "Forstburg, Maryland",
			"date": "August 2011-May-2014",
			"major": "business of administration and management"
		}
	],
    "onlinecourses": [
        {
        	"title": "front end web developer",
        	"school": "Udacity",
        	"dates": "January 2016-Present",
        	"URL": "https://classroom.udacity.com/nanodegrees/nd001/syllabus"
        }
    ]
};
education.display = function() {
	$("#education").append(HTMLschoolStart);

	for (var i=0; i < education.schools.length; i++) {
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
		var formattedDegree =  HTMLschoolDegree.replace("%data%", education.schools[i].degree);
		$(".education-entry:last").append(formattedSchoolName + formattedDegree);

		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].date);
		$(".education-entry:last").append(formattedDates);

		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
		$(".education-entry:last").append(formattedMajor);
	}

	for (var items in education.onlinecourses) {
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlinecourses[items].title);
		$(".education-entry").append(formattedOnlineTitle);

		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlinecourses[items].school);
		$(".education-entry").append(formattedOnlineSchool);

		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlinecourses[items].dates);
		$(".education-entry").append(formattedOnlineDates);

		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlinecourses[items].URL);
		$(".education-entry").append(formattedOnlineURL);
	}
};
education.display();

var projectsinfo = {
	  "project":[
	    { "title": "Online Portfolio",
	      "dates": "March 2016",
	      "description": "a reponsive webpage"
	     }
	  ]
};

projectsinfo.display=function() {
	$("#projects").append(HTMLprojectStart);

	for (var things in projectsinfo.project) {
	    var formattedTitle = HTMLprojectTitle.replace("%data%", projectsinfo.project[things].title);
	    $(".project-entry").append(formattedTitle);
	}

	var formattedDates = HTMLprojectDates.replace("%data%",projectsinfo.project[things].dates);
	$(".project-entry").append(formattedDates);
	var formattedDescription = HTMLprojectDescription.replace("%data%", projectsinfo.project[things].description);
	$(".project-entry").append(formattedDescription);
};

projectsinfo.display();

$("#mapDiv").append(googleMap);
$("#lets-connect").append(internationalizeButton);
