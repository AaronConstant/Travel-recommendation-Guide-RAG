const app = require('./app');

require('dotenv').config();

const PORT = process.env.PORT

app.listen(PORT, (err) =>{
    if(err) {
        console.error(`Failed to start the server: ${err}`)
    }
    console.log(`Server is running on port ${PORT}`)
})