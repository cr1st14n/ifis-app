const viewNav = (view) => {
    switch (view) {
        case 'fpl':
            document.querySelector('.page-content').innerHTML = `
            <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                <div class="breadcrumb-title pe-3">Tables</div>
                <div class="ps-3">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb mb-0 p-0">
                            <li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">Data Table</li>
                        </ol>
                    </nav>
                </div>
                <div class="ms-auto">
                    <div class="btn-group">
                        <button type="button" class="btn btn-primary">Settings</button>
                        <button type="button" class="btn btn-primary split-bg-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown">	<span class="visually-hidden">Toggle Dropdown</span>
                        </button>
                        <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg-end">	<a class="dropdown-item" href="javascript:;">Action</a>
                            <a class="dropdown-item" href="javascript:;">Another action</a>
                            <a class="dropdown-item" href="javascript:;">Something else here</a>
                            <div class="dropdown-divider"></div>	<a class="dropdown-item" href="javascript:;">Separated link</a>
                        </div>
                    </div>
                </div>
            </div>
            <h6 class="mb-0 text-uppercase">DataTable Example</h6>
            <hr/>
            <div class="card">
                    <div class=" card-body">
                        <form id="form_busqueda_1">
                            <div class="row">
                                <div class="col-1">
                                    <select class=" form-control form-control-sm" name="month">
                                        <option value="1">Enero</option>
                                        <option value="2">Febrero</option>
                                        <option value="3">Marzo</option>
                                        <option value="4">Abril</option>
                                        <option value="5">Mayo</option>
                                        <option value="6">Junio</option>
                                        <option value="7">Julio</option>
                                        <option value="8">Agosto</option>
                                        <option value="9">Septiembre</option>
                                        <option value="10">Octubre</option>
                                        <option value="11">Noviembre</option>
                                        <option value="12">Diciembre</option>
                                    </select>
                                </div>
                                <div class="col-1">
                                    <input type="number" class="form-control  form-control-sm" value="2023"
                                        name="year" required max="2023" min="2008">
                                </div>
                                <div class="col-1">
                                    <button class="btn btn-danger btn-sm" type="submit">FIltrar <i
                                            class="bx bx-search-alt-2"></i></button>
                                </div>
                                <div class="col-9" style="text-align: right">
                                    <button class="btn btn-dark btn-sm" type="button" id="btn_busquedaParam">Filtro
                                        Parametrizado <i class="bx bx-search"></i></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            <div class="card">
                <div class="card-body">
                    <div class="table-responsive">
                    <table id="example2" class="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th>RECEPCIONADO</th>
                                        <th>MATRICULA / # VUELO</th>
                                        <th>REGLA</th>
                                        <th>TIPO Y CATEGORIA</th>
                                        <th>PROCEDENCIA</th>
                                        <th>DESTINO</th>
                                        <th>CABECERA</th>
                                        <th>MENSAJE</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <th>RECEPCIONADO</th>
                                        <th>MATRICULA / # VUELO</th>
                                        <th>REGLA</th>
                                        <th>TIPO Y CATEGORIA</th>
                                        <th>PROCEDENCIA</th>
                                        <th>DESTINO</th>
                                        <th>CABECERA</th>
                                        <th>MENSAJE</th>
                                    </tr>
                                </tfoot>
                            </table>
                    </div> 
                </div> 
            </div> 
                
            `;
            var table = $('#example2').DataTable({
                lengthChange: false,
                buttons: ['copy', 'excel', 'pdf', 'print']
            });

            table.buttons().container()
                .appendTo('#example2_wrapper .col-md-6:eq(0)');

            break;

        default:
            break;
    }

}