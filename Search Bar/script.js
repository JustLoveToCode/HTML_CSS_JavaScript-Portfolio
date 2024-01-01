const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
    // The search will be given the class of active.
    // You can toggle between active and non-active class:
    // Toggle the presence of the class on the element:
    search.classList.toggle('active')
    // When the input is in focus, it is the active element on the page:
    // It can also receive the Keyboard Input or Other User Interaction:
    input.focus()
})