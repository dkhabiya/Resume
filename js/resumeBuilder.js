// Generic Information
var bio = {
    "name": "Divya Khabiya",
    "role": "Creative Developer",
    "contacts" : {
        "mobile" : "+00 1234567890",
        "email"  : "dkhabiya@gmail.com",
        "location"  : "Bangalore, India."
    },
    "who" : "Hi ! I am Divya, a creative person by nature and a developer by choice.<br> Being a bit of an artist, using visualization to communicate ideas has always been my passion. Web development is a medium through which I want to express myself in a creative way. <br>As a developer, I believe in 'Logic over Language'; learning a language though important, knowing how to logically use is also important.",
};

$("#header").prepend(HTMLheaderRole.replace("%data%",bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%",bio.name));
$("#header").append(HTMLwho);
$("#header").append(HTMLwhoDesc.replace("%data%",bio.who));
$("#topContacts").append(HTMLmobile.replace("%data%",bio.contacts.mobile));
$("#topContacts").append(HTMLemail.replace("%data%",bio.contacts.email));
$("#topContacts").append(HTMLlocation.replace("%data%",bio.contacts.location));

// Skills
var skills = {
    "Languages"         : ["C","C++", "Visual Basic", "PL/SQL", "Java (API programming)"],
    "Web References"    : ["HTML/CSS", "JavaScript", "XSL/XSLT"],
    "Tools"             : ["Microsoft Visual Studio", "Eclipse IDE", "Flexcube Retail", "Seagate Crystal Reports", "Microsoft Office", "LabVIEW", "Adobe (Dreamweaver, Premier, After Effects & Audition)"],
    "Web Servers"       : ["Apache Tomcat", "IIS"],
    "Source Control"    : ["GitHub", "Microsoft SourceSafe"]
};

for (var x in skills) {
    var skillString = [HTMLskillType.replace("%data%",x)];
    for ( var i=0; i<skills[x].length; i++ ){
        skillString = skillString + HTMLskillList.replace("%data%",skills[x][i]);
    }
    skillString = skillString + "</a>"
    $("#skillsGlance").append(skillString);
}

$("#skillsGlance").append(HTMLtop);

// Work Experience
$("#workExperience").append(HTMLworkStart);

var work = {
"jobs" : [
        {
            "employer"  : "Oracle Financial Services Software Ltd..",
            "location"  : "Bangalore, India.",
            "title"     : "Staff Consultant",
            "dates"     : "Banking Products Division.<br>Oct, 2010 - Present.",
            "desc"      : "Flexcube Retail is banking solution; it has a frontend UI which is created using HTML, CSS, XSL and JavaScripts called Host Menus. This UI enables a user to carry out various financial and customer maintenance transactions, that are stored in the database. Microsoft Visual Studio tools are used to connect the frontend and database. This entire setup has multiple services and COM packages to make these complex units work together.<br><br><mark> Responsibilities </mark> <br>• &nbspCustomer needs assessment <br>• &nbspRequirement gathering and analysis<br>• &nbspProduct enhancement and optimization <br>• &nbspDesign, development, testing, implementation and support <br>• &nbspQuality control and assurance <br>• &nbspSystem documentation<br><br> I have had the opportunity to work directly with the client, understand their needs and fullfill them to the best of my abilities. Worked for several financial institutions  – Shinsei Bank, Japan; Canara Bank, Syndicate Bank & Laxmi Vilas Bank, India.",
        },
        {
            "employer"  : "Onsite Experience",
            "location"  : "Tokyo, Japan.",
            "title"     : "Shinsei Bank - Onsite Developer/Consultant",
            "dates"     : "December, 2012 - January, 2015",
            "desc"      : ""
        },
        {
            "employer"  : "",
            "location"  : "Bangalore, India.",
            "title"     : "Syndicate Bank - Onsite Developer/Consultant",
            "dates"     : "May, 2012 - November, 2012",
            "desc"      : ""
        },
        {
            "employer"  : "",
            "location"  : "Bangalore, India.",
            "title"     : "Canara Bank - Onsite Developer/Consultant",
            "dates"     : "March, 2011 - May, 2012",
            "desc"      : ""
        },
        {
            "employer"  : "",
            "location"  : "",
            "title"     : "",
            "dates"     : "",
            "desc"      : "• &nbspDeveloped and implemented several critical enhancements to the existing Flexcube Retail banking product as per client requirement. <br>• &nbspAdding/modifying the business logic to the database, tunning up existing queries for better performance, developing new UI's, services and COM packages are a few undertakings that were carried out.<br><br>",
        },
        {
            "employer"  : "Saara Systems",
            "location"  : "Bangalore, India.",
            "title"     : "Intern",
            "dates"     : "December, 2009 - June, 2010",
            "desc"      : "Saara Systems India Ltd is an integrated service and solution provider in embedded technologies.<br>Created a Home Automation System, a program to provide a remote interface to control and monitor home appliances on a web browser. Using a graphical programming development environment (LabVIEW) and Adobe Dreamerweaver, a web page was created that connected to a microcontroller by means of internet protocols, to virtually command a home’s electrical fixtures. "
        }

    ],

    "show" : function(key)
            {
                $("#workExperience").append(HTMLworkEmployer.replace("%data%",work.jobs[key].employer));
                $("#workExperience").append(HTMLworkTitle.replace("%data%",work.jobs[key].title));
                $("#workExperience").append(HTMLworkDates.replace("%data%",work.jobs[key].dates));
                $("#workExperience").append(HTMLworkLocation.replace("%data%",work.jobs[key].location));
                $("#workExperience").append(HTMLworkDescription.replace("%data%",work.jobs[key].desc));
            }
};

var key;

for ( key in work.jobs)
{
    work.show(key);
    key = key + 1;
}

$("#workExperience").append(HTMLtop);

// Projects
var projects = {
"proj" : [
        {
            "date"  : "",
            "title" : "",
            "desc"  : "Over the period of my career as a developer I have worked on several projects, a few have been listed below."
        },
        {
            "date"  : "Self",
            "title" : "Wanderlust",
            "desc"  : "As an eager to be <mark>Web developer</mark>; developed a website using the Twitter bootstrap famework. The website construes the love of travelling; the places I have travelled and want to travel. This website is device independent and responds based on the size of the device display. Descriptions and images of the places are shown using modals.<br><i><small>The same can be viewed on my LinkedIn profile mentioned below.</small></i>"
        },
        {
            "date"  : "Self",
            "title" : "First attempt at Web Development",
		    "desc" 	: "Attempting to learn web developement; this responsive web resume was the first website I created. With the use of HTML/CSS and JavaScript; this webpage adjusts itself to the device it is being viewed on i.e., it is device independent and can be viewed with no zooming in/out to see the content."
        },
        {
            "date"  : "Canara Bank, India.",
            "title" : "LOS - Loans Origination System",
            "desc"  : "An interface was created for a third party system to interact with the Flexcube database using Java APIs. A dynamic web client to accept requests from the third party system and process them there after was also setup.<br> Contributed as a <mark>Developer</mark> and <mark>Functional Analyst</mark>."
        },
        {
            "date"  : "Shinsei Bank, Japan.",
            "title" : "Email Extraction Process Tunning",
            "desc"  : "Using Oracle API’s – OCI (Oracle Call Interface) created an application executable to upload large amounts of data (2.4 million records) from a file into the database; process these records in the database and create an output file in under 5 minutes. Improving the performance of the existing module used by the bank by greatly.<br> Explored a new territory of Oracle API’s with R&D; always growing as a <mark>Developer</mark>."
        },
        {
            "date"  : "Shinsei Bank, Japan.",
            "title" : "Shinsei Platform Upgrade",
            "desc"  : "Successfully upgraded Flexcube Retail Application platform from Windows 2003/Oracle 8i to Windows 2008/Oracle 10g. Key responsibilities as a part of Shinsei Upgrade were:<br> &nbsp&nbsp&nbsp&nbsp- Use of OGG (Oracle Golden Gate – Real time data integration and database replication solution) to optimize real time data sync between Oracle 8i and 10g databases.<br> &nbsp&nbsp&nbsp&nbsp- Application server setup(Windows 2008 R2 Server), troubleshooting to make existing Flexcube application compatible with new Windows 2008 platform and providing fixes. <br>&nbsp&nbsp&nbsp&nbsp- Solving critical issues related to upgrade of server and database. Issues including formatting reports using Crystal Reports.<br>Worked as a <mark>Solutions Architect</mark> and <mark>Onsite Consultant</mark> to provide client support and application fixes for a smooth transition from the existing system to the new system."
        },
        {
            "date"  : "Syndicate Bank, India.",
            "title" : "Syndicate Bank Centralization",
            "desc"  : "Prior to this each branch had a separate branch database connecting to a single host database. After centralization, a single branch database was used by all bank branches; completed successfully in 2012.<br> Main role being that of <mark>Technical Support</mark> and <mark>Application Analyst</mark>; solving technical issues arising in the application and database level up. "

        }
    ],

    "show" : function(pkey)
            {
                $("#projects").append(HTMLprojectTitle.replace("%data%",projects.proj[pkey].title));
                $("#projects").append(HTMLprojectDates.replace("%data%",projects.proj[pkey].date));
                $("#projects").append(HTMLprojectDescription.replace("%data%",projects.proj[pkey].desc));
            }
};
var pkey;

for ( pkey in projects.proj)
{
    projects.show(pkey);
    pkey = pkey + 1;
}

$("#projects").append(HTMLtop);

// Education
$("#education").append(HTMLschoolStart);

var education = {
    "schools" : [
                    {
                        "name"      : "Visvesvaraya Technological University",
                        "location"  : "Bangalore, India.",
                        "degree"    : "Bachelor Of Engineering",
                        "majors"    : "Information Science",
                        "dates"     : "Aug, 2006 - Jul, 2010"
                    },
                ],

    "show" : function(pkey)
        {
            $("#education").append(HTMLschoolName.replace("%data%",education.schools[i].name));
            $("#education").append(HTMLschoolDegree.replace("%data%",education.schools[i].degree));
            $("#education").append(HTMLschoolMajor.replace("%data%",education.schools[i].majors));
            $("#education").append(HTMLschoolDates.replace("%data%",education.schools[i].dates));
            $("#education").append(HTMLschoolLocation.replace("%data%",education.schools[i].location));
        }
};

var i;

for ( i in education.schools)
{
    education.show(i);
    i = i + 1;
}

$("#education").append(HTMLtop);

//Qualities
var myQualities = {
	"Vision" 		 : "I see programming as an art and a driver of customer delight. I mix ideas, push concepts and find the best way to realize a project.",
	"Problem-solver" : "I believe in development with purpose. I see myself playing a role in solving problems that improve the consumer experience.",
    "Proactive"      : "I believe that learning and experiencing never end. I look for opportunities where I can improve the product and myself to achieve the best for both.",
	"Hands-On"	 	 : "I enjoy rolling up my sleeves and getting into the nitty gritty of development, yet my goal is ultimately to be a 'thought-leader' and provide more than ideas but inspiration.",
    "Collaborative"  : "I have high regards for team building, I work exceptionally well across all key functional areas including development, support and customer service.",
    "Ambitious"      : "I'm always looking for opportunities and aren’t afraid to take risks for the sake of making things better."
};

for (var x in myQualities) {
    var qltyString = [HTMLqualityType.replace("%data%",x)];
    qltyString = qltyString + HTMLqualityDesc.replace("%data%",myQualities[x]);
    qltyString = qltyString + "</a>"
    $("#whyD").append(qltyString);
}

$("#whyD").append(HTMLtop);

$("#map-div").append(googleMap);

$("#afterMap").append(HTMLtop);
