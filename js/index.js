const btn = document.querySelector('#btn-modal'),
    modal = document.querySelector('#modal-call'),
    close = modal.querySelector('#close');

btn.addEventListener('click', () => {
    modal.classList.add('modal--active');
    setTimeout(() => {
        modal.classList.remove('modal--active');
    }, 5000)
});

close.addEventListener('click', () => {
    modal.classList.remove('modal--active');
});

document.addEventListener('click', e => {
    const target = e.target;

    if (target.closest('.modal--active') && !target.closest('.modal-dialog')) {
        modal.classList.remove('modal--active');
    }
});