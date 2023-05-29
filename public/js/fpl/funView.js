export default class comp {
    tablaData(parametros = '?tipo=1&month=5&year=2023') {
        const url = 'v1/query_fpl' + parametros;
        console.log(url);
        // $('#example2').DataTable().destroy();
        const table = $('#example2').DataTable({
            serverSide: true,
            processing: true,
            ajax: url,
            lengthChange: false,
            buttons: ['copy', 'excel', 'pdf', 'print'],
            buttons: [{
                extend: 'excelHtml5',
                text: `<i class="bx bx-file"></i>`,
                titleAttr: 'Exportar a Excel',
                className: 'btn-dark btn-sm',
                exportOptions: {
                    columns: [0, 1, 2, 3, 4]
                }
            },
            {
                extend: 'pdfHtml5',
                text: '<i class=" bx bxs-file-pdf"></i> ',
                titleAttr: 'Exportar a PDF',
                className: 'btn-dark btn-sm',
                exportOptions: {
                    columns: [0, 1, 2, 3, 4]
                }
            },
            {
                extend: 'print',
                text: '<i class="bx bx-printer"></i>',
                titleAttr: 'Imprimir',
                className: 'btn-dark btn-sm',
                exportOptions: {
                    columns: [0, 1, 2, 3, 4]
                }
            },
            ],

            columns: [{
                data: 'fechaHora'
            },
            {
                data: 'c1'
            },
            {
                data: 'c2'
            },
            {
                data: 'c3'
            },
            {
                data: 'c4'
            },
            {
                data: 'c5'
            },
            // {
            //     data: 'c7'
            // },
            {
                data: 'cabecera'
            },
            {
                data: 'mensaje'
            },

            ],
        });

        table.buttons().container()
            .appendTo('#example2_wrapper .col-md-6:eq(0)');
    }

}