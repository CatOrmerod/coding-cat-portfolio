const delay = ms => new Promise (res => setTimeout(res, ms))
// Update the content of the Modal with information from the object array
$('#myModal').on('show.bs.modal', async function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    let projectID = button.data('id') // Extract info from data-* attributes
    console.log(projectID);
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    const response = await fetch (`/api/projects/${projectID}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    var project = await response.json();
    await delay(2000)
    $('#modal-loading').hide();
    console.log(project);
    modal.find('#modal-project-title').text(project.projectTitle)
    $('#modal-image').html(project.projectPic)
    $('#modal-project-description').html(project.projectDescription)
    $('#modal-project-tools').html(project.projectTools)
    //populate buttons with the urls so when clicked will take to the relevant websites
    $("#modal-repo").on("click", function(){
        console.log(project.projectRepo);
        window.open(project.projectRepo)
    });
    
    $("#modal-live-page").on("click", function(){
        window.open(project.projectURL)
    });

})

