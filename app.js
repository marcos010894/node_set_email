var nodemailer = require("nodemailer");
var remetente = nodemailer.createTransport({

    host: "smtpi.kinghost.net",

    service: "smtpi.kinghost.net",

    port: 465,

    secure: true,

    auth: {

        user: "alerta@globalty.com.br",

        pass: "senha@1234"
    }

});


var emailASerEnviado = {

    from: "alerta@globalty.com.br",

    to: ["marcosmachadodev@gmail.com", "baladecoco356@gmail.com"],

    subject: "Enviando Email com Node.js",

    text: "Estou te enviando este email com node.js",

};


remetente.sendMail(emailASerEnviado, function (error) {

    if (error) {

        console.log(error);

    } else {

        console.log("Email enviado com sucesso.");

    }

});