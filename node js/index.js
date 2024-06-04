let express = require('express')
let app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (res,req)=>{
    res.end("Hello World")
})

app.listen(3000 , ()=> console.log("server is running"));