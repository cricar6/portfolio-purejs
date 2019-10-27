const express = require('express'),
    engines = require('consolidate'),
    handlebars = require('handlebars');
const port = 3000;

let app = express();


let database = [
    {
        id: "ice_cream",
        field: "FrontEnd - UI Design",
        name: "Ice Cream Nation",
        category: "Web Redesign",
        introtextnormal: "In the redesign of the Ice Cream Nation website had the challenge to ",
        introtextbold: "create an experience that interest people and atract more customers.",
        bannermock: "../assets/projects/iceCream/bannerMockUp.png",
        introimage: "../assets/projects/iceCream/intro.png",
    }
]

const competencies= [
    {
        photo: "../assets/about/competencies/develop.png",
        name: "Web Development"
    },
    {
        photo: "../assets/about/competencies/rapid.png",
        name: "Rapid Prototyping"
    },
    {
        photo: "../assets/about/competencies/research.png",
        name: "Design Research"
    },
    {
        photo: "../assets/about/competencies/data.png",
        name: "Data Viz"
    },
    {
        photo: "../assets/about/competencies/interaction.png",
        name: "Interaction Design"
    },
]

let tools = [
    {
        icon: "../assets/about/tools/figma.png",
        name: "Figma",
        category: "des"
    },
    {
        icon: "../assets/about/tools/invision.png",
        name: "InVision",
        category: "des"
    },
    {
        icon: "../assets/about/tools/illustrator.png",
        name: "Adobe Illustrator",
        category: "des"
    },
    {
        icon: "../assets/about/tools/photoshop.png",
        name: "Adobe Photoshop",
        category: "des"
    },
    {
        icon: "../assets/about/tools/muse.png",
        name: "Adobe Muse",
        category: "des"
    },
    {
        icon: "../assets/about/tools/lightroom.png",
        name: "Adobe Lightroom",
        category: "des"
    },
    {
        icon: "../assets/about/tools/premiere.png",
        name: "Adobe Premiere",
        category: "des"
    },
    {
        icon: "../assets/about/tools/html.png",
        name: "HTML",
        category: "dev"
    },
    {
        icon: "../assets/about/tools/javascript.png",
        name: "Javascript",
        category: "dev"
    },
    {
        icon: "../assets/about/tools/css.png",
        name: "Css",
        category: "dev"
    },
    {
        icon: "../assets/about/tools/sass.png",
        name: "Sass",
        category: "dev"
    },
    {
        icon: "../assets/about/tools/react.png",
        name: "React",
        category: "dev"
    },
    {
        icon: "../assets/about/tools/angular.png",
        name: "Angular",
        category: "dev"
    },
    {
        icon: "../assets/about/tools/ts.png",
        name: "Typescript",
        category: "dev"
    },
    {
        icon: "../assets/about/tools/processing.png",
        name: "P5.js",
        category: "dev"
    },
    {
        icon: "../assets/about/tools/mobx.png",
        name: "Mobx",
        category: "dev"
    },
    {
        icon: "../assets/about/tools/firebase.png",
        name: "Firebase",
        category: "dev"
    },
    {
        icon: "../assets/about/tools/visual.png",
        name: "Visual Studio Code",
        category: "dev"
    },
    {
        icon: "../assets/about/tools/git.png",
        name: "Git",
        category: "dev"
    },
];

app.engine('hbs', engines.handlebars);
app.set('views', './views');
app.set('view engine', 'hbs');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', {
        projects: database
    });
});

app.get('/AboutMe', (req, res) => {
    res.render('about', {
        competencies: competencies,
        tools: tools
    });
});

app.get('/Contact', (req, res) => {
    res.render('contact');
});


app.get('/projects/:name', (req, res) => {
    let project = 
        database.find(element => {
            return req.params.name == element.id;
        });
    
    res.render('project', {
        name: project.name,
        category: project.category,
        introtextnormal: project.introtextnormal,
        introtextbold: project.introtextbold,
        bannermock: project.bannermock,
        introimage: project.introimage,
    });
});

app.listen(port, () => {
    console.log("Server has been initialized in port: "+ port)
});