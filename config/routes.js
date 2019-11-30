//pass the whole application into this function
const routes = (app) => {
    //adding specific routes
    //calling the method on the controller
    app.get('/', (req, res) => {
        res.send('hello, welcome to Harrys skeleton exress app for controller/services pattern')
    })
}

//making it available to be used in app.js
module.exports = routes;