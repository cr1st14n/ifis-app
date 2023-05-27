export default class comp {
    tablaData(parametros = '?tipo=1&month=5&year=2023') {
        const url = 'v1/query_fpl' + parametros;
        console.log(url);
        $('#example2').DataTable().destroy();
        const table = $('#example2').DataTable({
            serverSide: true,
            processing: true,
            ajax: url,
            lengthChange: true,
            buttons: ['copy', 'excel', 'pdf', 'print'],
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