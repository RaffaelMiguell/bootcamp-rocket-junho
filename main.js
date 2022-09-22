onScroll() /* chamando função ao carregar a página */
window.addEventListener(
  'scroll',
  onScroll
) /*chamando evento e função*/

function activateMenuAtCurrentSection(){
    const targetLine = scrolly = innerHeight / 2
    console.log(targetLine)
}


function onScroll() {
  // chama as funções criadas para scroll da tela
  showNavOnScroll()
  showBackTopButtonOnScroll()
  activateMenuAtCurrentSection()
}

function showNavOnScroll() {
  const navigation = document.querySelector('#navigation')
  /*setando navigation com a class #navigation*/

  if (scrollY > 0) {
    //scrollY=rolagem vertical(y)
    // setando o tag nav com a class scroll
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackTopButtonOnScroll() {
  // const backToTopbutton =  document.querySelector('#backToTopbutton')

  // console.log(scrollY)

  if (scrollY > 550) {
    //scrollY=rolagem vertical(y)
    // setando o tag nav com a class show
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}
//biblioteca ScroolReavel - para efeitos de scroll
//passando atributos para função

ScrollReveal({
  // ``(agudo) = string especial / multilinhas

  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
#home,
#home img,
#home .stats,
#services,
#services header,
#services .card,
#about,
#about header,
#about .content`)
