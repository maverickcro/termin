const nav = document.querySelector('.nav')
const items = document.querySelectorAll('.item')

window.addEventListener('scroll', () => {
    if(window.scrollY > nav.offsetHeight) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
})



const handleClick = (e) => {
    const current = document.querySelector('.current');
    if(current){
      current.classList.remove('current');
    }
    e.currentTarget.classList.add('current');
  }


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
  document.getElementById('sports').addEventListener('click', () => {
    scrollTo(document.getElementById('3'))
})
document.getElementById('sports-1').addEventListener('click', () => {
    scrollTo(document.getElementById('3'))
})

