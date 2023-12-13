let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
    checkPhoto();
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
    checkPhoto();
}

function showSlides(n) {
    //The idea here is to have an array with each position representing a photo. The photos are always there, we just need to set display
    //to the one we need. We hide all of them, except for the current index. When we reach max, we cycle back to start.
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    if (slides[slideIndex - 1] != undefined) {
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

}
function checkPhoto() {
    if (document.getElementById("photo1").style.display == "block") {
        document.getElementById("title").innerText = "The Marketplace";
        document.getElementById("descriptionText").innerText = "This urban eatery includes Middle Eastern-themed, made to order grilled meats, shawarmas; El Fuego serves enchiladas, tacos, and burrito bowls.  Escape to New York for pizza, salads & garlic rolls or sink your teeth into our hand-crafted sandwiches, sushi, and wraps from the Deli, or build your own bowl of noodles from our Far East menu. The Marketplace also offers a variety of smoothies, acai bowls, and frozen treats."
        document.body.style.backgroundImage = "url(food.png)"
    }
    else if (document.getElementById("photo2").style.display == "block") {
        document.getElementById("title").innerText = "The Arts Center";
        document.getElementById("descriptionText").innerText = "The Arts Center at NYU Abu Dhabi offers NYUAD compelling programming that connects to the curriculum and illuminates the scholarly pursuits of students and faculty. Its range of public programs aim to animate and enrich the cultural life of both Abu Dhabi and the university through interaction."
        document.body.style.backgroundImage = "url(arts.png)"
    }
    else if (document.getElementById("photo3").style.display == "block") {
        document.getElementById("title").innerText = "Athletics Center";
        document.getElementById("descriptionText").innerText = "The NYU Abu Dhabi Fitness Center is a state-of-the-art facility located in the Campus Center building. The facility is fully equipped with cardiovascular exercise, resistance, and free weight training equipment.";
        document.body.style.backgroundImage = "url(sports.png)"
    }
}
//On load, set the photo 1.
document.addEventListener("DOMContentLoaded", (event) => {
    console.log("Loaded");
    currentSlide(slideIndex);
    checkPhoto();
});

function clickedSubmit(){
    alert("Thanks for submitting, we will contact you shortly.")
}

