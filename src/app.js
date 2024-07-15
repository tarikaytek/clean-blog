const express = require('express');

const app = express();

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