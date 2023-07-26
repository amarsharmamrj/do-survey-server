import express from 'express'
import dotenv from 'dotenv'
import Connection from './src/db/db.js'
import baseRouter from './baseRouter.js'
import cors from 'cors'
import helmet from 'helmet'

const app = express()
dotenv.config();

app.use(express.json())         //required to accept req.body as json aa
app.use(helmet())
app.use(baseRouter)

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
    methods: "*"
}
app.use(cors(corsOptions)); 
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});  

Connection()

const PORT = process.env.PORT || 4000


app.listen(PORT, () => {
    console.log("Server is running on port:", PORT)
})