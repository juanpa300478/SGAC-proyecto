function updatemenu() {
    if (document.getElementById('responsive-menu').checked == true) {
      document.getElementById('menu').style.borderBottomRightRadius = '0';
      document.getElementById('menu').style.borderBottomLeftRadius = '0';
    }else{
      document.getElementById('menu').style.borderRadius = '0px';
    }
  }
  const preventEventClick = (etiqueta) =>{
    const element = document.getElementById(etiqueta);
     etiqueta.addEventListener('click',(e)=>{
        e.preventDefault();
     })
  }