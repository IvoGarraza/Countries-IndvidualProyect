const { Router } = require('express');
const { getInfoApi } = require("../controllers/Countries.js");
const {Country, Activity} = require('../db')

const router = Router()

router.get('/', async (req,res)=>{
    const {name} = req.query
    const info = await getInfoApi()
    /* console.log(info) */
    if(name){
        try{
            const nameMinusculas = name.toLowerCase()
            let country = await info.filter(e => e.name.toLowerCase() == nameMinusculas)
            console.log('aaaaaaaaaaaaaaaa',country)
            country.length ? res.status(200).send(country) : res.status(404).send('pais no encontrado')
        }catch(error){
            console.log(error)
            return error
        }
    }else{
        try {
            //invoco el controller y filtro lo requerido para la ruta principal
                  
            const infoMainRoute= info.map(e=>{              
                return {
                    name: e.name,
                    img: e.img,
                    continents: e.continents,
                    population: e.population,
                    id:e.id
                }
            })
            /* console.log(info) */
            return res.status(200).json(infoMainRoute)
        } catch (error) {
            console.log(error)
            return error
        }
    }
})

router.get('/:id', async (req,res)=>{

    try {
        /*     try{
        const id = req.params['id'].toUpperCase()
        const info = await getInfoApi()
        console.log(info)
        let countryId = info.filter( e => e.id == id);
        countryId.length ? res.status(200).send(countryId) : res.status(404).send('pais no encontrado')

    }catch(error){
        console.log(error)
        return error
    }     */
    const countryId = req.params['id'].toUpperCase()
    console.log(countryId)
    const countryById = await Country.findByPk(countryId, {
        include : {
            model : Activity
        }
    })
    console.log(countryById)
    res.status(200).send(countryById)

    } catch (error) {
        console.log(error)
        res.send(400).send('no se encontro')
    }
})

module.exports = router