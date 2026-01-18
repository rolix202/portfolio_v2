import express from 'express'
import * as dotenv from 'dotenv'
dotenv.config()
import morgan from 'morgan'
import cors from 'cors'
import winston from 'winston'
import rateLimit from 'express-rate-limit';
import helmet from 'helmet'

import contactRoute from './route/contactRoute.js'
import { STATUS_CODES } from './utils/statusCodes.js'
import { errorResponse } from './utils/responseHelpers.js'


const app = express()

// Trust proxy (required when behind a proxy like Render, Heroku, etc.)
// Set to 1 to trust the first proxy, more secure than true
app.set('trust proxy', 1);

// Winston logger setup
const logger = winston.createLogger({
    level: 'error',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(({ timestamp, level, message, stack }) => {
            return `${timestamp} [${level.toUpperCase()}]: ${message} ${stack ? `\nStack: ${stack}` : ''}`;
        })
    ),
    transports: [
        new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
        new winston.transports.Console() // immediate feedback during development
    ],
})

app.use(helmet())
app.use(morgan("dev"))
app.use(express.json())
app.use(cors({
    origin: process.env.ORIGIN || "http://localhost:5173",
    allowedHeaders: ["Content-Type"],
}));

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, //100 request per windowMS
    message: "Too many requests, please try again later.",
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    validate: {
        trustProxy: false, // Skip trust proxy validation since we handle it separately
    },
})

app.use('/api', limiter)


app.use("/api/v1/contact", contactRoute)

app.get("/", (req, res) => {
    res.send("Endpoint connected successfuly. Cheers!");
})


// Centralized error handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || STATUS_CODES.INTERNAL_SERVER_ERROR;
    const message = process.env.NODE_ENV === 'production' ? "An unexpected error occured. Please try again later." : err.message;

    // log the error
    logger.error(err.message, { stack: err.stack })

    res.status(statusCode).json(errorResponse(message))
})

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`server running on port ${port}`);
})