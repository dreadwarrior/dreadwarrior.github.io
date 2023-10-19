const topicLinks = document.querySelectorAll("a[data-topics]");

document.querySelector('#filter-topic').addEventListener('change', function () {
    const topic = document.querySelector('#filter-topic').value;

    topicLinks.forEach((it) => it.style.display = 'block');

    if (topic !== "clear-topic-filter") {
        [...topicLinks]
            .filter((it) => !it.dataset.topics.includes(topic))
            .forEach((it) => it.style.display = 'none');
    }
});