const toggleButton = document.getElementById("theme-toggle");

if (toggleButton) {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const storedTheme = localStorage.getItem("theme");
    const initialTheme = storedTheme || (prefersDark ? "dark" : "light");

    const setTheme = (theme) => {
        document.documentElement.setAttribute("data-theme", theme);
        toggleButton.setAttribute("aria-pressed", theme === "dark");
        toggleButton.textContent = theme === "dark" ? "Light mode" : "Dark mode";
    };

    setTheme(initialTheme);

    toggleButton.addEventListener("click", () => {
        const current = document.documentElement.getAttribute("data-theme");
        const next = current === "dark" ? "light" : "dark";
        setTheme(next);
        localStorage.setItem("theme", next);
    });
}
