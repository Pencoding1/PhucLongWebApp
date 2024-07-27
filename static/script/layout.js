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
