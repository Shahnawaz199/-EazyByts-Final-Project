const navbar = document.querySelector("nav");
window.addEventListener("scroll", ()=>
  navbar,classList.toggle("sticky", window.scrolly > 0)
);

const menu = document.querySelector(".menu");
const toggleMenu = ()=> menu.classList.toggle("active");

document.querySelector(".menu-btn").addEventListener("click", toggleMenu);
document.querySelector(".close-btn").addEventListener("click", toggleMenu);

document
.querySelectorAll(".menu a")
.forEach((link) => link.addEventListener("click", toggleMenu));



// Firebase configuration (replace with your Firebase config keys)
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "
carrental-967a2",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();