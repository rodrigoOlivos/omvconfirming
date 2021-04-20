
  'use strict';

  /*
  NOTE:
  ------
  PLACE HERE YOUR OWN JAVASCRIPT CODE IF NEEDED
  WE WILL RELEASE FUTURE UPDATES SO IN ORDER TO NOT OVERWRITE YOUR JAVASCRIPT CODE PLEASE CONSIDER WRITING YOUR SCRIPT HERE.  */



$(document).ready(function(){

  var tasastabla =$(".tablaTasas").DataTable({
      "searching": false,
      "lengthChange": false,
      "language": {
        "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
      },
      "autoWidth": false,
      "paging": false,
      "bInfo": false,
      scrollY:200,
      scrollX:!0});

  var resultadotmctabla =$(".resultadosTmc").DataTable({
    "searching": false,
    "lengthChange": false,
    "language": {
      "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
    },
    "bInfo": false,
    "autoWidth": false,
    "paging": false,
    scrollY:250,
    scrollX:!0});

  var dasboard =$(".dashboard").DataTable({
    "searching": false,
    "lengthChange": false,
    "language": {
      "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
    },
    "bInfo": false,
    "autoWidth": false,
    "paging": false,
    scrollY:120,
    scrollX:!0});


  var tmctabla =$(".tmcData").DataTable({
    "searching": false,
    "lengthChange": false,
    "language": {
      "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
    },
    "bInfo": false,
    "autoWidth": false,
    "paging": false,
    scrollY:250,
    scrollX:!0});

  var matrizAtabla =$(".matrizA").DataTable({
    "searching": false,
    "lengthChange": false,
    "language": {
      "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
    },
    "bInfo": false,
    "autoWidth": false,
    "paging": false,
  });
  var matrizBtabla =$(".matrizB").DataTable({
    "searching": false,
    "lengthChange": false,
    "language": {
      "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
    },
    "bInfo": false,
    "autoWidth": false,
    "paging": false,
  });

  var resultadoPanel =$(".tablaTasasPanel").DataTable({
    "searching": false,
    "lengthChange": false,
    "language": {
      "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
    },
 
    "lengthChange": false,
    "autoWidth": false,
    "scrollY":250,
    "scrollX":!0});

  var PanelResultado =$(".PanelResultado").DataTable({
    "searching": false,
    "lengthChange": false,
    "language": {
      "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
    },
    "bInfo": false,
    "autoWidth": false,
    "paging": false,
    "lengthChange": false,
    "autoWidth": false,
    "scrollY":50,
    "scrollX":!0});

  var PanelResultado =$(".tablaIndicadores").DataTable({
    "searching": false,
    "lengthChange": false,
    "language": {
      "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
    },
    "bInfo": false,
    "autoWidth": false,
    "paging": false,
    "lengthChange": false,
    "autoWidth": false,
    "scrollY":350,
    "scrollX":!0});

  $('a[data-toggle="tab"]').on('shown.bs.tab', function(e){
    $($.fn.dataTable.tables(true)).DataTable()
        .scroller.measure().draw();
  });
  $('#accordion').on('shown.bs.collapse', function() {
    $.each($.fn.dataTable.tables(true), function(){
      $(this).DataTable()
          .columns.adjust()
          .responsive.recalc().draw();
    });
  });
$( $.fn.dataTable.tables( true ) ).DataTable().columns.adjust();
});

