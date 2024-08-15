// modal setting
function Reveal() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})

// Carousel Show
const carouselImages = document.querySelectorAll('.carousel-image');
let currentIndex = 0;

function showImage(index){
    carouselImages.forEach((image, i) => {
        if(i==index) image.classList.add('active');
        else image.classList.remove('active');
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % carouselImages.length;
    showImage(currentIndex);
}

showImage(currentIndex);
setInterval(nextImage, 4000);

// Cart
let count = 0;
function openSideBar(){
  document.getElementById("cartSidebar").style.width= "30rem";
  document.getElementById("bodyWrap").style.marginRight= "30rem";
  document.getElementById("cartSidebar").style.borderColor = "#03b62a";
}
function closeSideBar(){
  document.getElementById("cartSidebar").style.width= "0rem";
  document.getElementById("bodyWrap").style.marginRight= "0rem";
  document.getElementById("cartSidebar").style.borderColor = "white"
}