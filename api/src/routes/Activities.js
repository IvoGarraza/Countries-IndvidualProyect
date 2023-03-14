const {Router} = require('express')
const { getActivities } = require('../controllers/Activities')
const {Country, Activity} = require('../db')


const router = Router()

router.get('/',async (req,res)=>{
    console.log('activities route')
    let activities = await getActivities()
    if(activities.length){
        try{
            res.status(200).send(activities)
        }catch(error){
            console.log(error)
            res.status(400).send('no hay actividades')
        }

    }else{
        return res.status(400).send('No hay actividades creadas')
    }
    
})

router.post('/', async (req,res)=>{
   /*  const {name, difficulty, duration, season} = req.body
    console.log('posttttttttttttttt')
    if(name){
        console.log('iffffffffff')
        const newActivity = await Activity.create({
            name,
            difficulty,
            duration,
            season         
        });

        countries.forEach(async (country) => {
            let activityCountry = await Country.findOne({
                where: {
                    name: country
                }
            }) 
            await newActivity.addCountry(activityCountry)
        });
        res.status(200).send('La actividad se creo exitosamente')
    }else{
        return res.status(404).send('faltan datos')
    } */
    const {name, difficulty, duration, season, countries} = await req.body
    console.log(req.body)
    try{
        // Se crea la actividad
        let newActivity = await Activity.create({
            name,
            difficulty,
            duration,
            season
        })

        // Reviso el array de paises para ver en cual se debe crear la actividad 
        console.log(countries) //PASAR COUNTRIES EN UN ARRAY PARA QUE ForEach lo lea
        countries.forEach(async (country) => {
            let activityCountry = await Country.findOne({
                where: {
                    name: country
                }
            }) 
            await newActivity.addCountry(activityCountry)
        });
        res.status(200).send('La actividad se creo exitosamente')
    } catch(error) {
        console.log(error)
        res.status(500).send('No se pudo crear la actividad')
    }
})

module.exports = router