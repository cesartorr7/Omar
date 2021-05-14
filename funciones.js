/*Funcion solo para escribir letras*/
function sololetras(e) {
    key = e.keyCode || e.wich;
    teclado = String.fromCharCode(key).toLowerCase();
    letras =
      " ABCDEFGHIJKLMNÃ‘OPQRSTUVWXYZabcdefghijklmnÃ±opqrstuvwxyzÃ¡Ã©Ã­Ã³ÃºÃÃ‰ÃÃ“Ãš";
    especiales = "8-37-38-46-164-";
    teclado_especial = false;
    for (var i in especiales) {
      if (key == especiales[i]) {
        teclado_especial = true;
        break;
      }
    }
    if (letras.indexOf(teclado) == -1 && !teclado_especial) {
      return false;
    }
  }
  
  function Enable()
{
document.registro.Educacion_preescolar.disabled=false;
document.registro.Educacion_primaria.disabled=false;
document.registro.Educacion_secundaria.disabled=false;
document.registro.Educacion_media_superior.disabled=false;
document.registro.Educacion_superior.disabled=false;
}

function Disable()
{
document.registro.Educacion_preescolar.disabled=true;
document.registro.Educacion_primaria.disabled=true;
document.registro.Educacion_secundaria.disabled=true;
document.registro.Educacion_media_superior.disabled=true;
document.registro.Educacion_superior.disabled=true;

document.registro.Educacion_preescolar.checked=false;
document.registro.Educacion_primaria.checked=false;
document.registro.Educacion_secundaria.checked=false;
document.registro.Educacion_media_superior.checked=false;
document.registro.Educacion_superior.checked=false;
}