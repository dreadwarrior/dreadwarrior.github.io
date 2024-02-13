function toggleClass(classList) {
    return (from, to) => {
        classList.remove(from);
        classList.add(to);
    }
}

function mainNavigation() {
    const toggleButton = document.querySelector('#main-menu-toggle');
    const toggleIcon = toggleClass(toggleButton.querySelector('.fas').classList);

    const mainNavigationWrap = document.querySelector('.navigation__wrap--main');

    toggleButton.addEventListener('click', (e) => {
        const openState = mainNavigationWrap.dataset.open;

        if (openState === 'false') {
            mainNavigationWrap.dataset.open = 'true';

            toggleIcon('fa-bars', 'fa-times');
        } else {
            mainNavigationWrap.dataset.open = 'false';

            toggleIcon('fa-times', 'fa-bars');
        }

        e.preventDefault(); // Cancel the native event
        e.stopPropagation();// Don't bubble/capture the event any further
    });
}

function tocNavigation() {
    const tocLinks = document.querySelectorAll('.menu--toc a');

    tocLinks.forEach((it) => it.addEventListener('click', (e) => {
        it.scrollIntoView({
            inline: 'center'
        });
    }));
}

export function navigation() {
    mainNavigation();
    tocNavigation();
}