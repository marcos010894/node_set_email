const express = require('express')
const server = express();
var nodemailer = require("nodemailer");
var emailASerEnviado = {
    from: "alerta@globalty.com.br",
    to: '',
    subject: '',
    text: '',
};
server.use(express.json())

server.post('/email', (req, res) => {
  const {email, assunto, mensagem} = req.body
  emailASerEnviado.to = email
  emailASerEnviado.subject = assunto
  emailASerEnviado.text = mensagem  
  console.log(req.body)   
  setEmail()
  return res.send("Você acesso minha api do tipo post");
});

//escutar porta.
server.listen('3000', () => {
    console.log('funcionou')
})
//Menssagem Enviar
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




function setEmail(){
    remetente.sendMail(emailASerEnviado, function (error) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email enviado com sucesso.");
        }
    });
}
