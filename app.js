// Simple logic to log which section is being viewed
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const top = section.offsetTop;
        if (window.scrollY >= top - 100) {
            console.log("Viewing: " + section.getAttribute('id'));
            // You can add code here to highlight the active link
        }
    });
});