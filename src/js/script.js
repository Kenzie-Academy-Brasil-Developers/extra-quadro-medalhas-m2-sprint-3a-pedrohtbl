import { Interface } from "./Interface.js";

const table = document.querySelector('table')
const input = document.querySelector('.div--pesquisa')

table.addEventListener('click', function(event){
    const target = event.target
    if(target.className === 'posicao'){
        Interface.ordenaArray()
    }if(target.className === 'ouro'){
        console.log('ouro')
        Interface.ordenaOuro()
    }if(target.className === 'prata'){
        Interface.ordenaPrata()
    }if(target.className === 'bronze'){
        Interface.ordenaBronze()
    }
})
input.addEventListener('click',Interface.pesquisaPais.bind(Interface))
Interface.ordenaArray()