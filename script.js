//To control Get in Touch  functionality in the page using JS
document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.querySelector('.submit');
    
    submitButton.addEventListener('click', function () {
        const name = document.querySelector('input[placeholder="Enter your Name"]').value;
        const phoneNumber = document.querySelector('input[placeholder="Enter your Phone Number"]').value;
        const message = document.querySelector('.message').value;

        const email = 'tanmoy.chanda.23@aot.edu.in';//Group admin email id is given here
        
        const mailtoLink = `mailto:${email}?subject=Message from ${name}&body=Name: ${name}%0D%0APhone Number: ${phoneNumber}%0D%0AMessage: ${message}`;
        
        window.location.href = mailtoLink;

        window.location.reload();
    });
});


document.addEventListener('DOMContentLoaded', function () {
    // Get the navigation links
    const homeLink = document.querySelector('.nav__links li:nth-child(1) a');
    const aboutLink = document.querySelector('.nav__links li:nth-child(2) a');
    const insuranceLink = document.querySelector('.nav__links li:nth-child(3) a');
    const serviceLink = document.querySelector('.nav__links li:nth-child(4) a');
    const contactLink = document.querySelector('.nav__links li:nth-child(5) a');
    
    // Add event listener for the home link
    homeLink.addEventListener('click', function (event) {
        // Refresh the page
        location.reload();
    });


    aboutLink.addEventListener('click', function (event) {
        // Scroll to the about us section
        document.querySelector('.about-us').scrollIntoView({
            behavior: 'smooth'
        });
        // Prevent default link behavior
        event.preventDefault();
    });

    // Add event listener for the insurance link
    insuranceLink.addEventListener('click', function (event) {
        // Scroll to the insurance section
        document.querySelector('.container-insurance').scrollIntoView({
            behavior: 'smooth'
        });
        // Prevent default link behavior
        event.preventDefault();
    });

    // Add event listener for the service link
    serviceLink.addEventListener('click', function (event) {
        // Scroll to the insurance section
        document.querySelector('.services').scrollIntoView({
            behavior: 'smooth'
        });
        // Prevent default link behavior
        event.preventDefault();
    });

    // Add event listener for the contact link
    contactLink.addEventListener('click', function (event) {
        // Scroll to the contact section
        document.querySelector('.contact').scrollIntoView({
            behavior: 'smooth'
        });
        // Prevent default link behavior
        event.preventDefault();
    });
});
