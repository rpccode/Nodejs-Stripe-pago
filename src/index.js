import express from 'express'
import router from './routes/index.js'
import path from 'path'
import {engine} from 'express-handlebars';

const app = express();

//configuracion
app.set('views',path.join('./src/','views'))
app.engine('.hbs', engine({
    dafaultLayout: 'main',
    layoutDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname:'.hbs',

}))
app.set('view engine', '.hbs')


app.use(express.urlencoded({extended: false}))
app.use(express.json())

//archivos estaticos
app.use(express.static('public'))

app.use(router)








app.listen(3000,()=>console.log('servidor funcionando en el puerto 3000'))