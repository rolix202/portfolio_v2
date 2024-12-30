import express, { response } from 'express'
import * as dotenv from 'dotenv'
dotenv.config()
import morgan from 'morgan'
import cors from 'cors'
import { body, validationResult } from 'express-validator'
import nodemailer from 'nodemailer'
import axios from 'axios'

const app = express()

app.use(morgan("dev"))
app.use(express.json())
app.use(cors({
    origin: process.env.ORIGIN || "http://localhost:5173",
    allowedHeaders: ["Content-Type"],
}));


const sendEmail = async(c_name, email, message ) => {
    const output= `
    <div style="background-color: #1e293b; color: #f8fafc; font-family: Arial, sans-serif; padding: 20px; border-radius: 8px; max-width: 600px; margin: auto;">
      <h2 style="color: #a855f7; text-align: center; margin-bottom: 20px;">New Message from Your Website</h2>
      <p style="color: #cbd5e1; font-size: 16px; line-height: 1.6;">
        Hey Roland,  
        You've received a new message from your website. Here's what they said:
      </p>
      <div style="background-color: #0f172a; padding: 15px; border-radius: 6px; margin: 20px 0;">
        <p><strong style="color: #f8fafc;">Name:</strong> <span style="color: #a855f7;">${c_name}</span></p>
        <p><strong style="color: #f8fafc;">Email:</strong> <span style="color: #a855f7;">${email}</span></p>
        <p><strong style="color: #f8fafc;">Message:</strong></p>
        <p style="color: #cbd5e1;">${message}</p>
      </div>
      <p style="font-size: 14px; color: #cbd5e1;">
        Remember to respond to this inquiry as soon as possible to keep up with your amazing branding and client relationships!
      </p>
    </div>
  `;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: '',
    port: 587,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    }
  });

  try {
    const info = await transporter.sendMail({
        from: `"Oodo Roland" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_RECIPIENT,
        subject: "New Message from Oodo Roland’s Website ✔",
        html: output,
    })

    return info.messageId

  } catch (error) {
    console.error("Error sending email:", error.message);
      res.status(500).json({
        message: "Failed to send your message. Please try again later.",
      });
  }

}

const verifyRecaptcha = async (token) => {
    try {
        const { data } = await axios.post("https://www.google.com/recaptcha/api/siteverify", null, {
            params: {
                secret: process.env.RECAPTCHA_SECRET_KEY,
                response: token
            }
        })

        return data.success;

    } catch (error) {
        console.log("Error verifying reCAPTCHA:", error.message);
        return false
    }
}

app.post("/api/v1/contact", [
    body("name").notEmpty().withMessage("Name is required!").trim().escape(),
    body("email").notEmpty().withMessage("Email is required!").trim().escape().isEmail().withMessage("Not a valid email address!"),
    body("message").notEmpty().withMessage("Message is required!").trim().escape().isLength({max: 1000}).withMessage("Maximum of 200 characers"),
    body("token").notEmpty().withMessage("reCAPTCHA token is required!"),
], async (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()){
        const errorMsg = errors.array().map(err => err.msg)
        return res.status(400).json({
            message: errorMsg
        })
    }

    const { name, email, message, token } = req.body

    const isHuman = await verifyRecaptcha(token)

    console.log(isHuman);
    
    console.log(req.body);
    
    

    try {
        const messageId = await sendEmail(name, email, message);

        
    } catch (error) {
        
    }
    
    
})

app.get("/", (req, res) => {
    res.send("Endpoint connected successfuly. Thanks for dropping by, cheers!");
})

const port = process.env.PORT || 3000

app.listen(port, (req, res) => {
    console.log(`server running on port ${port}`);
})