const menuItems = document.querySelectorAll('a.link-menu[href^="#"]');


menuItems.forEach(item => {
    item.addEventListener('click', scrollToId)
})

function scrollToId(event){
    
    event.preventDefault() 

    const element = event.target
    const id = element.getAttribute('href')
    const to = document.querySelector(id).offsetTop
    const header = document.querySelector('header').offsetHeight


    window.scroll({
        top:to - header - 20,
        behavior:'smooth'
    })

}
