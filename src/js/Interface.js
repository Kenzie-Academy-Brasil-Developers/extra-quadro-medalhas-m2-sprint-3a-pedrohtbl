import { Api } from "./Api.js"

export class Interface {
    static table = document.querySelector('table')
    static array = Api.get()

    static async ordenaArray (){
        const arr = await this.array
        const arrCopy = [...arr]
        arrCopy.sort((a, b) => {
            let totalA = a.medal_bronze+a.medal_gold+a.medal_silver
            let totalB = b.medal_bronze+b.medal_gold+b.medal_silver
            if(totalA > totalB){
                return -1
            }if(totalB> totalA){
                return 1
            }
            if(totalA === totalB){
                if(a.medal_gold>b.medal_gold){
                    return -1
                }if(b.medal_gold>a.medal_gold){
                    return 1
                }
                return 0    
            }
        })
        
        this.montaTable(arrCopy)
    }

    static async ordenaOuro (){
        const arr = await this.array
        const arrCopy = [...arr]
        arrCopy.sort ((a,b)=> b.medal_gold - a.medal_gold)
        this.montaTable(arrCopy)
    }

    static async ordenaPrata(){
        const arr = await this.array
        const arrCopy = [...arr]
        arrCopy.sort ((a,b)=> b.medal_silver - a.medal_silver)
        this.montaTable(arrCopy)
    }

    static async ordenaBronze(){
        const arr = await this.array
        const arrCopy = [...arr]
        arrCopy.sort ((a,b)=> b.medal_bronze - a.medal_bronze)
        this.montaTable(arrCopy)
    }

    static montaTable (array){
        const arr = array
        let cont = 1
        const tr = document.createElement('tr')
        this.table.innerHTML = ''
        tr.innerHTML+= `
        <th><button class="posicao">Posição</button></th>
        <th>País</th>
        <th><button class="ouro">Ouro </button></th>
        <th><button class="prata">Prata</button></th>
        <th><button class="bronze">Bronze</button></th>
        <th>Total</th>
    `
    this.table.appendChild(tr)
    arr.forEach(({country,flag_url,id,medal_bronze, medal_gold, medal_silver}) => {
        const tr = document.createElement('tr')
        tr.innerHTML += `
            <td>${cont}º</td>
            <td> <div class="img-td"><img src="${flag_url}">${country}</div></td>
            <td>${medal_gold}</td>
            <td>${medal_silver}</td>
            <td>${medal_bronze}</td>
            <td>${medal_gold+medal_silver+medal_bronze}</td>
        `
        cont++
        this.table.appendChild(tr)
    });
      
    }

    static async pesquisaPais(event){
        const arr = await this.array
        const input = event.target.closest('div').children[0]
        if(event.target.tagName === "BUTTON"){
           const novoArr = arr.filter(pais => pais.country.toLowerCase() === input.value.toLowerCase().trim())
           if(novoArr.length !== 0){
            this.montaTable(novoArr)
           }
        }
    }
}