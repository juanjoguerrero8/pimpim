/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// Elimina las importaciones no utilizadas
// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// Importa firebase-functions si planeas usarlo
const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

// Configurar el transporte SMTP usando nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "tu-correo@gmail.com",
    pass: "tu-contraseña-de-aplicación",
  }, // Agrega una coma aquí
});

// Función para enviar correos electrónicos
exports.sendMail = functions.https.onRequest((req, res) => {
  const mailOptions = {
    from: "tu-correo@gmail.com",
    to: req.body.email,
    subject: "Contacto desde la web PimPim Fotomatones",
    text: req.body.message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    return res.status(200).send("Correo enviado: " + info.response);
  });
});
