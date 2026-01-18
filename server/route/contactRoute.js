import express from "express"
import { body, validationResult } from 'express-validator'
import { sendEmail } from "../utils/sendEmail.js"
import { verifyRecaptcha } from "../utils/verifyCaptcha.js"
import { STATUS_CODES } from "../utils/statusCodes.js"
import { HttpError } from "../utils/responseHelpers.js"


const router = express.Router()

router.post("/", [
    body("name").notEmpty().withMessage("Name is required!").trim().escape(),
    body("email").notEmpty().withMessage("Email is required!").trim().escape().isEmail().withMessage("Not a valid email address!"),
    body("message").notEmpty().withMessage("Message is required!").trim().escape().isLength({ max: 1000 }).withMessage("Maximum of 1000 characers"),
    body("token").notEmpty().withMessage("reCAPTCHA token is required!"),
], async (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        const errorMsg = errors.array().map(err => err.msg)
        return res.status(STATUS_CODES.BAD_REQUEST).json({
            message: errorMsg
        })
    }

    const { name, email, message, token } = req.body

    const isHuman = await verifyRecaptcha(token)

    console.log("isHuman", isHuman);

    try {
        if (!isHuman) {
            throw new HttpError("Verification failed. Please try again or email me directly. Thanks!", STATUS_CODES.BAD_REQUEST)
        }

        await sendEmail(name, email, message);

        res.status(200).json({
            message: "Your message has been sent successfully!"
        });

    } catch (error) {
        next(error) //passing error to the centralized middleware
    }


})

export default router