var express = require('express');
const app = express()
app.use(express.urlencoded({
    extended: true
}))
var router = express.Router();

router.get('/', function(request, response) {
    response.send('Hello world')
})

// Home page route.
router.post('/', function (req, res) {
    const name = req.body.name
    const email = req.body.email
    const phone = req.body.phone
    const reasons = req.body.reasons || req.query.reasons || []
    console.log(name, email, phone, reasons)
    res.end()
})

app.use(router)

app.listen(3000, () => {
    console.log('starting server on port 3000')
})