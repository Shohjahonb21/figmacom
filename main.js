const triggers = document.querySelectorAll('.section__header');
const targets = document.querySelectorAll('.content--hidden , .services , .experts ');

triggers.forEach((trigger, index) => {
    trigger.addEventListener('click', () => {
        const target = targets[index];

        if (target.classList.contains('none_')) {
            target.classList.remove('none_');
        } else {
            target.classList.add('none_');
        }
    });
});
