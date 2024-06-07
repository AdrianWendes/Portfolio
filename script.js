window.addEventListener("load", function () {
    const loader = document.querySelector(".loader-wrapper");
    const content = document.getElementById("content");

    setTimeout(function () {
        loader.style.display = "none";
        content.style.display = "block";
    }, 2000);
});

document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    document.querySelector('header').classList.toggle('dark-theme');
    document.querySelectorAll('section').forEach(section => section.classList.toggle('dark-theme'));
    document.querySelectorAll('.project').forEach(project => project.classList.toggle('dark-theme'));
    document.querySelector('footer').classList.toggle('dark-theme');
    document.querySelector('.contact-box').classList.toggle('dark-theme');
    document.getElementById('theme-toggle').classList.toggle('dark-theme');

const themeIcon = document.getElementById('theme-icon');
if (document.body.classList.contains('dark-theme')) {
    themeIcon.textContent = '🌜';
} else {
    themeIcon.textContent = '🌞';
}
});
