'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 10) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});



/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", function () {

  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);

});



/**
 * skills toggle
 */

const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {

    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) { elemToggleFunc(toggleBtns[i]); }
    elemToggleFunc(skillsBox);

  });
}



/**
 * dark & light theme toggle
 */

const themeToggleBtn = document.querySelector("[data-theme-btn]");

themeToggleBtn.addEventListener("click", function () {

  elemToggleFunc(themeToggleBtn);

  if (themeToggleBtn.classList.contains("active")) {
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");

    localStorage.setItem("theme", "light_theme");
  } else {
    document.body.classList.add("dark_theme");
    document.body.classList.remove("light_theme");

    localStorage.setItem("theme", "dark_theme");
  }

});

/**
 * check & apply last time selected theme from localStorage
 */

if (localStorage.getItem("theme") === "light_theme") {
  themeToggleBtn.classList.add("active");
  document.body.classList.remove("dark_theme");
  document.body.classList.add("light_theme");
} else {
  themeToggleBtn.classList.remove("active");
  document.body.classList.remove("light_theme");
  document.body.classList.add("dark_theme");
}




/**
Chatbot
**/

window.embeddedChatbotConfig = {
  chatbotId: "",
  domain: "www.chatbase.co"
};

const scriptElement = document.createElement("script");
scriptElement.src = "https://www.chatbase.co/embed.min.js";
scriptElement.chatbotId = "";
scriptElement.domain = "www.chatbase.co";
scriptElement.defer = true;

document.head.appendChild(scriptElement);






/**
Form Submission (Firebase and send email)
**/


/** Firebase account data */

const firebaseConfig = {
  apiKey: "AIzaSyBLmQ31_wkYljUhIjaixjCEtVSNW3pxNzE",
  authDomain: "hammad-tariq-com.firebaseapp.com",
  databaseURL: "https://hammad-tariq-com.firebaseio.com",
  projectId: "hammad-tariq-com",
  storageBucket: "hammad-tariq-com.appspot.com",
  messagingSenderId: "221244520282",
  appId: "1:221244520282:web:63da9cf58697ce6f44a563"
};

firebase.initializeApp(firebaseConfig);
var messagesRef = firebase.database().ref('messages');

document.getElementById('contactform').addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();
  var name = getInputVal('name');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message to Firebase
  saveMessage(name, email, phone, message);

  // Send email using email.js
  emailjs.send("service_i7hz09b", "template_rfhi4o3", {
    to_email: email,
    from_name: name,
    from_email: email, 
    message: message 
  })
  .then(function(response) {
    console.log('Email sent successfully:', response);

    // Display success message
    document.querySelector('.alert').style.display = 'block';

    // Reset the form after a delay
    setTimeout(function () {
      document.querySelector('.alert').style.display = 'none';
      document.getElementById('contactform').reset();
    }, 1000);
  })
  .catch(function(error) {
    console.error('Error sending email:', error);
    // Handle the error
  });
}

function getInputVal(id) {
  return document.getElementById(id).value;
}

function saveMessage(name, email, phone, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    phone: phone,
    message: message
  });
}