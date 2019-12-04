const express = require('express'),
  engines = require('consolidate'),
  handlebars = require('handlebars');
const port = 3000;

let app = express();


let database = [
  {
    id: "ice_cream",
    type: "code",
    field: "FrontEnd - UI Design",
    name: "Cremosos",
    category: "Web Design / Responsive",
    introText: [
      {
        text: [
          {
            text: "In the design of Cremosos webite, we had the challenge to ",
            isBold: false
          },
          {
            text: "create an experience that interest people and atract more customers.",
            isBold: true
          }
        ]
      }

    ],
    bannermock: "../assets/projects/iceCream/bannerMockUp.png",
    introimage: "../assets/projects/iceCream/intro.png",
    secondImage: "../assets/projects/iceCream/trivia.png",
    secondTitle: "The project",
    secondText: [
      {
        text: [
          {
            text: "The project was about the redesign of Ice Cream Nation’s website. It focused in a ",
            isBold: false
          },
          {
            text: "young target between 18 and 24 years, ",
            isBold: true
          },
          {
            text: "with the purpose to get more young people. The trivia is selected by its ",
            isBold: false
          },
          {
            text: "engaging and its ease of sharing on social media.",
            isBold: true
          },
        ]
      }

    ],
    thirdImage: "../assets/projects/iceCream/characters.png",
    thirdTitle: "The characters",
    thirdText: [
      {
        text: [
          {
            text: "Were selected vivid colors to attract people’s interest. ",
            isBold: false
          },
          {
            text: "The different colours and accesories were added to make it personanizable, ",
            isBold: true
          },
          {
            text: "the people answered a trivia and the app tell them.",
            isBold: false
          }
        ]
      }

    ],
    behanceUrl: "https://www.behance.net/gallery/88977465/Cremosos",
    projectUrl: "http://ice-cream-nation.herokuapp.com/",
  },
  {
    id: "mingu",
    type: "design",
    field: "UX Research - UI Design - FrontEnd",
    name: "Mingu",
    category: "Experience Design",
    introText: [
      {
        text: [
          {
            text: "Presenting Mingu, a network connected app that try to ",
            isBold: false
          },
          {
            text: "make easier a conversation for people, through a collaborative game experience.",
            isBold: true
          }
        ]
      }
    ],
    bannermock: "../assets/projects/mingu/bannerMockUp.png",
    introimage: "../assets/projects/mingu/intro.png",
    secondImage: "../assets/projects/mingu/screens.png",
    secondTitle: "The problem",
    secondText: [
      {
        text: [
          {
            text: "Despite the human need to be a social being, nowadays we found ourselves separated. The sociocultural context we are exposed to change our way to behave and how ",
            isBold: false
          },
          {
            text: "we build relationships.",
            isBold: true
          }
        ],

      }, {
        text:
        {
          text: [
            {
              text: "This project try to find a way in which through the incorporation of an experience in the daily activities, the friendship relationships can be boosted using a popular game ",
              isBold: false
            },
            {
              text: "with changes in their experience that boost the connection between individuals.",
              isBold: true
            }
          ]
        }


      }


    ],
    thirdImage: "../assets/projects/mingu/general.png",
    thirdTitle: "The solution",
    thirdText:
      [

        {
          text: [
            {
              text: "For the ideation phase a brainstorming were made, a lot of possible solutions were thinked, but after a filtering found this solution:",
              isBold: false
            }
          ]
        },
        {
          text: [
            {
              text: "A web app and a mobile app throughout the rethinking of the classic charades game is made.",
              isBold: true
            }
          ]
        }, {
          text: [
            {
              text: "This app was created thinking that today millennials give preference to the development of virtual experiences over those given in the real world, generating that ",
              isBold: false
            },
            {
              text: "they neglect their close social environment, ",
              isBold: true
            },
            ,
            {
              text: "that is, that they move away from the people around them. ",
              isBold: false
            },
            {
              text: "And taking into account, that some of the most important people for them and with whom they have the greatest contact are their friends.",
              isBold: true
            }
          ]
        }


      ],
      behanceUrl: "https://www.behance.net/gallery/88986275/Mingu",
  },
  {
    id: "vibo",
    type: "code",
    field: "FrontEnd",
    name: "vibo",
    category: "Experience Design",
    introText: [
      {
        text: [

          {
            text: "Vibo is a web a buit in React, and a mobile app built in React Native. It is a solution that tries to ",
            isBold: false
          },
          {
            text: "simplify the recolection, analysis and visualization of data ",
            isBold: true
          },
          {
            text: " for their writing in a research context.",
            isBold: false
          }

        ]
      }

    ],
    bannermock: "../assets/projects/vibo/bannerMockUp.png",
    introimage: "../assets/projects/vibo/intro.png",
    secondImage: "../assets/projects/vibo/role.png",
    secondTitle: "The role",
    secondText: [
      {
        text: [
          {
            text: "For the realization of the project we were a team of almost nine people. The UX team, the UI team, and the development team. ",
            isBold: false
          },
          {
            text: "My role in the project was in the Dev Team developing features for the app and the website.",
            isBold: true
          }
        ]
      },
      {
        text: [
          {
            text: "It was used github to merge projects, so it was a ",
            isBold: false
          },
          {
            text: "great learning project, ",
            isBold: true
          },
          {
            text: "because we went against the ",
            isBold: false
          },
          {
            text: "team working obstacles ",
            isBold: true
          },
          {
            text: "in the development, like ",
            isBold: false
          },
          {
            text: "different coding ways and merging of features.",
            isBold: true
          }
        ]
      }
    ],
    thirdImage: "../assets/projects/vibo/general.png",
    thirdTitle: "The solution",
    thirdText:
      [
        {
          text: [
            {
              text: "In React and React Native the solution was developed, as a platform with three different types of users, the administrator, the journalist and the reader. However, ",
              isBold: false
            },

            {
              text: "we only focused on the journalist in the proposed solution, ",
              isBold: true
            },

            {
              text: "which ended up being an application that allowed the ",
              isBold: false
            },

            {
              text: "joint collaboration between several journalists, the organization of archives and the upload of CSV data that would allow to better organize the information.",
              isBold: true
            }


          ]
        }
      ],
      behanceUrl: "https://www.behance.net/gallery/88986423/vibo",



  }
]

const competencies = [
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

app.get('/projects', (req, res) => {
  res.render('projects', {
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
    introText: project.introText,
    bannermock: project.bannermock,
    introimage: project.introimage,
    secondImage: project.secondImage,
    secondTitle: project.secondTitle,
    secondText: project.secondText,
    thirdImage: project.thirdImage,
    thirdTitle: project.thirdTitle,
    thirdText: project.thirdText,
    behanceUrl: project.behanceUrl
  });
});
// process.env.PORT || 
app.listen(process.env.PORT || port, () => {  
  console.log("Server has been initialized");
});