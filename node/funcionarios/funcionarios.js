const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');




axios.get(url).then(response => {
    const funcionarios = response.data;
    let china = [];
    let feminino = [];
    funcionarios.map((chineses) => {
        if(chineses.pais === 'China') {
            china.push(chineses)
        }
    });
    china.map((sexo) => {
        if(sexo.genero === 'F') {
            feminino.push(sexo);
        }
    });

    const resultado = feminino.reduce((sal1, sal2) => {
        return sal1.salario < sal2.salario ? sal1 : sal2
    });

    console.log(resultado);

})
