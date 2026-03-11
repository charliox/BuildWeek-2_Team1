const navbarNav = document.getElementById("navbarNavLinks")
const searchBar = document.querySelector('.search-bar')

/*============ Event Listener per spostare gli elementi dell'header sullo scroll ============*/
window.addEventListener('scroll', () => {
    if (window.scrollY >= 0 && window.scrollY <= 50) {
        navbarNav.classList.remove('outside')
        searchBar.classList.remove('shrink')
    } else {
        navbarNav.classList.add('outside')
        searchBar.classList.add('shrink')
    }
})

const navLinks = document.querySelectorAll('#navbarNavLinks a')

/*============ algoritmo per aggiungere la classe active al click dei link della navbar ============*/
navLinks.forEach((link, index)=>{
    link.addEventListener("click", ()=>{
        if(!link.classList.contains('active')){
            link.classList.toggle('active')
        }
        for(let i=0; i< navLinks.length; i++){
            if(i!=index)
                navLinks[i].classList.remove('active')
        }
    })
})