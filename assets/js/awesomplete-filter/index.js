function install(group, filterTargetsSelector, datasetName) {
    window.addEventListener('load', function () {
        const input = group.querySelector('input');
        const trigger = group.querySelector('button[aria-controls]');
        const clear = group.querySelector('button[type="reset"]');

        const filterTargets = document.querySelectorAll(filterTargetsSelector);

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
            } else if (comboplete.ul.hasAttribute('hidden')) {
                comboplete.open();
            } else {
                comboplete.close();
            }
        });
        Awesomplete.$(clear).addEventListener('click', () => {
            input.value = '';

            comboplete.evaluate();
            comboplete.close();

            filterTargets.forEach((it) => it.style.display = 'block');
        });
        input.addEventListener('awesomplete-selectcomplete', (event) => {
            const filterValue = event.text.value;

            filterTargets.forEach((it) => it.style.display = 'block');

            [...filterTargets]
                .filter((it) => !it.dataset[datasetName].includes(filterValue))
                .forEach((it) => it.style.display = 'none');
        });
        input.addEventListener('awesomplete-close', (event) => {
            if (event.reason === 'blur' || event.reason === 'esc') {
                if (input.value === '') {
                    filterTargets.forEach((it) => it.style.display = 'block');
                }
            }
        })
    });

}

export function awesompleteFilter(filterTargetsSelector, datasetName) {
    const group = document.querySelector('.control-group--awesomplete');

    if (group != null) {
        install(group, filterTargetsSelector, datasetName);
    }
}