const nav = document.querySelector('.nav')

window.addEventListener('scroll', () => {
    if(window.scrollY > nav.offsetHeight) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
})

scrollTo = (element) => {
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: element.offsetTop
    });
    console
  }
document.getElementById('home').addEventListener('click', () => {
    scrollTo(document.getElementById('1'))
})
document.querySelector('.logo').addEventListener('click', () => {
    scrollTo(document.getElementById('1'))
})
document.getElementById('readmore').addEventListener('click', () => {
    scrollTo(document.getElementById('2'))
})
document.getElementById('about-us').addEventListener('click', () => {
      scrollTo(document.getElementById('2'))
  })
  document.getElementById('contact').addEventListener('click', () => {
    scrollTo(document.getElementById('3'))
})