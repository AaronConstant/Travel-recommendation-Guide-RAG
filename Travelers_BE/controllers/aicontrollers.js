const express = require('express');
const cors = require('cors');
const aiprompt = express.Router();
require('dotenv').config();



aiprompt.use(express.json());
aiprompt.use(cors());