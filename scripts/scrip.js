function updatemenu() {
    if (document.getElementById('responsive-menu').checked == true) {
      document.getElementById('menu').style.borderBottomRightRadius = '0';
      document.getElementById('menu').style.borderBottomLeftRadius = '0';
    }else{
      document.getElementById('menu').style.borderRadius = '0px';
    }
  }
  //funcion para abrir el submenu y cerralo(hubiera sido mas facil utilizar classList.toggle)
  //pero por especificidad en el menu no dejaba que utilizara la clase
  const menuMove =()=>{
  document.querySelectorAll('.dropdown-arrow').forEach(element => {
    element.addEventListener("click",(e)=>{e.preventDefault()})
    element.addEventListener("touchstart",(e)=>{
      e.preventDefault();
      if(element.nextElementSibling.getAttribute('style') == null){
        document.querySelectorAll('.dropdown-arrow').forEach(ele => {ele.nextElementSibling.removeAttribute('style')})
        element.nextElementSibling.setAttribute('style','display:block');
      }else{
        element.nextElementSibling.removeAttribute('style');
      } 
   })
  });
}
const iconMove =()=>{
  document.querySelector('.icon-user').addEventListener("touchstart",(e)=>{
      e.preventDefault();
      console.log()
      document.querySelector('.icon-user').children[1].classList.toggle('sub-menu-icon-content-open')
  });
}
iconMove();
menuMove();
 
    
  