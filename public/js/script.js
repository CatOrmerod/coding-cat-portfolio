// projects object using a key identifyer to link to the data-id in the HTML//
var projectsContent = {
    1: {
        projectTitle: "Workday Scheduler",
        projectDescription: "App to display the workday hours where user can save their appointments",
        projectTools: "HTML, CSS, JavaScript, Bootstrap, GoogleFonts",
        projectRepo: "https://github.com/CatOrmerod/work-day-scheduler",
        projectURL: "https://catormerod.github.io/work-day-scheduler/",
        projectPic: "<img src='./assets/images/work-day-scheduler-screenshot.png' alt='Image' style='width:100%;max-width:300px'>",
    },
    2: { 
        projectTitle: "Weather App",
        projectDescription: "Weather app that provides the weather for any location and features a geolocation on opening the page to show the weather in the users current location.",
        projectTools: "HTML, CSS, JavaScript, jQuery, API, Bootstrap, Font Awesome",
        projectRepo: "https://github.com/CatOrmerod/weather-dashboard",
        projectURL: "https://catormerod.github.io/weather-dashboard/",
        projectPic: "<img src='./assets/images/weather-dashboard-screenshot.png' alt='Image' style='width:100%;max-width:300px'>",
    },
    3: { 
        projectTitle: "Tipsy Tricks - Group Project",
        projectDescription: "A home bar assistant to take any entered ingredient and display cocktails that use that ingredient.  Further to this it takes the users current location and provides a list of Liquor Stores in a 5km radius in case they need more ingredients.",
        projectTools: "HTML, CSS, JavaScript, jQuery, API, Bootstrap, Font Awesome",
        projectRepo: "https://github.com/RichardtHopkins/Cocktail-suggester",
        projectURL: "https://richardthopkins.github.io/Cocktail-suggester/",
        projectPic: "<img src='./assets/images/tipsy-tricks-screenshot.png' alt='Image' style='width:100%;max-width:300px'>",
    }
}


// Update the content of the Modal with information from the object array
$('#myModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    let projectID = button.data('id') // Extract info from data-* attributes
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('#modal-project-title').text(projectsContent[projectID].projectTitle)
    $('#modal-image').html(projectsContent[projectID].projectPic)
    $('#modal-project-description').html(projectsContent[projectID].projectDescription)
    $('#modal-project-tools').html(projectsContent[projectID].projectTools)
    //populate buttons with the urls so when clicked will take to the relevant websites
    $("#modal-repo").on("click", function(){
        console.log(projectsContent[projectID].projectRepo);
        window.open(projectsContent[projectID].projectRepo)
    });
    
    $("#modal-live-page").on("click", function(){
        window.open(projectsContent[projectID].projectURL)
    });

})

