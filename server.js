var express = require('express');

// Create our app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function(req, res, next) {
    if(req.headers['x-forwarded-proto']  === 'https'){
        return res.redirect('http://' + req.headers.host + req.url);
    }else{
        next();
    }
})

app.use(express.static('public'));

app.listen(PORT, function() {
    console.log('Express server is up on port ' + PORT);
});