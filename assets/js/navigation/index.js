function toggleClass(classList) {
    return (from, to) => {
        classList.remove(from);
        classList.add(to);
    }
}

export function navigation() {
    const toggleButton = document.querySelector('#main-menu-toggle');
    const toggleIcon = toggleClass(toggleButton.querySelector('.fas').classList);

    const mainNavigationWrap = document.querySelector('.navigation__wrap--main');

    toggleButton.addEventListener('click', () => {
        const openState = mainNavigationWrap.dataset.open;
        if (openState === 'false') {
            mainNavigationWrap.dataset.open = 'true';

            toggleIcon('fa-bars', 'fa-times');
        } else {
            mainNavigationWrap.dataset.open = 'false';

            toggleIcon('fa-times', 'fa-bars');
        }
    });
}