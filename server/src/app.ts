import 'reflect-metadata'
import express from 'express'
import cors from 'cors'
import { router } from '@src/router'
import '@src/shared/container'
import 'dotenv/config'
import 'colors'

const app = express()

app.use(express.json())
app.use(cors())
app.use(router)

export { app }