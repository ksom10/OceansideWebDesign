document.addEventListener("DOMContentLoaded", () => {
    const portfolioData = [
        {
            index: "W — 001",
            title: "McDonald's",
            description: "Driving digital transformation to create a multi-billion dollar sales channel.",
            logo: "./images/mccracken.png",
            preview: "./images/mccracken-preview.jpg"
        },
        {
            index: "W — 002",
            title: "NBCU",
            description: "Introducing an Intelligent Experience to the 2024 Paris Olympics.",
            logo: "./images/nbcu-logo.png",
            preview: "./images/nbcu-preview.jpg"
        },
        {
            index: "W — 003",
            title: "Coca-Cola",
            description: "Reimagining the digital brand experience for Coca-Cola.",
            logo: "./images/cocacola-logo.png",
            preview: "./images/cocacola-preview.jpg"
        }
    ];

    let currentIndex = 0;

    const portfolioWrapper = document.querySelector(".portfolio-wrapper");
    const portfolioIndex = document.querySelector(".portfolio-index");
    const portfolioTitle = document.querySelector(".portfolio-title");
    const portfolioLink = document.querySelector(".portfolio-link");
    const portfolioLogo = document.querySelector(".portfolio-image-logo img");
    const portfolioPreview = document.querySelector(".preview-image");
    const portfolioDescription = document.querySelector(".portfolio-description");

    function updatePortfolio(index) {
        portfolioWrapper.classList.add("fade-out");
        setTimeout(() => {
            const data = portfolioData[index];
            portfolioIndex.textContent = data.index;
            portfolioTitle.textContent = data.title;
            portfolioLink.href = "#";
            portfolioLogo.src = data.logo;
            portfolioPreview.src = data.preview;
            portfolioDescription.textContent = data.description;
            portfolioWrapper.classList.remove("fade-out");
        }, 300); // Duration of fade-out animation
    }

    window.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY;
        const newIndex = Math.floor(scrollPosition / window.innerHeight) % portfolioData.length;
        if (newIndex !== currentIndex) {
            currentIndex = newIndex;
            updatePortfolio(currentIndex);
        }
    });
});
