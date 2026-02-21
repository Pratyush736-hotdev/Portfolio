// Custom Cursor
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

// Scroll Reveal
const reveals = document.querySelectorAll('.reveal');
window.addEventListener('scroll', () => {
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        if (revealTop < windowHeight - 100) {
            el.classList.add('active');
        }
    });
});

// Draggable Elements
document.querySelectorAll('.draggable').forEach(element => {
    element.addEventListener('mousedown', function (e) {
        let shiftX = e.clientX - element.getBoundingClientRect().left;
        let shiftY = e.clientY - element.getBoundingClientRect().top;

        function moveAt(pageX, pageY) {
            element.style.position = 'absolute';
            element.style.left = pageX - shiftX + 'px';
            element.style.top = pageY - shiftY + 'px';
        }

        function onMouseMove(e) {
            moveAt(e.pageX, e.pageY);
        }

        document.addEventListener('mousemove', onMouseMove);

        document.addEventListener('mouseup', function () {
            document.removeEventListener('mousemove', onMouseMove);
        }, { once: true });
    });

    element.ondragstart = () => false;
});

// Magnetic Button Effect
const magneticBtn = document.querySelector('.magnetic');
magneticBtn.addEventListener('mousemove', function(e) {
    const rect = magneticBtn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width/2;
    const y = e.clientY - rect.top - rect.height/2;
    magneticBtn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
});

magneticBtn.addEventListener('mouseleave', function() {
    magneticBtn.style.transform = `translate(0px,0px)`;
});

// Parallax Effect
document.addEventListener('mousemove', (e) => {
    document.querySelectorAll('.floating').forEach(shape => {
        let speed = 0.02;
        let x = (window.innerWidth - e.pageX * speed) / 100;
        let y = (window.innerHeight - e.pageY * speed) / 100;
        shape.style.transform = `translate(${x}px, ${y}px)`;
    });
});
