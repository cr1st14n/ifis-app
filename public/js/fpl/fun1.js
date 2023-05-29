import comp from "./funView.js";


function aaaa() {
    console.log('que sra sera');
  }


const comp1 = new comp;
const formBusqueda = document.querySelector('#form_busqueda_1');
const btnBusqPara = document.querySelector('#btn_busquedaParam');
const formBuscarParam = document.querySelector('#formBuscarParam');
const pageContent = document.querySelector('.page-content');
$(document).ready(function () {
    // comp1.tablaData()
    console.clear()
});
formBusqueda.addEventListener('submit', function (e) {
    e.preventDefault();
    const url = '?tipo=1&' + $(this).serialize();
    comp1.tablaData(url);
});
btnBusqPara.addEventListener('click', function (param) {
    $('#mod_busqParametrica').modal('show');
})
formBuscarParam.addEventListener('submit', function (e) {
    e.preventDefault();
    const url = '?tipo=2&' + $(this).serialize();
    comp1.tablaData(url);
    $('#mod_busqParametrica').modal('hide');
})
