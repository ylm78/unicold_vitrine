import express from 'express';
import nodemailer from 'nodemailer';

const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Champs manquants' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
      }
    });

    // Vérifie la connexion SMTP (log d’erreur si pb d’auth)
    await transporter.verify().catch(err => console.error('SMTP verify error:', err?.message || err));

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.GMAIL_USER,
      subject: '📩 Nouveau message via le site Unicold',
      text: `Nom : ${name}\nEmail : ${email}\n\nMessage :\n${message}`
    });

    res.json({ success: true, message: 'Mail envoyé avec succès' });
  } catch (err) {
    console.error('Erreur Nodemailer :', err);
    res.status(500).json({ success: false, message: 'Erreur lors de l’envoi du mail.' });
  }
});

export default router;
