const menuItem = document.querySelectorAll('ul li a')



function selectL(){
    menuItem.forEach((item)=>
    item.classList.remove('cor')
    )
    this.classList.add('cor')
}

menuItem.forEach((item)=>
item.addEventListener('click', selectL))

console.log(menuItem)