//function to redirect a user to another page if a project button is clicked
function redirectToProject(url) {
    window.location.href = url;
}

function redirectToHome(url) {
    window.location.href = url;
}


// Function to open a specific tab content
function openTab(evt, tabName) {
    // Get all elements with class="tabcontent" and hide them
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablink" and remove the class "active"
    var tablinks = document.getElementsByClassName("tablink");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the specific tab content
    document.getElementById(tabName).style.display = "block";

    // Add the class "active" to the button that opened the tab
    evt.currentTarget.className += " active";
}

// Click on the first tablink to open the default tab content
document.getElementsByClassName("tablink")[0].click();
