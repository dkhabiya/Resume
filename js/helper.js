/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/
var HTMLheaderName = '<h1 class="hdrtitle">%data%</h1>';
var HTMLheaderRole = '<span class="hdrrole">%data%</span><hr/>';

var HTMLmobile = '<li class="flex-item"><span class="textColor2">Mobile : </span><span class="textColor">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="textColor2">Email : </span><span class="textColor">%data%</span></li>';
var HTMLlinkedin = '<li class="flex-item"><span class="textColor2">LinkedIn : </span><span class="textColor"><a class="plinks" href="%data%" onclick="window.open(this.href, this.href); return false">Follow!</a></span></li><br>';
var HTMLgithub = '<li class="flex-item"><span class="textColor2">Github : </span><span class="textColor"><a class="plinks" href="%data%" onclick="window.open(this.href, this.href); return false">Follow!</a></span></li>';
var HTMLblog = '<li class="flex-item"><span class="textColor2">Blog : </span><span class="textColor">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="textColor2">Location : </span><span class="textColor">%data%</span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLwho = '<h2 id="who-h3">I am</h2><br>';
var HTMLwhoDesc = '<p class="who-desc">%data%<p>';

var HTMLskillType = '<a class="skills">%data%';
var HTMLskillList = '<li class="skill-list">%data%</li>';

var HTMLqualityType = '<a class="skills">%data%';
var HTMLqualityDesc = '<li class="qltyDesc">%data%</li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a>%data%</a>';
var HTMLworkTitle = '<a class="titlecss">%data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p>%data%</p>';

var HTMLprojectTitle = '<div class="project-entry"><a>%data%</a></div>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a>%data%</a>';
var HTMLschoolDegree = '<a class="titlecss">%data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em>%data%</em>';

var HTMLonlineClasses = '<a>Online Classes</a>';
var HTMLonlineTitle = '<a class="titlecss">%data%</a>';
var HTMLonlineSchool = '<em>%data%</em>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<a href="%data%" class="urls">know more..</a>';

var HTMLtop = '<br><a href="#header" class="top">Top</a>';
var HTMLHR = '<hr class="rule">';

var googleMap = '<div id="map"></div>';

var map;    // declares a global map variable
/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };


  map = new google.maps.Map(document.querySelector('#map-div'), mapOptions);


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
//    locations.push(bio.contacts.location);

    // iterates through school locations and appends each location to
    // the locations array
    for (var school in education.schools) {
      locations.push(education.schools[school].location);
    }

    // iterates through work locations and appends each location to
    // the locations array
    for (var job in work.jobs) {
      locations.push(work.jobs[job].location);
    }

    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      //animation: google.maps.Animation.BOUNCE,
      title: name
    });

    var infoWindow = new google.maps.InfoWindow({
      content: name
    });


    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.open(map,marker);
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
    for (var place in locations) {

      // the search request object
      var request = {
        query: locations[place]
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    }
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);