const express = require('express');
const ejs = require('ejs');

const app = express();

//template engine
app.set('view engine', 'ejs');
//MIDDLEWARES
app.use(express.static('public'));

app.get('/', (req, res) => {

    const photo = {
        id: 1,
        title: "Blog title1",
        description: "blog desc 1",
    }
    res.send(photo);
});

const port = 5000;
app.listen(port, () => {
    console.log(`Sunucu ${port} adresinde baslatildi.`);
});