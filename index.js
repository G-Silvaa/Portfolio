const menuItem = document.querySelectorAll('ul li a')
const progresso = document.querySelectorAll('.bar')
const numero = document.querySelectorAll('.percent, .num')
console.log(numero)


function selectL(){
    menuItem.forEach((item)=>
    item.classList.remove('cor')
    )
    this.classList.add('cor')
}

menuItem.forEach((item)=>
item.addEventListener('click', selectL))












