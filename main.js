var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});
//Comentario
typewriter.typeString('Ingeniería Aeroespacial')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Desarrolladora Frontend Jr.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('<strong>Per aspera ad astra</strong>')
    .pauseFor(2500)
    .start();