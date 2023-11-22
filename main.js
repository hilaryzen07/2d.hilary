const aplausos = document.querySelector("#som_tecla_aplausos");
function tocaSom (som)
{
    alert(som);
}
    tocaSom("pa ,pa, pa, pa");
let controle = "tocar";
if (controle == "tocar"){
    alert("Áudio pronto para tocar");
}else{
  alert("O áudio não esta pronto para tocar");
}
const buttons = document.querySelectorAll("button");
let contador = 0;
while(contador < buttons.length) {
    buttons[contador]. textContent = contrador;
    contador = contador + 1 ; 
}