const express = require('express');


const app = express()
const PORT = 3000

app.use(express.static('public'))


app.get('', function(req, res){
    

})

app.listen(PORT,()=>{
    console.log('server started on port 3000')
})

