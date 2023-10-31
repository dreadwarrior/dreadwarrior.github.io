window.addEventListener('load', function () {
    const group = document.querySelector('.awesomplete-combo-group');
    const input = group.querySelector('input');
    const trigger = group.querySelector('.button-trigger');
    const clear = group.querySelector('.button-clear');

    const topicLinks = document.querySelectorAll('a[data-topics]');

    const comboplete = new Awesomplete(
        input,
        {
            minChars: 0,
            sort: false,
            replace: function(suggestion) {
                this.input.value = suggestion.label;
            }
        }
    );
    Awesomplete.$(trigger).addEventListener('click', function() {
        if (comboplete.ul.childNodes.length === 0) {
            comboplete.evaluate();
            input.focus();
        } else if (comboplete.ul.hasAttribute('hidden')) {
            comboplete.open();
            input.focus();
        } else {
            comboplete.close();
        }
    });
    Awesomplete.$(clear).addEventListener('click', () => {
        input.value = '';

        comboplete.evaluate();
        comboplete.close();

        topicLinks.forEach((it) => it.style.display = 'block');
    });
    input.addEventListener('awesomplete-selectcomplete', (event) => {
        const topic = event.text.value;

        topicLinks.forEach((it) => it.style.display = 'block');

        [...topicLinks]
            .filter((it) => !it.dataset.topics.includes(topic))
            .forEach((it) => it.style.display = 'none');
    });
    input.addEventListener('awesomplete-close', (event) => {
        if (event.reason === 'blur' || event.reason === 'esc') {
            if (input.value === '') {
                topicLinks.forEach((it) => it.style.display = 'block');
            }
        }
    })
});