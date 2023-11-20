export function tooltip(selector) {
    const tooltips = document.querySelectorAll(selector);

    document.addEventListener("click", function (e) {
        tooltips.forEach((tooltip) => {
            const insideTooltip = tooltip.contains(e.target);

            if (!insideTooltip) {
                tooltip.removeAttribute("open");
            }
        });
    });
}