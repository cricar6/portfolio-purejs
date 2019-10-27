const express = require('express'),
    engines = require('consolidate'),
    handlebars = require('handlebars');
const port = 3000;

let app = express();


let database = [
    {
        id: "code_design",
        name: "Code Design",
        category: "Web Redesign"
    }
]

app.engine('hbs', engines.handlebars);
app.set('views', './views');
app.set('view engine', 'hbs');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});


app.get('/projects/:name', (req, res) => {
    let project = 
        database.find(element => {
            return req.params.name == element.id;
        });
    
    res.render('project', {
        name: project.name,
        category: project.category
    });
});

app.listen(port, () => {
    console.log("Server has been initialized in port: "+ port)
});