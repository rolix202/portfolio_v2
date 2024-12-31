import axios from 'axios'
import { HttpError } from './responseHelpers.js';
import { STATUS_CODES } from './statusCodes.js';

export const verifyRecaptcha = async (token) => {
    try {
        const { data } = await axios.post("https://www.google.com/recaptcha/api/siteverify", null, {
            params: {
                secret: process.env.RECAPTCHA_SECRET_KEY,
                response: token
            }
        })

        return data.success;

    } catch (error) {
        throw new HttpError("reCAPTCHA verification failed. Try again!", STATUS_CODES.SERVICE_UNAVAILABLE)
    }
}