const {Country, Activity} = require('../db')

const getActivities = async()=>{
    const activities = await Activity.findAll({
        include:{
            model: Country,
            attributes:['id','name'],
            through:{
                attributes:[]
            }
        }
    })
    return activities
}

module.exports={
    getActivities
}