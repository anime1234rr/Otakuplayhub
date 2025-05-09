require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { to, subject, text } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Otakuplayhub" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text,
    });

    res.status(200).json({ message: "Correo enviado" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al enviar correo" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Servidor corriendo en ${PORT}`));
