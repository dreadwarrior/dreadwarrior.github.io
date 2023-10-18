const genreLinks = document.querySelectorAll("a[data-genres]");

document.querySelector('#filter-genre').addEventListener('change', function () {
    const genre = document.querySelector('#filter-genre').value;

    genreLinks.forEach((it) => it.style.display = 'block');

    if (genre !== "clear-genre-filter") {
        [...genreLinks].filter((it) => !it.dataset.genres.includes(genre)).forEach((it) => it.style.display = 'none');
    }
});