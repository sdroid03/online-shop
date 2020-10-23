authorization.addEventListener("click", authorizationModal);
account.addEventListener("click", accountModal);

function authorizationModal() {
    Swal.fire({
        showCloseButton: true,
        title: 'Авторизация',
        icon: 'error',
        text: 'В разработке!'
    })
}

function accountModal() {
    Swal.fire({
        showCloseButton: true,
        title: 'Личный кабинет',
        icon: 'error',
        text: 'В разработке!'
    })
}