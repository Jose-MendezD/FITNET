const menu = document.querySelector('#menu')
const menucontent = document.querySelector('#menucontent')

menu.addEventListener('click',() =>{
    menucontent.classList.toggle('hidden')
})