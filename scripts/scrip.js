function updatemenu() {
    if (document.getElementById('responsive-menu').checked == true) {
      document.getElementById('menu').style.borderBottomRightRadius = '0';
      document.getElementById('menu').style.borderBottomLeftRadius = '0';
    }else{
      document.getElementById('menu').style.borderRadius = '0px';
    }
  }
 
  const element = document.querySelector('.dropdown-arrow');
    element.addEventListener('click',(e)=>{
        e.preventDefault();
        console.log('hola')
     })
  