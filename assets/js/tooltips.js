const tooltips = document.querySelectorAll(".tooltip");

document.addEventListener("click", function (e) {
    tooltips.forEach((tooltip) => {
        var insideTooltip = tooltip.contains(e.target);

        if (!insideTooltip) {
            tooltip.removeAttribute("open");
        }
    });
});