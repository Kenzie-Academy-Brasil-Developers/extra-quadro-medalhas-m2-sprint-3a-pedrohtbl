export class Api {

    static async get (){
        const response = await fetch('https://kenzie-olympics.herokuapp.com/paises')
        const data     = await response.json()

        return data
    }
}