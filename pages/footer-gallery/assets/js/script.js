document.addEventListener("DOMContentLoaded", () => {
    // Example of how to apply different styles dynamically
    const header = document.getElementById("header");
    const footer = document.getElementById("footer");

    // Set a specific animated style for header and footer
    header.classList.add("header-animated-1"); // Change this class to apply different animated styles
    footer.classList.add("footer-animated-1"); // Change this class to apply different animated styles

    // You can switch to other animated styles by changing the class names above
    // e.g., header.classList.add("header-animated-2");
    // e.g., footer.classList.add("footer-animated-2");

    // Example to apply the new static header style
    // header.classList.add("header-style-6"); // Uncomment to apply the new static style
});

function navigateTo(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}
