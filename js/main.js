document.addEventListener('DOMContentLoaded', function() {
    // Меню
    document.addEventListener('click', e => {
        if (e.target.closest('.menu-mob')) {
            document.body.classList.toggle('hidden')
            e.target.closest('.menu-mob').classList.toggle('opened')
            e.target.closest('.menu-mob').parentElement.querySelector('.menu').classList.toggle('opened')
        }
    })
})