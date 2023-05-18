const menuItem = document.querySelectorAll('ul li a')
const menubar = document.querySelectorAll('ul li a')





function selectL(){
    menuItem.forEach((item)=>
    item.classList.remove('cor')
    )
    this.classList.add('cor')
}

menuItem.forEach((item)=>
item.addEventListener('click', selectL))

//scroll suave

function distanceTop(element){
    const id = element.getAttribute("href");
    return document.querySelector(id).offsetTop;
 }
 
 function nativeScroll(distanceFromTheTop){
     window.scroll({
         top: distanceFromTheTop,
         behavior:"smooth"
     });
 }
 
 function scrollToSection(event){
     event.preventDefault();
     const distanceFromTheTop = distanceTop(event.target) - 90;
     nativeScroll(distanceFromTheTop);
    
 }
 
 menubar.forEach((link)=>{
     link.addEventListener("click", scrollToSection)
 })

const BMobile = document.querySelector('.mobile')
const FMobile = document.getElementById('menu2')


function openMenu(event){
  FMobile.classList.toggle('ativar')
  BMobile.classList.toggle('ativar')
  
  
}
 
BMobile.addEventListener('click',openMenu);

function close() {
    FMobile.classList.remove('ativar')
}

FMobile.addEventListener('click',close);


 
 

 
 










