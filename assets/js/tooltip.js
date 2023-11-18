const tooltip = document.querySelector(".tooltip");

document.addEventListener("click", function (e) {
    var insideTooltip = tooltip.contains(e.target);

    if (!insideTooltip) {
        tooltip.removeAttribute("open");
    }
});