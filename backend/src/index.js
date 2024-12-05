if(process.env.NODE_ENV !=='PRODUCTION'){
    require('dotenv').config({
        path:'./src/config/.env',
    })
}
const connectDataBase=require('./DB/database.js')
const app=require('./app.js')
const PORT=process.env.PORT;
const server=app.listen(PORT, async()=>{
    connectDataBase();
    console.log('The server is running on port:8080')
});