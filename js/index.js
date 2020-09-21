const btn = document.querySelector('#btn-modal'),
    modal = document.querySelector('#modal-call'),
    close = modal.querySelector('#close');

btn.addEventListener('click', e => {
    modal.classList.add('modal--active');
});

close.addEventListener('click', () => {
    modal.classList.remove('modal--active');
});

document.addEventListener('click', e => {
    const target = e.target;
    console.log(target);

    if (target.closest('.modal--active') && !target.closest('.modal-dialog')) {
        modal.classList.remove('modal--active');
    }
});