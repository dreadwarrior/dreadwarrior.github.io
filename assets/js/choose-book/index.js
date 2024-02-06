function selectRandomBook(booklistUri) {
    return fetch(booklistUri)
        .then(it => it.json())
        .then(it => it.books)
        .then(it => it[Math.floor(Math.random() * it.length)]);
}

function updateDialog(dialog) {
    const form = dialog.querySelector('form');
    const title = dialog.querySelector('.dialog__title');
    const img = dialog.querySelector('img');

    return book => {
        form.action = book.permalink;
        title.textContent = book.title;

        img.src = book.cover.url;
        img.width = book.cover.width;
        img.height = book.cover.height;

        return dialog;
    }

}

function openDialog() {
    return dialog => dialog.showModal();
}

function handleDialogResult(dialog, booklistUri) {
    const returnValue = dialog.returnValue;

    if (returnValue === 'continue') {
        showDialog(dialog, booklistUri);
    }
}

function showDialog(dialog, booklistUri) {
    selectRandomBook(booklistUri)
        .then(updateDialog(dialog))
        .then(openDialog())
}

export function chooseBook(dialogSelector) {
    const dialog = document.querySelector(dialogSelector);
    const button = document.querySelector(dialogSelector + " + button");

    if (dialog != null && button != null) {
        dialog.addEventListener('close', () => handleDialogResult(dialog, button.dataset.bookList));
        button.addEventListener('click', () => showDialog(dialog, button.dataset.bookList));
    }
}