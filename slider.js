const slider = function () {

    const slides = document.querySelectorAll('.product-img');
    const sliderBtnRight = document.querySelector('.slider_btn-right');
    const sliderBtnLeft = document.querySelector('.slider_btn-left');


    let curSlide = 0;
    let maxSlides = slides.length;




    // const activeSlide = function (slide) {
    //     document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'));

    //     document.querySelector(`.dots__dot[data-slide = "${slide}"]`).classList.add('dots__dot--active');
    // };

    // slides.forEach((s, i) => s.style.transform = `translateX(${100 * i}%)`);
    const goToSlide = function (slide) {
        slides.forEach((s, i) => {
            // s.style.transform = `translateX(${100 * (i - slide)}%)`;
            s.style.transform = `translateX(${(100 * i) - 100 * slide}%)`;
        });
    };

    // Next slide
    const nextSlide = function () {
        curSlide++;
        if (curSlide === maxSlides) {
            curSlide = 0;
        }
        goToSlide(curSlide);
        // activeSlide(curSlide);
    };

    // prev slide
    const prevSlide = function () {
        if (curSlide === 0) {
            curSlide = maxSlides;
        }
        curSlide--;
        goToSlide(curSlide);
        // activeSlide(curSlide);
    };

    const init = function () {
        goToSlide(0);
        // activeSlide(0);
    };
    init();


    // event handlers
    sliderBtnRight.addEventListener('click', nextSlide);
    sliderBtnLeft.addEventListener('click', prevSlide);

    document.addEventListener('keydown', function (e) {
        e.key === 'ArrowLeft' && prevSlide();
        e.key === 'ArrowRight' && nextSlide();

    });

    // dotContainer.addEventListener('click', function (e) {
    //     if (e.target.classList.contains('dots__dot')) {
    //         const slide = e.target.dataset.slide;
    //         goToSlide(slide);
    //         activeSlide(slide);
    //     }
    // });;
};
slider();