:root {
    --bg-dark: #0f0f1a;
    --bg-light: #f5f5f5;
    --text-dark: #ffffff;
    --text-light: #111111;
    --accent: #00f0ff;
}

body {
    margin: 0;
    font-family: 'Segoe UI', sans-serif;
    background: var(--bg-dark);
    color: var(--text-dark);
    overflow-x: hidden;
    transition: 0.4s ease;
}

body.light {
    background: var(--bg-light);
    color: var(--text-light);
}

canvas {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
}

header {
    position: fixed;
    width: 100%;
    padding: 20px 8%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    backdrop-filter: blur(15px);
    background: rgba(0,0,0,0.3);
    z-index: 1000;
}

nav a {
    margin: 0 15px;
    text-decoration: none;
    color: inherit;
    font-weight: 500;
    position: relative;
}

nav a::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0%;
    height: 2px;
    background: var(--accent);
    transition: 0.3s;
}

nav a:hover::after {
    width: 100%;
}

.section {
    min-height: 100vh;
    padding: 150px 8%;
    text-align: center;
}

.hero .title {
    font-size: 3.5rem;
}

.magnetic {
    margin-top: 30px;
    padding: 15px 40px;
    border-radius: 40px;
    border: none;
    background: var(--accent);
    font-weight: bold;
    cursor: pointer;
}

.cards {
    display: flex;
    justify-content: center;
    gap: 40px;
    flex-wrap: wrap;
}

.card {
    width: 250px;
    height: 250px;
    border-radius: 20px;
    backdrop-filter: blur(20px);
    background: rgba(255,255,255,0.05);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: grab;
    transition: transform 0.4s ease;
}

.card:hover {
    transform: scale(1.1);
}

#themeToggle {
    border: none;
    padding: 8px 15px;
    border-radius: 20px;
    cursor: pointer;
}

@media (max-width: 768px) {
    .cards {
        flex-direction: column;
        align-items: center;
    }
}
