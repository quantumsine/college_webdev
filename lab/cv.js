function toggleModeSwitch() {
    const body = document.body;
    const button = document.getElementById("toggleLightMode");

    body.classList.toggle("light-mode");

    if (body.classList.contains("light-mode")) {
        button.textContent = "Dark Mode";
        localStorage.setItem("theme", "light");
    } else {
        button.textContent = "Light Mode";
        localStorage.setItem("theme", "dark");
    }

}

window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    const button = document.getElementById("toggleLightMode");

    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
        button.textContent = "Dark Mode";
    }

    button.addEventListener("click", toggleModeSwitch);
});