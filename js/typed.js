
var typed = new Typed('.text', {
    strings:["Frontend Developer"," Backend Developer","Web Developer"],
    backSpeed:100,
    backDelay:1000,
    typeSpeed:100,
   loop:true,
  });
 
let tog=document.querySelector('.taglares');
let hed=document.querySelector('body')
let nav=document.querySelector('nav')
let show=()=>{
  if(nav.style.display=='none'){
    nav.style.display="block"
    nav.style.transition='1s'
  }



else{
  nav.style.display="none"
  nav.style.transition='1s'
}
}
tog.addEventListener('click', show)
