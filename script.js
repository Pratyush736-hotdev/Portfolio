gsap.registerPlugin(ScrollTrigger);

/* =========================
   GSAP Animations
========================= */

gsap.from(".title", {
    y: 100,
    opacity: 0,
    duration: 1.5,
    ease: "power4.out"
});

gsap.utils.toArray(".section").forEach(section => {
    gsap.from(section.children, {
        scrollTrigger: section,
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2
    });
});

/* =========================
   Magnetic Button
========================= */

const magnetic = document.querySelector(".magnetic");
magnetic.addEventListener("mousemove", e => {
    const rect = magnetic.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width/2;
    const y = e.clientY - rect.top - rect.height/2;
    magnetic.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
});
magnetic.addEventListener("mouseleave", () => {
    magnetic.style.transform = "translate(0,0)";
});

/* =========================
   Draggable Cards (Mouse + Touch)
========================= */

document.querySelectorAll(".draggable").forEach(card => {

    let isDragging = false;

    const startDrag = (x,y) => {
        isDragging = true;
        card.style.position = "absolute";
        card.style.left = x - card.offsetWidth/2 + "px";
        card.style.top = y - card.offsetHeight/2 + "px";
    };

    const moveDrag = (x,y) => {
        if(isDragging){
            card.style.left = x - card.offsetWidth/2 + "px";
            card.style.top = y - card.offsetHeight/2 + "px";
        }
    };

    card.addEventListener("mousedown", e => startDrag(e.pageX,e.pageY));
    document.addEventListener("mousemove", e => moveDrag(e.pageX,e.pageY));
    document.addEventListener("mouseup", ()=> isDragging=false);

    card.addEventListener("touchstart", e => {
        let touch = e.touches[0];
        startDrag(touch.pageX,touch.pageY);
    });

    document.addEventListener("touchmove", e => {
        let touch = e.touches[0];
        moveDrag(touch.pageX,touch.pageY);
    });

    document.addEventListener("touchend", ()=> isDragging=false);
});

/* =========================
   Dark / Light Toggle
========================= */

const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", ()=>{
    document.body.classList.toggle("light");
});

/* =========================
   Three.js Background
========================= */

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById("bg"),
    alpha: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

camera.position.z = 5;

const geometry = new THREE.BufferGeometry();
const vertices = [];

for (let i = 0; i < 5000; i++) {
    vertices.push(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
    );
}

geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

const material = new THREE.PointsMaterial({
    color: 0x00f0ff,
    size: 0.03
});

const particles = new THREE.Points(geometry, material);
scene.add(particles);

function animate() {
    requestAnimationFrame(animate);
    particles.rotation.y += 0.0008;
    particles.rotation.x += 0.0005;
    renderer.render(scene, camera);
}

animate();

window.addEventListener("resize", ()=>{
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
