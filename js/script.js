window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
    showNavOnScroll ();
    showBackToTopButtonOnScroll();
    activateMenuAtCurrentSection(home);
    activateMenuAtCurrentSection(services);
    activateMenuAtCurrentSection(about);
    activateMenuAtCurrentSection(contact);
}

function activateMenuAtCurrentSection(section) {
    const targetLine = scrollY + innerHeight / 2

    // verificar se a seção pasosu da linha
    // quais dados vou precisar?
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

    // verificar se a base esta avaixo da linha alvo
    // quais dados vou precisar?
    const sectionEndAst = sectionTop + sectionHeight

    const sectionEndPassedTargetLine = sectionEndAst <= targetLine

    console.log('O fundo da sessão passou da linha?', sectionEndPassedTargetLine)


    // limites da seção
    const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)


    menuElement.classList.remove('active')
    if (sectionBoundaries) {
        menuElement.classList.add('active')
    }


}


function showNavOnScroll() {
    if (scrollY > 0) {
        navigation.classList.add('scroll');
    } else {
        navigation.classList.remove('scroll');
    }
}

function showBackToTopButtonOnScroll() {
    if (scrollY > 500) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded');
}

function closeMenu() {
    document.body.classList.remove('menu-expanded');
}

ScrollReveal({
    origin:'top',
    distance: '30px',
    duration: 700,
}).reveal(`
    #home,
    #home img,
    #home .stats, 
    #services,
    #services header,
    #services .cards,
    #services .card,
    #about,
    #about header,
    #about .content,
    #contact header,
    #contact .content,
    #footer,
    #footer a,
    #footer li ul`);