function getRandomLightColor() {
    const r = Math.floor(Math.random() * 156) + 100; // 100–255 범위
    const g = Math.floor(Math.random() * 156) + 100;
    const b = Math.floor(Math.random() * 156) + 100;
    return `rgb(${r}, ${g}, ${b})`;
}

document.addEventListener("DOMContentLoaded", () => {
    document.body.style.backgroundColor = getRandomLightColor();
});
