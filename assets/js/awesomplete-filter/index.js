const create = group => {
    const filterSource = group.dataset.filterSource;
    const filterTarget = group.dataset.filterTarget;

    const input = group.querySelector('input');
    const trigger = group.querySelector('button[aria-controls]');
    const clear = group.querySelector('button[type="reset"]');

    const awesompleteInstance = new Awesomplete(
        input,
        {
            minChars: 0,
            sort: false,
            replace: function(suggestion) {
                this.input.value = suggestion.label;
            }
        }
    );

    trigger.addEventListener('click', function() {
        if (awesompleteInstance.ul.childNodes.length === 0) {
            awesompleteInstance.evaluate();
        } else if (awesompleteInstance.ul.hasAttribute('hidden')) {
            awesompleteInstance.open();
        } else {
            awesompleteInstance.close();
        }
    });
    clear.addEventListener('click', () => {
        input.value = '';

        awesompleteInstance.evaluate();
        awesompleteInstance.close();
    });
    input.addEventListener('awesomplete-selectcomplete', (event) => {
        const url = event.text.value;
        htmx.ajax(
            'GET',
            url,
            {
                'target': filterTarget,
                'select': filterSource,
                'swap': 'outerHTML'
            }
        );
    });
    input.addEventListener('awesomplete-close', (event) => {
        if (event.reason === 'blur' || event.reason === 'esc') {
            if (input.value === '') {
                clear.click();
            }
        }
    })
};

export function awesompleteFilter() {
    const group = document.querySelector('.control-group--awesomplete');

    if (group != null) {
        window.addEventListener('load', function () {
            create(group)
        });
    }
}