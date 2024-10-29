

function changeButtonColor(buttonId) {
    const button = document.getElementById(buttonId);
    if (button) {
        button.style.backgroundColor = '#873800'; // Set background color
        button.style.color = '#FFFFF0'; // Set text color
    } else {
        console.error(`Button with ID ${buttonId} not found.`);
    }
}

document.addEventListener('DOMContentLoaded', function() {
     const page = window.location.pathname.split("/").pop(); // Get the last part of the URL

     console.log(page)

     if(page == "index.html") {
        changeButtonColor('homeButton')
     } else if (page == "professional.html") {
        changeButtonColor('profButton')
     } else if (page == "about.html") {
        changeButtonColor('aboutButton')
     } else if (page == "contact.html") {
        changeButtonColor('contactButton')
     } else {
        console.log("There is no page button to recolor")
     }
});