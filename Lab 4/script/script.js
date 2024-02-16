document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const projects = carousel.querySelectorAll('.project');
    let currentIndex = 0;

    // Function to move to the next project
    function moveToNext() {
        if (currentIndex < projects.length - 1) {
            currentIndex++;
            projects[currentIndex].scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Function to move to the previous project
    function moveToPrevious() {
        if (currentIndex > 0) {
            currentIndex--;
            projects[currentIndex].scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Listen for arrow key presses
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowRight') {
            moveToNext();
        } else if (event.key === 'ArrowLeft') {
            moveToPrevious();
        }
    });
});