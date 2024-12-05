document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("contrast-toggle");

    if (localStorage.getItem("highContrast") === "enabled") {
        document.body.classList.add("high-contrast");
        toggleButton.classList.add("high-contrast");
    }

    toggleButton.addEventListener("click", function () {
        document.body.classList.toggle("high-contrast");
        toggleButton.classList.toggle("high-contrast");

        if (document.body.classList.contains("high-contrast")) {
            localStorage.setItem("highContrast", "enabled");
        } else {
            localStorage.removeItem("highContrast");
        }
    });
});
