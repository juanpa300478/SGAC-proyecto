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
    e.preventDefault()
      document.querySelector('.icon-content').classList.toggle('icon-content-open')
  });
}
const iconMoveClick =()=>{
  document.querySelector('.icon-user').addEventListener("click",(e)=>{
    e.preventDefault()
      document.querySelector('.icon-content').classList.toggle('icon-content-open')
  });
}
const autenticationUser =(autentication,userForm,passwordForm,direction)=>{
  document.getElementById(autentication).addEventListener('submit',(e)=>{
    e.preventDefault()
    if(e.target.user.value == userForm && e.target.password.value == passwordForm){
      alert(`el usuario ${e.target.user.value} es correcto.`);
      location.href= direction;
    }else{
      alert(`el usuario ${e.target.user.value} no es correcto, por favor ingrese un usuario correcto.`);
    }
  })
}
iconMoveClick();
menuMove();
iconMove();
//autenticación
const $app = document.getElementById('app');
const setCalculator = () =>{
  return `
      <form id="showCalculator">
        <label for="cu">Cuota</label>
        <input type="number" id="cu" name="cu" placeholder="0">
        <label for="me">Meses</label>
        <input type="number" id="me" name="me" placeholder="0">
        <label for="in">Interes Mensual</label>
        <input type="text" id="in" name="in" placeholder="0.00">
        <button type="submit">Calcular</button>
        </form>`;
}
const result = (interest,total) =>{
  return `
      <form id="showResult">
        <label>Interes</label>
        <input type="number" disabled value="${interest}">
        <label>valor cuota total</label>
        <input type="number" disabled value="${total}">
        <button type="submit">Agregar valor</button>
        <button type="reset">volver a calcular</button>
        </form>`;
}
$app.innerHTML = setCalculator();

  let valueMonth;
  let numberMonth;
  let interest ;
  let valueInterest;
  let valueTotal;
  let found = true;
  document.getElementById('calculator').addEventListener('submit',(e)=>{
    e.preventDefault();
    if(found){
         valueMonth = Number(e.target.cu.value);
         numberMonth = Number(e.target.me.value);
         interest = Number(e.target.in.value);
         valueInterest = valueMonth * interest / 100;
         valueTotal = valueInterest * numberMonth + valueMonth;
        $app.innerHTML = result(valueInterest,valueTotal);
        found = false;
        document.getElementById('showResult').addEventListener('reset',(e)=>{
          e.preventDefault();
          $app.innerHTML = setCalculator();
          found = true; 
        });
    }else{
        document.getElementById('valueMonthForm').value = valueTotal;
    }

  });
  document.getElementById("calculator").addEventListener('touchstart',()=>{
    document.getElementById("calculator").classList.toggle('calculator-open');
  });

