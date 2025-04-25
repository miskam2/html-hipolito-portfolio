document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('galaxyVideo');
    try {
        video.play().catch(e => {
            console.log("Autoplay prevented, showing fallback:", e);
            
            video.muted = true;
            video.play();
        });
    } catch (e) {
        console.log("Video play error:", e);
    }
});


function showSidebar() {
    document.querySelector('.sidebar').classList.add('active');
    document.getElementById('main-content').classList.add('blur');
    document.body.style.overflow = 'hidden';
}

function hideSidebar() {
    document.querySelector('.sidebar').classList.remove('active');
    document.getElementById('main-content').classList.remove('blur');
    document.body.style.overflow = 'auto';
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});