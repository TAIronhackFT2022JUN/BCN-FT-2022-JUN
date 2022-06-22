const lessons = [
  {
    topic: "Javascript",
    description: "Don't use var",
    bootcamp: "Web",
    approved: true,
  },
  {
    topic: "Handlebars",
    description: "It's like html... but better!",
    bootcamp: "Web",
    approved: true,
  },
  {
    topic: "Hacking 101",
    description: "How to hack someone's facebook",
    bootcamp: "Cyber",
    approved: false,
  },
  {
    topic: "Designing",
    description: "How to add proper colors",
    bootcamp: "UX",
    approved: true,
  }
]

// al crear modulos, para que otras partes del codigo la usen, debemos exportarlas
module.exports = lessons