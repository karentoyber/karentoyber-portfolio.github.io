document.addEventListener("DOMContentLoaded", () => {
    let images = [
        {
            src: 'images/image1-medium.jpg',
            srcset: 'images/image1-small.png 480w, images/image1-medium.png 960w, images/image1-large.png 1440w',
            text: 'I\'m always up for an adventure! This is a picture from my first ever hike in Upstate New York where I completed the Lemon Squeeze trail, a challenging but rewarding 4-hour climb.'
        },
        {
            src: 'images/image3-medium.jpg',
            srcset: 'images/image3-small.png 480w, images/image3-medium.png 960w, images/image3-large.png 1440w',
            text: 'When I need a break from academics and work, I love spending time outdoors. Recently, I went on a trip where some friends and I camped for one night in Long Island.'
        },
        {
            src: 'images/image4-medium.jpg',
            srcset:'images/image4-small.png 480w, images/image4-medium.png 960w, images/image4-large.png 1440w',
            text: 'I enjoy professional events and got the opportunity of a lifetime to go to training at the KPMG Lakehouse for my upcoming summer internship where I will be rotating between the Audit, Tax, and Advisory divisions.'
        }
    ];

    let currentIndex = 0;

    let carouselImage = document.getElementById('carousel-image');
    let carouselText = document.getElementById('carousel-text');
    let prevButton = document.getElementById('prev');
    let nextButton = document.getElementById('next');

    let updateCarousel = () => {
        if (carouselImage && carouselText) {
            carouselImage.src = images[currentIndex].src;
            carouselImage.srcset = images[currentIndex].srcset;
            carouselText.innerHTML = `<p>${images[currentIndex].text}</p>`;
        } else {
            console.error('Carousel elements not found.');
        }
    };

    if (prevButton && nextButton) {
        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateCarousel();
        });

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length;
            updateCarousel();
        });
    } else {
        console.error('Navigation buttons not found.');
    }

    updateCarousel();
});