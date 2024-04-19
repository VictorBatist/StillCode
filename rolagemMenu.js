window.addEventListener("scroll", function(){
    let header = document.querySelector('#menu')
    header.classList.toggle('rolagem-menu',window.scrollY > 5)
})