const express = require('express');
const app = express();
const cors = cors('cors');

app.use(express.json());
app.use(cors());

app.get('/', (req,res) => {
    res.send('Hello RAG!')
})

app.get("*", (req,res)=>{
    res.status(404).json({error: "Path not found"})
})

module.exports = app;