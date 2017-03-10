/**
 * Created by chinegua on 10/3/17.
 */

const express = require ('express');
const app = express();
const path = require('path');
const session = require('express-session');

app.set('port',(process.env.PORT || 8081));

app.use(session({
    secret: 'prueba',
    resave: false,
    saveUninitialized: true
}));

app.get('/name/:name', function(req, res) {

    req.session.name = req.params.name;

    res
        .send('<p>Vea el valor de esta sesión <a href="/name">aquí</a> </p>');

});


app.get('/name', function (req, res) {
    res.send(req.session.name);
});

app.listen(app.get('port'), () => {
    console.log("Node app is running at localhost:8081" );
});

