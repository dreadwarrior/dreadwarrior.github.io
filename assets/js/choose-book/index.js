function selectRandomBook(booklistUri) {
    return fetch(booklistUri)
        .then(it => it.json())
        .then(it => it.books)
        .then(it => it[Math.floor(Math.random() * it.length)]);
}

function renderSweetAlert() {
    return book => Swal.fire({
        titleText: book.title,
        imageUrl: book.cover.url,
        imageWidth: book.cover.width,
        confirmButtonText: 'Buch anzeigen',
        preConfirm: () => {
            return book.permalink;
        },
        showDenyButton: true,
        denyButtonText: 'Anderes Buch wählen',
        showCloseButton: true,
        buttonsStyling: false,
        customClass: {
            confirmButton: 'button button--primary pure-button',
            denyButton: 'button button--secondary pure-button'
        }
    })
}

function handleSweetAlertResult(booklistUri) {
    return sweetAlertResult => {
        if (sweetAlertResult.isConfirmed) {
            // .value is overridden by using `preConfirm` in Swal setup.
            window.location = sweetAlertResult.value;
        }
        if (sweetAlertResult.isDenied) {
            showPopup(booklistUri);
        }
    };
}

function showPopup(booklistUri) {
    selectRandomBook(booklistUri)
        .then(renderSweetAlert())
        .then(handleSweetAlertResult(booklistUri))
}

export function chooseBook(selector) {
    const button = document.querySelector(selector);
    if (button != null) {
        button.addEventListener('click', () => showPopup(button.dataset.bookList));
    }
}