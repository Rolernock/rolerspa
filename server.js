import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import messageRouter from './routes/messageRoutes.js'
import ConnectDB from './config/db.js'

dotenv.config()
const app = express()
const PORT = process.env.PORT

//Parse incoming requests with json
app.use(express.json())

//Routes
app.use('/api/message', messageRouter)

//Resolve __dirname for ES Module
const __dirname = path.resolve()

//Use client app
app.use(express.static(path.join(__dirname, '/client/dist')))

//Render client app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/dist/index.html'))
})

//Connect DB and server
ConnectDB()
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`))
