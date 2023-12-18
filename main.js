const toggleBtn = document.getElementsByClassName('toggle-btn')[0];
const navLinks = document.getElementsByClassName('nav-links')[0];
const popup = document.querySelector('.popup');
const close = document.querySelector('.close');

window.onload = function() {
  setTimeout(function(){
    popup.style.display = 'block'
  }, 500)
}

close.addEventListener('click', () =>{
  popup.style.display = 'none'
})

toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
})