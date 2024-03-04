<h1 style="color:red; text-align:center;">Project README: MEDIcure Demo</h1>


<p>This README provides a comprehensive overview of the structure, implementation, and functionality of the MEDIcure demo project, developed using HTML, CSS, and JavaScript.</p>

## ⏭Roadmap
- [x] landing page
- [x] Website Navbar & Header Section
- [x] About Us Section
- [x] Insurance Section
- [x] Services Section
- [x] FAQs
- [x] Get In Touch Section
- [x] Integrate Get In Touch functionality using JS and SMTP Protocol
- [x] Deploy on GITHUB PAGES

<h2>HTML Structure</h2>
<p>The HTML file (index.html) forms the structure of the MEDIcure web application. It comprises various sections, each serving a specific purpose:</p>

<ul>
  <li>Navigation Bar: The navigation bar contains links to different sections of the application and includes buttons for user registration.</li>
  <li>Header: The header section showcases the main message of the application along with an image and additional content.</li>
  <li>About Us: This section provides information about MEDIcure's mission and values.</li>
  <li>Insurance Features: Here, users can explore the insurance schemes available through MEDIcure.</li>
  <li>Services Offered: Users can learn about the different services offered by MEDIcure, such as consultations and prescription refills.</li>
  <li>Get In Touch: This section allows users to submit their name, email, phone number, and message to get in touch with the MEDIcure team.</li>
  <li>Footer: The footer contains essential information about the application and its creators.</li>
</ul>

<h2>CSS Styling</h2>
<p>The styles.css file contains styles to enhance the visual appeal and layout of the web application. It includes styles for the navigation bar, header, about us section, insurance features, services offered, get in touch section, and footer. The CSS rules ensure responsiveness across different screen sizes and provide a consistent user experience.</p>

<h2>JavaScript Functionality</h2>
<p>The script.js file contains JavaScript functions that add interactivity and functionality to the MEDIcure web application:</p>

<ul>
  <li>Get In Touch Functionality: The submit button click event listener captures user input (name, phone number, email, and message) from the contact form. It constructs a mailto link with the user's information and the recipient's email address. Upon clicking the submit button, the function redirects the user to their default email client with the pre-filled message, allowing them to contact the MEDIcure team easily. Here I implemented this "Get in Touch" without using any backend technology. It is simply created by using javascript where the customer query will be directly send to the provided mail id.</li>
  <li>Navigation Links: Event listeners are added to the navigation links to enable smooth scrolling to different sections of the webpage. When users click on a navigation link, the page scrolls smoothly to the corresponding section.</li>
</ul>

<h2>Special Focus: Get In Touch Feature</h2>
<p>The "Get In Touch" feature allows users to contact the MEDIcure team directly from the web application. It enhances user engagement and facilitates communication between users and the application creators. The JavaScript function associated with this feature simplifies the process of submitting inquiries or concerns, making it convenient for users to reach out to the MEDIcure team.</p>

## 🌊Contributors
<div>
<h1 align="center">
 <b>Made with ❤️ by team PHOENIX
<h1>
</div>

<h2>Conclusion</h2>
<p>The MEDIcure demo project demonstrates the integration of HTML, CSS, and JavaScript to create a responsive and interactive web application. Each element serves a specific purpose, contributing to the overall functionality and user experience of the application. The "Get In Touch" feature stands out as a key component, enabling seamless communication between users and the application creators.</p>