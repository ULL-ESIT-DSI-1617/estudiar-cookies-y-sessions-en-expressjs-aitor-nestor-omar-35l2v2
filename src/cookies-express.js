/**
 * Created by chinegua on 10/3/17.
 */

const express = require ('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser')

app.use(cookieParser());
app.set('port',(process.env.PORT || 8081));

app.get('/name', function (req, res) {
    res.send(req.cookies.name);
});

app.get('/name/:name', function(req, res) {

    res
        .cookie('name', req.params.name)
        .send('<p> Vea el valor del cookie <a href="/name"> aquí </a> </p>');

});


app.listen(app.get('port'), () => {
    console.log(`Node app is running at localhost: ${app.get('port')}` );
});
