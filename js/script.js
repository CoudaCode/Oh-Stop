// NAVBAR 
var toggleBtn = document.querySelector('.toggle-btn')
var toggleBtnicon = document.querySelector('.toggle-btn i')
var dropdownMenu = document.querySelector('.dropdown-menu')
console.log(toggleBtn, toggleBtnicon, dropdownMenu)

toggleBtn.onclick = function(){
  console.log(dropdownMenu.classList.toggle('open'))
  const isOpen = dropdownMenu.classList.contains('open')

  toggleBtnicon.classList = isOpen 

  ? "fa-solid fa-xmark"
  : "fa-solid fa-bars"
}