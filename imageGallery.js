'use strict';

let position = 0;
let slides = document.getElementsByClassName("slide");
const thumbnails = document.getElementsByClassName("thumbnail");
let t;

// Η function που θα εκτελεστεί όταν το play πατηθεί
function play() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  position++;
  if (position > slides.length) {
      position = 1
    }
  
  slides[position-1].style.display = "block"; 
  if(t){
      clearTimeout(t);
  }
    t = setTimeout(play, 2000);
  }


const playButton = document.getElementById("play");

// Όταν πατήσουμε το play, θα αφαιρεθεί η κλάση .first από την slide[0] (η οποία χρησιμεύει ως preview της image gallery) και θα εκτελεστεί η play function
playButton.addEventListener('click', (event) =>{
    slides[0].classList.remove("first");
    play();
});

const pauseButton = document.getElementById("pause");

// Όταν ο χρήστης πατήσει το pause, το setTimeout απενεργοποιείται και ο χρήστης βλέπει το slide στο οποίο βρισκόταν όταν πάτησε το pause
pauseButton.addEventListener('click', () => {
    clearTimeout(t);
})

const nextSlide = document.getElementById("right-arrow");

// Όταν πατηθεί το δεξί βέλος, ο χρήστης μεταβαίνει στο επόμενο slide και μένει εκεί
nextSlide.addEventListener('click', () => {
    clearTimeout(t);
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    position++;
    if (position > slides.length) {
        position = 1
    }    
  
    slides[position-1].style.display = "block"; 
})

const previousSlide = document.getElementById("left-arrow");

// Όταν πατηθεί το αριστερό βέλος, ο χρήστης μεταβαίνει στο προηγούμενο slide και μένει εκεί
previousSlide.addEventListener('click', () => {
    clearTimeout(t);
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    position--;
    if (position < 0){
        position = slides.length-1;
    }
    slides[position].style.display = "block"; 
})


/* Τα παρακάτω είναι onclick events όπου όταν πατάμε σε ένα thumbnails, μεταβαίνουμε στο slide με την αντίστοιχη εικόνα και ορίζουμε το position
έτσι ώστε όταν πατηθεί το play να συνεχίσει από εκείνο το σημείο η παρουσίαση */
const tn1 = document.getElementById('tn1');

tn1.onclick = () => {
    clearTimeout(t);
    position = 1;
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      slides[position-1].style.display = "block";
    }

const tn2 = document.getElementById('tn2');

tn2.onclick = () => {
    clearTimeout(t);
    position = 2;
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      slides[position-1].style.display = "block";
    }

const tn3 = document.getElementById('tn3');

tn3.onclick = () => {
    clearTimeout(t);
    position = 3;
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
    slides[position-1].style.display = "block";  
}
const tn4 = document.getElementById('tn4');

tn4.onclick = () => {
    clearTimeout(t);
    position = 4;
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      slides[position-1].style.display = "block";
    }
const tn5 = document.getElementById('tn5');

tn5.onclick = () => {
    clearTimeout(t);
    position = 5;
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      slides[position-1].style.display = "block";
    }


