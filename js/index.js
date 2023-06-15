// navigation bar on scroll effect and scroll progress bar
const navigationBar = document.getElementById('navigation-bar');
const container = document.querySelector("body");
const highlight = document.getElementById("bar-highlight");

//back to top button
let mybutton = document.getElementById("myBtn");

mybutton.onclick = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = () => {
    // scroll effect navbar
    if (scrollY > 80) {
        navigationBar.style.backgroundColor = "#00acee";
    }
    else {
        navigationBar.style.backgroundColor = "black";
    }

    // scroll progress bar
    let cheight = container.offsetHeight - window.innerHeight;
    let cpos = container.getBoundingClientRect();
    let diff = cheight + cpos.top;
    let progress = diff / cheight * 100;
    let csswidth = Math.floor(100 - progress);
    highlight.style.width = csswidth + "%";

    //back to top button
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }

}

// navigation bar on click effect 
const phoneBar = document.getElementById('phone-bar');
const phoneNav = document.querySelector('header .middle');

phoneBar.onclick = () => {
    phoneNav.classList.toggle("active")

    if (phoneNav.classList.contains("active")) {
        phoneBar.classList.replace("fa-bars", "fa-xmark")
    } else {
        phoneBar.classList.replace("fa-xmark", "fa-bars")

    }
}

// navigation bar links on click effect 
const navLinks = document.querySelectorAll('header .middle ul li a');

navLinks.forEach((element) => {
    element.onclick = () => {
        phoneNav.classList.remove("active")
        phoneBar.classList.replace("fa-xmark", "fa-bars")
    }
})

// Auto update year 
const yearUpdate = document.getElementById("update-year");
yearUpdate.innerHTML = new Date().getFullYear();

// right click disable 
document.oncontextmenu = (element) => {
    element.preventDefault();
}

// sign in sign up section  
const userbar = document.querySelectorAll(".user-bar");
const signupcard = document.getElementById("sign-up-card");
const signuppopup = document.getElementById("sign-up-pop-up");
const signinpopup = document.getElementById("sign-in-pop-up");
const hidecard = document.querySelectorAll(".hide-card");

userbar.forEach((element) => {
    element.onclick = () => {
        signinpopup.classList.toggle("active");
        signuppopup.classList.remove("active");
    }
});

signupcard.onclick = () => {
    signinpopup.classList.remove("active");
    signuppopup.classList.add("active");
}

hidecard.forEach((element) => {
    element.onclick = () => {
        signinpopup.classList.remove("active");
        signuppopup.classList.remove("active");
    }
});

// cookie set 
const cookieBox = document.querySelector(".cookie");
const acceptBtn = document.querySelector(".cookie .right .accept");
const rejectBtn = document.querySelector(".cookie .right .reject");

setTimeout(() => {
    cookieBox.style.visibility = "visible";
}, 5000);

rejectBtn.onclick = () => {
    cookieBox.style.visibility = "hidden";
    setTimeout(() => {
        cookieBox.style.visibility = "visible";
    }, 60000);
}

acceptBtn.onclick = () => {
    document.cookie = "fname=Arafat; max-age=" + 60 * 60 * 24 * 30;
    document.cookie = "lname=Akash; max-age=" + 60 * 60 * 24 * 30;
    if (document.cookie) {
        cookieBox.classList.add("hide");
    }
    else {
        alert("Cookie can't be set");
    }
}

let check = document.cookie.indexOf("fname=Arafat");
check != -1 ? cookieBox.classList.add("hide") : cookieBox.classList.remove("hide");