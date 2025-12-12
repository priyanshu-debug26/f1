const quotes = [
    "📻 BOX BOX....", "📻 NOOOOOOOO", "📻 Must be The Water", "📻 Leave me Alone", "📻 Yabadabadi", "📻 Pole Position"
];

const quoteElement = document.querySelector(".quote");

function randomQuotes() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteElement.textContent = randomQuote;
}

randomQuotes();

setInterval(randomQuotes, 3000);

const images = [
    "Sources/h1.jpg", "Sources/h2.webp", "Sources/h3.webp", "Sources/h4.jpg", "Sources/h5.jpg", "Sources/h6.jpg", "Sources/h7.jpg"
];

let heroIndex = 0;

const imgElement = document.getElementById("f1img");

function randomImage() {
    imgElement.style.opacity = 0;

    setTimeout(() => {
        heroIndex = (heroIndex + 1) % images.length;
        imgElement.src = images[heroIndex];
        imgElement.style.opacity = 1;
    }, 200)
}

setInterval(randomImage, 5000);

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".loader").classList.add("fade");
    }, 4000)
})

document.querySelectorAll(".legends").forEach(container => {
    
    const section = container.querySelector(".shumacher");
    const slider = container.querySelector(".sidescroll");

    document.addEventListener("scroll", () => {
        const rect = container.getBoundingClientRect();
        const total = container.offsetHeight - window.innerHeight;

        let progress = -rect.top / total;
        progress = Math.min(Math.max(progress, 0), 1);

        const maxMove = slider.scrollWidth - section.clientWidth;

        slider.style.transform = `translateX(${-progress * maxMove}px)`;
    });
});