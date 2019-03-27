const hbs = require('hbs')
var HTML = require('html-parse-stringify')

hbs.registerHelper('listar', () => {
  listaCursos = require('./cursos.json')

  let cursos = '<table>  \
                  <thead>  \
                    <tr>  \
                      <th>Id</th>  \
                      <th>Nombre</th>  \
                      <th>Modalidad</th>  \
                      <th>Intensidad horaria</th>  \
                      <th>Valor</th>  \
                      <th>Descripción</th>  \
                    </tr>  \
                  </thead>  \
                  <tbody>'

  listaCursos.forEach(curso => {
    cursos = cursos +
             '<tr>' +
               '<td>' + curso.id +'</td>' +
               '<td>' + curso.nombre + '</td>' +
               '<td>' + curso.modalidad + '</td>' +
               '<td>' + curso.intensidad + '</td>' +
               '<td>'+ curso.valor + '</td>' +
               '<td>'+ curso.descripcion +'</td>'

  });
  cursos = cursos + '</tr></tbody></table>';
  console.log(cursos);
  return cursos;
})
