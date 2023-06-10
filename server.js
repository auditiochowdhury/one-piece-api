const express = require('express')
const app = express()
const PORT = 3000
const cors = require('cors')

app.use(cors())

let pirates = {
    'luffy': {
        'age' : 19,
        'crew': 'Straw Hat Pirates',
        'fullName': 'Monkey D. Luffy',
        'bounty': 3000000000,
        'birthdate': 'May 5th', 
        'birthLocation': 'Foosha Village',
        'origin': 'East Blue',
        'status': 'Captain',
        'devil fruit power': 'Gum Gum Fruit',
        'attack moves': 'Gum Gum Bazooka, Gum Gum Rocket, Gum Gum Pistol, Gum Gum Elephant Gun '
        
    },
    'zoro':{
        'age' : 21,
        'crew': 'Straw Hat Pirates',
        'fullName': 'Roronoa Zoro',
        'bounty' : 1111000000,
        'birthdate': 'November 11', 
        'birthLocation': 'Shimotsuki Village',
        'origin': 'East Blue',
        'status': 'Vice Captain',
        'devil fruit power': 'None',
        'attack moves': 'Purgatory Onigiri , 1080 Caliber Phoenix, Lions Song, Three Sword Style: Black Rope Dragon Twister'
    },
    'sanji':{
        'age' : 21,
        'crew': 'Straw Hat Pirates',
        'fullName': 'Vinsmoke Sanji',
        'bounty': 1032000000, 
        'birthdate': 'March 6th', 
        'birthLocation': 'Germa Kingdom',
        'origin': 'North Blue',
        'status': 'Chef, Senior Officer',
        'devil fruit power': 'None',
        'attack moves': 'Diable Mutton Shot, Diable Jambe, Raid Suit Aerial Kick, Ifrit Jambe'
    },
    'unknown':{
        'age' : 'unknown',
        'crew': 'unknown',
        'fullName': 'unknown',
        'bounty': 'unknown', 
        'birthdate': 'unknown', 
        'birthLocation': 'unknown',
        'origin': 'unknown',
        'status': 'unknown',
        'devil fruit power': 'unknown',
        'attack moves': 'unknown'
    }
}



app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req,res)=> {
    const pirateName = req.params.name.toLowerCase()
    if(pirates[pirateName]){
        res.json(pirates[pirateName])
    }else{
        res.json(pirates['unknown'])
    }
} )


app.listen(process.env.PORT || PORT, ()=>{
    console.log('server running on port 4000')
})