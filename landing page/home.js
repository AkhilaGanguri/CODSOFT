function imgSlider(anything){
    document.querySelector('.starbucks').src=anything;
}
function changeCircleColor(color){
    const circle=document.querySelector('.circle');
    circle.style.background=color;
}


// Function to scroll to the target section smoothly
function scrollToSection(targetId) {
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    }
}

