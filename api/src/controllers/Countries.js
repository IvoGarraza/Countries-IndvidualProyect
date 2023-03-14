const axios = require('axios')
const {Country} = require('../db')


const getInfoApi = async()=>{
    const allPaises = await Country.findAll({
        attributes:[
            'id',
            'name',
            'img',
            'continents',
            'capital',
            'subregion',
            'area',
            'population',
        ]
    })
    console.log(allPaises.length)
    if(!allPaises.length){
        try {
            //obtencion de informacion de la API
            const infoApi = await axios.get('https://restcountries.com/v3/all',{headers:{"Accept-Encoding": "null"}})
            const countries = [] //defino array vacio
            infoApi.data.map(async pais =>{   //filtrado de informacion de la API y se agrega al array
                
                countries.push({
                    id:pais.cca3,
                    name:pais.translations.spa.common,
                    img: pais.flags[0],
                    continents: pais.continents[0],
                    capital: !pais.capital?'no tiene capital': pais.capital[0],
                    subregion: pais.subregion,
                    area:pais.area,
                    population:pais.population
                })
    
            })
            await Country.bulkCreate(countries)
    
            const pais = await Country.findAll({
                attributes:[
                    'id',
                    'name',
                    'img',
                    'continents',
                    'capital',
                    'subregion',
                    'area',
                    'population',
                ]
            })
            /* console.log(pais) */
            return pais
        } catch (error) {
            console.log(error)
            return error
        }
        
    }else{
        return await allPaises
    }
}





module.exports={
    getInfoApi
}