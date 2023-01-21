const express = require("express")
const { userRoute } = require("./Routes/User.route")
const { profileRoute } = require("./Routes/Profile.route")
const {calcRoute} = require("./Routes/calc.route")
const { connection } = require("./Config/db")
const jwt = require("jsonwebtoken")
require("dotenv").config()
var cors = require("cors")
let app = express();
app.use(cors({
    origin:"*"
}))
app.use(express.json())
app.use("/user", userRoute)
app.get("/", (req, res) => {
    res.send("welcone to mock12")
})


const auth = (req, res, next) => {
    console.log("hello")
    let token = req.headers.authorization;
    
    if (token) {
        try {
            
            var decoded = jwt.verify(token, "secret")
            //console.log(decoded)
            if (decoded) {
                req.body.userID = decoded.userID;
                next()
            }
        } catch (error) {
            res.send({"data":"please login"})
        }
    } else {
        res.send({"data":"please login now"})
    }
}
app.use(auth)
app.use("/user", profileRoute)
app.use("/find",calcRoute)

app.listen(process.env.PORT, async () => {
    try {
        await connection
        console.log("connection established at port",8080)
    } catch (error) {
        console.log(err.message)
    }
})